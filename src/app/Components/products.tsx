import Image from 'next/image'
import { useState } from 'react'

interface Product {
  image: string;
  sold: number;
  available: number;
  name: string;
  price: number;
  discountedPrice: number;
}

export default function ProductBox({ product }: { product: Product }) {
  const [progress, setProgress] = useState((product.sold / (product.sold + product.available)) * 100)
  const sale = ((product.price - product.discountedPrice) / product.price) * 100;

  return (
    <div className="flex flex-col m-4 bg-white shadow-sm hover:shadow-lg hover:border rounded">
      <div className="relative w-96 h-96">
        <Image src={product.image} alt='product' layout="fill" objectFit="cover" className="rounded" />
        <div className='absolute top-2 font-bold left-3 text-black'>New</div>
        <div className="absolute top-2 right-2 font-semibold w-18 text-black">
          Sale: {sale.toFixed(2)}%
        </div>
      </div>
      <div className="w-full p-4 mt-4">
        <div className="flex justify-between">
          <div>Sold: <span className='text-orange-500 font-medium'>{product.sold}</span></div>
          <div>Available: <span className='text-orange-500 font-medium'>{product.available}</span></div>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded mt-2">
          <div className="h-full bg-orange-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <h2 className="mt-4 text-lg px-4 text-gray-800 cursor-pointer hover:text-orange-500 font-normal">{product.name}</h2>
      <div className='flex px-4 gap-1 pb-4'>
      <p className="mt-2 text-orange-500 line-through">${product.price.toFixed(2)}</p>
      <p className="mt-2 text-orange-500 font-bold text-lg">${product.discountedPrice.toFixed(2)}</p>
    </div>
    </div>
  )
}
