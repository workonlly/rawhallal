"use client";
import { useEffect, useState, useRef } from "react";
import supabase from '../../../supabase';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const productTables = [
  { key: 'fresh1', label: 'home' },
  { key: 'chicken', label: 'Chicken' },
  { key: 'fish', label: 'Fish' },
  { key: 'mutton', label: 'Mutton' },
  { key: 'title', label: 'Title Table' },
];

// If you haven't already, install @headlessui/react:
// npm install @headlessui/react

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'lacleo2024'; // Change this to your desired password
const SESSION_KEY = 'admin_logged_in';
const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minutes in ms

export default function AdminPanel() {
  // Product Management
  const [products, setProducts] = useState<Record<string, any[]>>({});
  const [editing, setEditing] = useState<{ table: string, product: any } | null>(null);
  const [form, setForm] = useState({ maintext: '', sectext: '', price: '' });
  const [selectedTable, setSelectedTable] = useState('fresh1');

  // SEO Metadata Management
  const [seoForm, setSeoForm] = useState({ title: '', metadata: '', metakeywords: '', heading: '' });
  const [editingSeo, setEditingSeo] = useState<{ table: string, product: any } | null>(null);

  // Title Table Management
  const [titleTableData, setTitleTableData] = useState<any[]>([]);
  const [titleForm, setTitleForm] = useState({ title: '', metadata: '', metakeywords: '', heading: '' });
  const [editingTitle, setEditingTitle] = useState<any | null>(null);

  // Contact Info
  const [contact, setContact] = useState({ info: '', links: '', email: '' });

  // Image Management
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string[]>([]);

  // Login state
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const lastActivityRef = useRef(Date.now());

  // Fetch products for all tables
  useEffect(() => {
    productTables.forEach(async ({ key }) => {
      const { data } = await supabase.from(key).select('*');
      setProducts((prev) => ({ ...prev, [key]: data || [] }));
    });
  }, []);

  // Fetch title table data
  useEffect(() => {
    const fetchTitleData = async () => {
      const { data } = await supabase.from('title').select('*');
      setTitleTableData(data || []);
    };
    fetchTitleData();
  }, []);

  // Check session on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLoggedIn(localStorage.getItem(SESSION_KEY) === 'true');
    }
  }, []);

  // Session timeout logic
  useEffect(() => {
    if (!loggedIn) return;
    const resetTimer = () => {
      lastActivityRef.current = Date.now();
    };
    const checkTimeout = () => {
      if (Date.now() - lastActivityRef.current > SESSION_TIMEOUT) {
        handleLogout();
      }
    };
    window.addEventListener('mousemove', resetTimer);
    timerRef.current = setInterval(checkTimeout, 1000);
    return () => {
      window.removeEventListener('mousemove', resetTimer);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loggedIn]);

  // Login handler
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (loginForm.username === ADMIN_USER && loginForm.password === ADMIN_PASS) {
      setLoggedIn(true);
      localStorage.setItem(SESSION_KEY, 'true');
      setLoginError('');
      lastActivityRef.current = Date.now();
    } else {
      setLoginError('Invalid username or password');
    }
  };
  // Logout handler
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem(SESSION_KEY);
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-xs flex flex-col gap-3">
          <h2 className="text-xl font-bold mb-2 text-center">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={loginForm.username}
            onChange={e => setLoginForm(f => ({ ...f, username: e.target.value }))}
            className="border p-2 rounded"
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))}
            className="border p-2 rounded"
          />
          {loginError && <div className="text-red-600 text-sm text-center">{loginError}</div>}
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
        </form>
      </div>
    );
  }

  // Product form handlers
  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (editing) {
        const { error } = await supabase.from(editing.table).update(form).eq('id', editing.product.id);
        if (error) {
          alert('Error updating product: ' + error.message);
          return;
        }
        alert('Product updated successfully!');
      } else {
        const { error } = await supabase.from(selectedTable).insert([form]);
        if (error) {
          alert('Error adding product: ' + error.message);
          return;
        }
        alert('Product added successfully!');
      }
      setForm({ maintext: '', sectext: '', price: '' });
      setEditing(null);
      // Refresh
      const { data } = await supabase.from(selectedTable).select('*');
      setProducts((prev) => ({ ...prev, [selectedTable]: data || [] }));
    } catch (error) {
      alert('Error: ' + error);
    }
  };
  const handleEdit = (table: string, product: any) => {
    setEditing({ table, product });
    setForm({ maintext: product.maintext, sectext: product.sectext, price: product.price });
    setSelectedTable(table);
  };
  const handleDelete = async (table: string, id: number) => {
    try {
      const { error } = await supabase.from(table).delete().eq('id', id);
      if (error) {
        alert('Error deleting product: ' + error.message);
        return;
      }
      setProducts((prev) => ({ ...prev, [table]: prev[table].filter((p: any) => p.id !== id) }));
      alert('Product deleted successfully!');
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  // SEO form handlers
  const handleSeoChange = (e: any) => setSeoForm({ ...seoForm, [e.target.name]: e.target.value });
  const handleSeoSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Prepare data for Supabase - handle empty strings
      const seoData = {
        title: seoForm.title || null,
        metadata: seoForm.metadata || null,
        metakeywords: seoForm.metakeywords ? seoForm.metakeywords.split(',').map(k => k.trim()).filter(k => k) : null,
        heading: seoForm.heading || null
      };

      if (editingSeo) {
        const { error } = await supabase.from(editingSeo.table).update(seoData).eq('id', editingSeo.product.id);
        if (error) {
          alert('Error updating SEO: ' + error.message);
          return;
        }
        alert('SEO updated successfully!');
      }
      setSeoForm({ title: '', metadata: '', metakeywords: '', heading: '' });
      setEditingSeo(null);
      // Refresh
      const { data } = await supabase.from(selectedTable).select('*');
      setProducts((prev) => ({ ...prev, [selectedTable]: data || [] }));
    } catch (error) {
      alert('Error: ' + error);
    }
  };
  const handleSeoEdit = (table: string, product: any) => {
    setEditingSeo({ table, product });
    setSeoForm({ 
      title: product.title || '', 
      metadata: product.metadata || '', 
      metakeywords: Array.isArray(product.metakeywords) ? product.metakeywords.join(', ') : (product.metakeywords || ''),
      heading: product.heading || ''
    });
    setSelectedTable(table);
  };
  const handleSeoCancel = () => {
    setSeoForm({ title: '', metadata: '', metakeywords: '', heading: '' });
    setEditingSeo(null);
  };

  // Title table form handlers
  const handleTitleChange = (e: any) => setTitleForm({ ...titleForm, [e.target.name]: e.target.value });
  const handleTitleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Prepare data for Supabase - handle empty strings
      const titleData = {
        title: titleForm.title || null,
        metadata: titleForm.metadata || null,
        metakeywords: titleForm.metakeywords ? titleForm.metakeywords.split(',').map(k => k.trim()).filter(k => k) : null,
        heading: titleForm.heading || null
      };

      if (editingTitle) {
        const { error } = await supabase.from('title').update(titleData).eq('id', editingTitle.id);
        if (error) {
          alert('Error updating title: ' + error.message);
          return;
        }
        alert('Title updated successfully!');
      } else {
        const { error } = await supabase.from('title').insert([titleData]);
        if (error) {
          alert('Error adding title: ' + error.message);
          return;
        }
        alert('Title added successfully!');
      }
      setTitleForm({ title: '', metadata: '', metakeywords: '', heading: '' });
      setEditingTitle(null);
      // Refresh title data
      const { data } = await supabase.from('title').select('*');
      setTitleTableData(data || []);
    } catch (error) {
      alert('Error: ' + error);
    }
  };
  const handleTitleEdit = (item: any) => {
    setEditingTitle(item);
    setTitleForm({ 
      title: item.title || '', 
      metadata: item.metadata || '', 
      metakeywords: Array.isArray(item.metakeywords) ? item.metakeywords.join(', ') : (item.metakeywords || ''),
      heading: item.heading || ''
    });
  };
  const handleTitleCancel = () => {
    setTitleForm({ title: '', metadata: '', metakeywords: '', heading: '' });
    setEditingTitle(null);
  };
  const handleTitleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from('title').delete().eq('id', id);
      if (error) {
        alert('Error deleting title: ' + error.message);
        return;
      }
      setTitleTableData(prev => prev.filter(item => item.id !== id));
      alert('Title deleted successfully!');
    } catch (error) {
      alert('Error: ' + error);
    }
  };

  // Image upload handlers
  const handleImageChange = (e: any) => {
    setImageFiles(e.target.files);
    setImagePreview(Array.from(e.target.files as FileList).map((file: any) => URL.createObjectURL(file)));
  };
  const handleImageUpload = async (bucket: string, folder: string) => {
    if (!imageFiles) return;
    setUploading(true);
    try {
      for (const file of Array.from(imageFiles)) {
        const { error } = await supabase.storage.from(bucket).upload(`${folder}/${file.name}`, file, { upsert: true });
        if (error) {
          alert('Error uploading image: ' + error.message);
          return;
        }
      }
      alert('Upload complete!');
    } catch (error) {
      alert('Error uploading: ' + error);
    } finally {
      setUploading(false);
      setImageFiles(null);
      setImagePreview([]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-end mb-2">
        <button onClick={handleLogout} className="bg-red-600 text-white px-3 py-1 rounded">Logout</button>
      </div>
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Panel</h1>
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-green-100 p-1 mb-6">
          <Tab className={({ selected }: { selected: boolean }) => classNames('w-full py-2.5 text-sm font-medium leading-5 rounded-lg', selected ? 'bg-green-500 text-white' : 'text-green-900 hover:bg-green-200')}>Products</Tab>
          <Tab className={({ selected }: { selected: boolean }) => classNames('w-full py-2.5 text-sm font-medium leading-5 rounded-lg', selected ? 'bg-green-500 text-white' : 'text-green-900 hover:bg-green-200')}>SEO Metadata</Tab>
        </Tab.List>
        <Tab.Panels>
          {/* Products Tab */}
          <Tab.Panel>
            <div className="mb-4 flex gap-2">
              {productTables.map(({ key, label }) => (
                <button key={key} onClick={() => setSelectedTable(key)} className={classNames('px-3 py-1 rounded', selectedTable === key ? 'bg-green-600 text-white' : 'bg-green-100 text-green-900')}>{label}</button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="mb-6 space-y-2">
              <input name="maintext" value={form.maintext} onChange={handleChange} placeholder="Main Text" className="w-full border p-2 rounded" />
              <input name="sectext" value={form.sectext} onChange={handleChange} placeholder="Secondary Text" className="w-full border p-2 rounded" />
              <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="w-full border p-2 rounded" />
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">{editing ? 'Update' : 'Add'} Product</button>
            </form>
            <ul>
              {(products[selectedTable] || []).map((product: any) => {
                const bucket = selectedTable === 'fresh1' ? 'fresh' : selectedTable;
                return (
                  <li key={product.id} className="flex flex-col border-b py-4 mb-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold">{product.maintext}</div>
                        <div className="text-sm">{product.sectext}</div>
                        <div className="text-green-700 font-bold">₹{product.price}</div>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => handleEdit(selectedTable, product)} className="text-blue-600">Edit</button>
                        <button onClick={() => handleDelete(selectedTable, product.id)} className="text-red-600">Delete</button>
                      </div>
                    </div>
                    {/* Images for this product */}
                    <div className="mt-2">
                      <ProductImages bucket={bucket} folder={String(product.id)} />
                      <div className="flex items-center gap-2 mt-2">
                        <input type="file" multiple accept="image/*" onChange={handleImageChange} className="mb-2" />
                        <button disabled={uploading} onClick={async () => {
                          await handleImageUpload(bucket, String(product.id));
                        }} className="bg-green-600 text-white px-2 py-1 rounded text-sm">{uploading ? 'Uploading...' : 'Upload Images'}</button>
                      </div>
                      {imagePreview.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-2">
                          {imagePreview.map((src, i) => (
                            <img key={i} src={src} alt="preview" className="w-14 h-14 object-contain rounded border" />
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </Tab.Panel>
          {/* SEO Metadata Tab */}
          <Tab.Panel>
            <div className="mb-4 flex gap-2">
              {productTables.map(({ key, label }) => (
                <button key={key} onClick={() => setSelectedTable(key)} className={classNames('px-3 py-1 rounded', selectedTable === key ? 'bg-green-600 text-white' : 'bg-green-100 text-green-900')}>{label}</button>
              ))}
            </div>
            
            {editingSeo && (
              <form onSubmit={handleSeoSubmit} className="mb-6 p-4 border rounded bg-gray-50">
                <h3 className="text-lg font-bold mb-3">Editing SEO for: {editingSeo.product.maintext || editingSeo.product.title || 'Untitled'}</h3>
                <div className="space-y-2">
                  <input name="title" value={seoForm.title} onChange={handleSeoChange} placeholder="Page Title" className="w-full border p-2 rounded" />
                  <textarea name="metadata" value={seoForm.metadata} onChange={handleSeoChange} placeholder="Meta Description" className="w-full border p-2 rounded" rows={3} />
                  <input name="metakeywords" value={seoForm.metakeywords} onChange={handleSeoChange} placeholder="Meta Keywords (comma-separated)" className="w-full border p-2 rounded" />
                  <input name="heading" value={seoForm.heading} onChange={handleSeoChange} placeholder="Main Heading" className="w-full border p-2 rounded" />
                  <div className="flex gap-2">
                    <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Update SEO</button>
                    <button type="button" onClick={handleSeoCancel} className="bg-red-600 text-white px-4 py-2 rounded">Cancel</button>
                  </div>
                </div>
              </form>
            )}

            {selectedTable === 'title' && editingTitle && (
              <form onSubmit={handleTitleSubmit} className="mb-6 p-4 border rounded bg-blue-50">
                <h3 className="text-lg font-bold mb-3">Editing Title Entry: {editingTitle.title || 'Untitled'}</h3>
                <div className="space-y-2">
                  <input name="title" value={titleForm.title} onChange={handleTitleChange} placeholder="Page Title" className="w-full border p-2 rounded" />
                  <textarea name="metadata" value={titleForm.metadata} onChange={handleTitleChange} placeholder="Meta Description" className="w-full border p-2 rounded" rows={3} />
                  <input name="metakeywords" value={titleForm.metakeywords} onChange={handleTitleChange} placeholder="Meta Keywords (comma-separated)" className="w-full border p-2 rounded" />
                  <input name="heading" value={titleForm.heading} onChange={handleTitleChange} placeholder="Main Heading" className="w-full border p-2 rounded" />
                  <div className="flex gap-2">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Update Title</button>
                    <button type="button" onClick={handleTitleCancel} className="bg-red-600 text-white px-4 py-2 rounded">Cancel</button>
                  </div>
                </div>
              </form>
            )}

            {selectedTable === 'title' && !editingTitle && (
              <form onSubmit={handleTitleSubmit} className="mb-6 p-4 border rounded bg-blue-50">
                <h3 className="text-lg font-bold mb-3">Add New Title Entry</h3>
                <div className="space-y-2">
                  <input name="title" value={titleForm.title} onChange={handleTitleChange} placeholder="Page Title" className="w-full border p-2 rounded" />
                  <textarea name="metadata" value={titleForm.metadata} onChange={handleTitleChange} placeholder="Meta Description" className="w-full border p-2 rounded" rows={3} />
                  <input name="metakeywords" value={titleForm.metakeywords} onChange={handleTitleChange} placeholder="Meta Keywords (comma-separated)" className="w-full border p-2 rounded" />
                  <input name="heading" value={titleForm.heading} onChange={handleTitleChange} placeholder="Main Heading" className="w-full border p-2 rounded" />
                  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Title</button>
                </div>
              </form>
            )}
            
            <div className="space-y-4">
              {(selectedTable === 'title' ? titleTableData : (products[selectedTable] || [])).map((item: any) => (
                <div key={item.id} className="border rounded p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{item.maintext || item.title || 'Untitled'}</h4>
                      {item.sectext && <p className="text-sm text-gray-600">{item.sectext}</p>}
                      {item.price && <p className="text-green-700 font-bold">₹{item.price}</p>}
                      {selectedTable === 'title' && <p className="text-sm text-gray-600">ID: {item.id}</p>}
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => selectedTable === 'title' ? handleTitleEdit(item) : handleSeoEdit(selectedTable, item)} 
                        className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Edit SEO
                      </button>
                      {selectedTable === 'title' && (
                        <button 
                          onClick={() => handleTitleDelete(item.id)} 
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Title:</strong> 
                      <p className="text-gray-700 mt-1">{item.title || 'Not set'}</p>
                    </div>
                    <div>
                      <strong>Meta Description:</strong> 
                      <p className="text-gray-700 mt-1">{item.metadata || 'Not set'}</p>
                    </div>
                    <div>
                      <strong>Meta Keywords:</strong> 
                      <p className="text-gray-700 mt-1">{item.metakeywords || 'Not set'}</p>
                    </div>
                    <div>
                      <strong>Main Heading:</strong> 
                      <p className="text-gray-700 mt-1">{item.heading || 'Not set'}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {selectedTable === 'title' && titleTableData.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No title entries found. Add your first entry using the form above.
                </div>
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

function ProductImages({ bucket, folder }: { bucket: string, folder: string }) {
  const [urls, setUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: folders } = await supabase.storage.from('fresh').list('', { limit: 100 });
      if (!folders || !folders.find((f: any) => f.name === folder)) {
        setUrls([]);
        setLoading(false);
        return;
      }
      const { data: files, error: fileError } = await supabase.storage.from(bucket).list(folder);
      if (fileError) throw fileError;
      if (files) {
        setUrls(
          files
            .filter((file: any) =>
              file.name &&
              !file.name.startsWith('.') &&
              /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
            )
            .map((file: any) =>
              `https://akqmahrvurcswatrffln.supabase.co/storage/v1/object/public/${bucket}/${folder}/${file.name}`
            )
        );
      }
    } catch (err: any) {
      setError('Failed to load images');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [bucket, folder]);

  // Delete image handler
  const handleDelete = async (url: string) => {
    const fileName = url.split('/').pop();
    await supabase.storage.from(bucket).remove([`${folder}/${fileName}`]);
    fetchImages();
  };

  if (loading) return <div className="text-xs text-gray-400">Loading images...</div>;
  if (error) return <div className="text-xs text-red-500">{error}</div>;
  if (!urls.length) return <div className="text-xs text-gray-400">No images</div>;

  return (
    <div className="flex flex-wrap gap-2">
      {urls.map((url, i) => (
        <div key={i} className="relative group">
          <img src={url} alt="product" className="w-14 h-14 object-contain rounded border" />
          <button
            onClick={() => handleDelete(url)}
            className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded px-1 opacity-80 group-hover:opacity-100"
            title="Delete"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
