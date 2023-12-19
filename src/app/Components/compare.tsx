import React from "react";
import { Product } from "../utils/interfaces";
import Link from "next/link";

interface CompareProductsProps {
  myproducts: Product[];
}

const CompareProducts: React.FC<CompareProductsProps> = ({ myproducts }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <div className="text-md mt-32 font-semibold w-screen text-center flex justify-center mb-10 gap-2 bg-stone-100 text-white p-10">
        <Link className="hover:text-[#fc6539] text-black" href={"/"}>
          HOME
        </Link>
        <p className="text-black">/</p>
        <p className="text-black">YOUR COMPARE PAGE</p>
      </div>
      <div className="m-20">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-10 font-normal">Product Info</th>
              {myproducts.map((product, index) => (
                <th key={index} className="border px-4 py-2 text-center">
                  <div className="flex flex-col font-normal text-center gap-3 justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-36 h-44 justify-center"
                    />
                    <p>{product.name}</p>
                    <button className="bg-black duration-200 text-white hover:bg-[#fc6539] p-2 mb-1">
                      Add to Cart
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border text-center px-20 font-normal">Price</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border px-28 font-normal py-3">
                  <div className="flex flex-col items-center">
                    <p>{product.price}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border font-normal text-center p-3">
                Description
              </td>
              {myproducts.map((product, index) => (
                <td key={index} className="border font-normal px-6 py-3">
                  <div className="flex flex-col items-center">
                    <p>{product.name}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border font-normal text-center p-3">
                Availability
              </td>
              {myproducts.map((product, index) => (
                <td key={index} className="border font-normal">
                  <div className="flex flex-col items-center">
                    <p>{product.available ? "Available" : "Not Available"}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border font-normal p-3 text-center">Weight</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border font-normal ">
                  <div className="flex flex-col items-center">
                    <p>{product.weight}</p>
                  </div>
                </td>
              ))}
            </tr>
            <tr>
              <td className="border font-normal p-3 text-center">Colors</td>
              {myproducts.map((product, index) => (
                <td key={index} className="border font-normal ">
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
