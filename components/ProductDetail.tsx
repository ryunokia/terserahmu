'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ProductDetailProps {
  slug: string;
}

// Dummy data yang diperluas
const productData = {
  name: "Kemeja Batik Premium",
  price: "Rp 250.000",
  originalPrice: "Rp 350.000",
  reviews: 104,
  rating: 4.8,
  description: "Batik premium dengan bahan katun halus, nyaman dipakai seharian. Cocok untuk acara formal maupun kasual. Dibuat oleh pengrajin lokal dengan motif eksklusif.",
  colors: [
    { name: "Hitam", hex: "#1a1a1a" },
    { name: "Biru", hex: "#1e3a8a" },
    { name: "Putih", hex: "#f8fafc" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  images: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10"
  ]
};

export const ProductDetail: React.FC<ProductDetailProps> = ({ slug }) => {
  const [selectedColor, setSelectedColor] = useState(productData.colors[0].name);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Mengubah nama produk berdasarkan slug untuk simulasi
  const displayName = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-8 space-x-2">
        <Link href="/" className="hover:text-gray-900 transition-colors">HOME</Link>
        <span>/</span>
        <Link href="/terlaris" className="hover:text-gray-900 transition-colors">PRODUK</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium uppercase">{displayName}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Kiri: Gambar Produk (Grid) */}
        <div className="grid grid-cols-2 gap-4">
          {productData.images.map((img, index) => (
            <div key={index} className={`bg-gray-100 aspect-[4/5] overflow-hidden ${index === 0 ? 'col-span-2 aspect-square' : ''}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={img} 
                alt={`${displayName} - Gambar ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out cursor-crosshair"
              />
            </div>
          ))}
        </div>

        {/* Kanan: Detail Produk */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tight">
              {displayName}
            </h1>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xl text-gray-900">{productData.price}</span>
            {/* Rating Stars */}
            <div className="flex items-center space-x-1 ml-auto">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-gray-900">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
              <span className="text-sm text-gray-500 ml-2">({productData.reviews})</span>
            </div>
          </div>

          {/* Warna */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Warna: {selectedColor}</h3>
            <div className="flex space-x-3">
              {productData.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`relative w-14 h-14 rounded-full border-2 focus:outline-none flex items-center justify-center ${
                    selectedColor === color.name ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  <span 
                    className="w-11 h-11 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Ukuran */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-medium text-gray-900">Pilih Ukuran</h3>
              <button className="text-sm text-gray-500 underline hover:text-gray-900">Panduan Ukuran</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {productData.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 px-4 text-sm font-semibold tracking-wider border transition-all duration-200 ${
                    selectedSize === size
                      ? 'border-gray-900 bg-gray-900 text-white'
                      : 'border-gray-300 text-gray-900 hover:border-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-gray-600 mb-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tersedia pengiriman cepat! Pesan dalam <strong className="ml-1 text-gray-900">2 Jam 15 Menit</strong>
          </p>

          {/* Tombol Add to Cart */}
          <button 
            disabled={!selectedSize}
            className={`w-full py-4 px-8 flex items-center justify-center text-sm font-bold tracking-widest transition-colors duration-300 ${
              selectedSize 
                ? 'bg-[#6ff396] hover:bg-[#5ceb85] text-gray-900 cursor-pointer shadow-[0_4px_14px_0_rgba(111,243,150,0.39)]' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedSize ? 'TAMBAH KE KERANJANG' : 'PILIH UKURAN'}
            {selectedSize && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            )}
          </button>

          {/* Deskripsi */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Deskripsi Produk</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {productData.description}
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-600 space-y-2">
              <li>100% Katun Premium</li>
              <li>Jahitan rapi dan kuat</li>
              <li>Tidak luntur saat dicuci</li>
              <li>Desain eksklusif</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
