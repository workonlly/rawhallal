'use client';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../../store/productSlice';
import { SelectedProduct } from '../../store/types';
import { useRouter } from 'next/navigation';

export default function OpenPage() {
  const product = useSelector(selectSelectedProduct) as SelectedProduct | null;
  const router = useRouter();

  if (!product) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-red-600">No product selected.</h2>
        <button
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
          onClick={() => router.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full  bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-8 items-center relative">
        <button
          className="absolute top-4 left-4 text-gray-400 hover:text-green-600 text-2xl font-bold focus:outline-none"
          onClick={() => router.back()}
          aria-label="Go Back"
        >
          ←
        </button>
        {product?.image && product.image.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-6  mb-1 w-full justify-items-center">
            {product.image.map((img: string, idx: number) => (
              <img
                key={img}
                src={img}
                alt={product.maintext + ' ' + (idx + 1)}
                className="w-32 h-32 object-contain rounded-xl  bg-white shadow"
              />
            ))}
          </div>
        ) : (
          <div className="w-60 h-60 flex items-center justify-center text-gray-400 border rounded-2xl bg-gray-50 shadow-md mb-4">
            No image
          </div>
        )}
        <div className="flex flex-col gap-4 w-full items-center md:items-start">
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wider self-center md:self-start">
            {product.table}
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 text-center md:text-left">
            {product.maintext}
          </h1>
          <p className="text-gray-600 text-center md:text-left text-base">
            {product.sectext}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-600 bg-green-50 px-4 py-2 rounded-xl shadow">
              ₹{product.price}
            </span>
          </div>
          <button
            className="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition font-semibold self-center md:self-start"
            onClick={() => window.open('http://api.whatsapp.com/send?phone=919911296615&text=Hi%20I%20Want%20To%20Order', '_blank')}
          >
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
