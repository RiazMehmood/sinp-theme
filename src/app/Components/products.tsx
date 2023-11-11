"use client";
import Image from 'next/image'
import { useState } from 'react'
import {LiaHeart} from "react-icons/lia"
import {IoIosSearch} from 'react-icons/io'
import {BsBag} from 'react-icons/bs';
import {SlRefresh} from 'react-icons/sl'

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
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="flex flex-col m-4 bg-white shadow-sm hover:shadow-lg hover:border rounded"
         onMouseEnter={() => setShowOverlay(true)}
         onMouseLeave={() => setShowOverlay(false)}>
      <div className="relative w-96 h-96">
        <Image src={product.image} alt='product' layout="fill" objectFit="cover" className="rounded" />
        <div className='absolute top-2 font-bold left-3 text-black'>New</div>
        <div className="absolute top-2 right-2 font-semibold w-18 text-black">
          Sale: {sale.toFixed(2)}%
        </div>
        {showOverlay && (
  <div className="absolute flex inset-0 bg-opacity-50 transition-transform duration-400 origin-center items-center text-center justify-center">
    <div className='flex bg-white shadow-sm rounded-full text-2xl text-gray-600 text-center gap-10 py-5 justify-center w-3/4' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', transition: 'transform 0.5s'}}>
      <button><IoIosSearch/></button>
      <button><LiaHeart/></button>
      <button><SlRefresh/></button>
      <button><BsBag/></button>
    </div>
  </div>
)}

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
