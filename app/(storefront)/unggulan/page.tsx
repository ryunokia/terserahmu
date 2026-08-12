import React from 'react';
import Link from 'next/link';

// Dummy data untuk produk
const products = [
  {
    id: 1,
    name: "Kemeja Batik Pria Modern",
    price: "Rp 150.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    category: "Pria",
    slug: "kemeja-batik-pria-modern",
  },
  {
    id: 2,
    name: "Blouse Batik Wanita Elegan",
    price: "Rp 175.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    category: "Wanita",
    slug: "blouse-batik-wanita-elegan",
  },
  {
    id: 3,
    name: "Dress Batik Kombinasi",
    price: "Rp 250.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    category: "Wanita",
    slug: "dress-batik-kombinasi",
  },
  {
    id: 4,
    name: "Kain Batik Tulis Asli",
    price: "Rp 450.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    category: "Kain",
    slug: "kain-batik-tulis-asli",
  },
  {
    id: 5,
    name: "Kemeja Batik Slim Fit",
    price: "Rp 165.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    category: "Pria",
    slug: "kemeja-batik-slim-fit",
  },
  {
    id: 6,
    name: "Tunik Batik Casual",
    price: "Rp 185.000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGbzvoHaUXnVH97xzVlVJu0LgRZo7xueL0TLTLinAOw&s=10",
    category: "Wanita",
    slug: "tunik-batik-casual",
  },
];

export default function TerlarisPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Produk Terlaris
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Koleksi batik paling banyak dicari dan disukai oleh pelanggan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="group cursor-pointer">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wider text-gray-900 rounded-full shadow-sm uppercase">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                    <span className="text-xl font-extrabold text-gray-900">
                      {product.price}
                    </span>
                    <div className="bg-gray-900 group-hover:bg-blue-600 text-white rounded-full p-2.5 transition-colors duration-300 shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
