import React from 'react';
import { Product } from '../utils/interfaces';
import Link from 'next/link';

interface CompareProductsProps {
  myproducts: Product[];
}

const CompareProducts: React.FC<CompareProductsProps> = ({ myproducts }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
        <div className="text-md font-semibold w-screen text-center flex justify-center mb-10 gap-2 bg-stone-100 text-white p-9">
        <Link className='hover:text-orange-500 text-black' href={"/"}>HOME</Link>
        <p className='text-black'>/</p>
        <p className='text-black'>YOUR COMPARE PAGE</p>
        </div>
      <div className="max-w-4xl">


        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border"></th> {/* Empty header for product names */}
              {myproducts.map((product, index) => (
                <th key={index} className="border">
                  <div className="flex flex-col items-center">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-contain mb-2" />
                    <h3>{product.name}</h3>
                    <button>Add to Cart</button>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="border">Product Info</th>
              {myproducts.map((product, index) => (
                <th key={index} className="border">Price</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border">Price</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border">
                  <div className="flex flex-col items-center">
                    <p>{product.price}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border">Description</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border">
                  <div className="flex flex-col items-center">
                    <p>{product.name}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border">Availability</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border">
                  <div className="flex flex-col items-center">
                    <p>{product.available ? 'Available' : 'Not Available'}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border">Weight</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border">
                  <div className="flex flex-col items-center">
                    <p>{product.weight}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border">Colors</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border">
                  <div className="flex flex-col items-center">
                    <p>{product.colors}</p>
                  </div>
                </td>
              ))}
            </tr>
            {/* Add other rows and table cells */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareProducts;