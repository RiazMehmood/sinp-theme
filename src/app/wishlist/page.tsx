"use client"
import { useState } from 'react';
import { products as Products } from '../utils/data';
import { Product } from '../utils/interfaces';
import Link from 'next/link';

interface WishlistProduct extends Product {
  quantity: number;
}

const Wishlist = () => {
  const [products, setProducts] = useState<WishlistProduct[]>(Products.map(product => ({ ...product, quantity: 1 })));

  const handleQuantityChange = (id: number, value: number) => {
    setProducts(products.map(product => product.id === id ? { ...product, quantity: product.quantity + value } : product));
  };

  const handleRemove = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div className="flex flex-col items-center mb-36 justify-center">
      
        <div className="text-md mt-36 font-semibold w-screen text-center flex justify-center mb-24 gap-2 bg-stone-100 text-white p-10">
          <Link className="hover:text-[#fc6539] text-black" href={"/"}>
            HOME
          </Link>
          <p className="text-black">/</p>
          <p className="text-black">YOUR WISHLIST PAGE</p>
        </div>
        <table className="table-auto items-center mx-auto md:w-auto justify-center border-collapse border">
          <thead>
            <tr className='bg-gray-100'>
              <th className="border border-gray-300 text-center p-2 font-semibold">Image</th>
              <th className="border border-gray-300 text-center p-2 font-semibold">Product</th>
              <th className="border border-gray-300 text-center p-2 font-semibold">Price</th>
              <th className="border border-gray-300 text-center font-semibold">Quantity</th>
              <th className="border border-gray-300 text-center p-2 font-semibold">Total</th>
              <th className="border border-gray-300 text-center p-2 font-semibold">Actions</th>
              <th className="border border-gray-300 text-center p-2 font-semibold">Checkout</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="border border-gray-300 flex justify-center text-center p-2 font-normal"><img src={product.image} alt={product.name} width={100} height={60} /></td>
                <td className="border border-gray-300 text-center px-16 py-4 font-normal">{product.name}</td>
                <td className="border border-gray-300 text-center px-6 font-normal">{product.price}</td>
                <td className="border border-gray-300 text-center p-2 font-normal">
                  <div className="border border-gray-300 px-4 py-2 inline-flex items-center">
                    <button className='mr-5' onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                    <span className="mx-2">{product.quantity}</span>
                    <button className='ml-5' onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                  </div>
                </td>
                <td className="border border-gray-300 text-center px-6 font-normal">{product.price * product.quantity}</td>
                <td className="border border-gray-300 text-center px-6 font-normal">
                <button>✏️</button>
                  <button onClick={() => handleRemove(product.id)}>🗑️</button>
                  
                </td>
                <td className="border border-gray-300 text-center px-6 font-normal"><button className='bg-black duration-200 text-white hover:bg-[#fc6539] py-2 px-4 mb-1'>Add to Cart</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default Wishlist;
