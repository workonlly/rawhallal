"use client";
import { useEffect, useState, useRef } from "react";
import supabase from '../../../supabase';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const productTables = [
  { key: 'fresh1', label: 'Features' },
  { key: 'chicken', label: 'Chicken' },
  { key: 'fish', label: 'Fish' },
  { key: 'mutton', label: 'Mutton' },
];

// If you haven't already, install @headlessui/react:
// npm install @headlessui/react

// Add index signature to sections state
type SectionMap = {
  [key: string]: { title: string; iframe: string };
};

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

  // Section Management
  const [sections, setSections] = useState<SectionMap>({
    features: { title: 'Features', iframe: '' },
    chicken: { title: 'Chicken', iframe: '' },
    fish: { title: 'Fish', iframe: '' },
    mutton: { title: 'Mutton', iframe: '' },
  });

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
    if (editing) {
      await supabase.from(editing.table).update(form).eq('id', editing.product.id);
    } else {
      await supabase.from(selectedTable).insert([form]);
    }
    setForm({ maintext: '', sectext: '', price: '' });
    setEditing(null);
    // Refresh
    const { data } = await supabase.from(selectedTable).select('*');
    setProducts((prev) => ({ ...prev, [selectedTable]: data || [] }));
  };
  const handleEdit = (table: string, product: any) => {
    setEditing({ table, product });
    setForm({ maintext: product.maintext, sectext: product.sectext, price: product.price });
    setSelectedTable(table);
  };
  const handleDelete = async (table: string, id: number) => {
    await supabase.from(table).delete().eq('id', id);
    setProducts((prev) => ({ ...prev, [table]: prev[table].filter((p: any) => p.id !== id) }));
  };

  // Image upload handlers
  const handleImageChange = (e: any) => {
    setImageFiles(e.target.files);
    setImagePreview(Array.from(e.target.files as FileList).map((file: any) => URL.createObjectURL(file)));
  };
  const handleImageUpload = async (bucket: string, folder: string) => {
    if (!imageFiles) return;
    setUploading(true);
    for (const file of Array.from(imageFiles)) {
      await supabase.storage.from(bucket).upload(`${folder}/${file.name}`, file, { upsert: true });
    }
    setUploading(false);
    setImageFiles(null);
    setImagePreview([]);
    alert('Upload complete!');
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
          <Tab className={({ selected }: { selected: boolean }) => classNames('w-full py-2.5 text-sm font-medium leading-5 rounded-lg', selected ? 'bg-green-500 text-white' : 'text-green-900 hover:bg-green-200')}>Sections</Tab>
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
          {/* Sections Tab */}
          <Tab.Panel>
            <div className="mb-4">Edit section titles and iframe links:</div>
            {Object.entries(sections).map(([key, sec]) => (
              <div key={key} className="mb-4 p-3 border rounded">
                <input value={sec.title} onChange={e => setSections(s => ({ ...s, [key]: { ...s[key], title: e.target.value } }))} className="w-full border p-2 rounded mb-2" placeholder="Section Title" />
                <input value={sec.iframe} onChange={e => setSections(s => ({ ...s, [key]: { ...s[key], iframe: e.target.value } }))} className="w-full border p-2 rounded mb-2" placeholder="Iframe Link (YouTube embed)" />
                {sec.iframe && (
                  <div className="w-full flex justify-center my-2">
                    <iframe
                      src={sec.iframe}
                      title={sec.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-lg border-2 border-green-200 bg-black"
                      style={{ minHeight: '180px', border: 'none' }}
                    />
                  </div>
                )}
              </div>
            ))}
            <button className="bg-green-600 text-white px-4 py-2 rounded">Save Sections (not implemented)</button>
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
