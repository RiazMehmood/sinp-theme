
import Image from "next/image";
import { useState } from "react";
import { LiaHeart } from "react-icons/lia";
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { SlRefresh } from "react-icons/sl";
import { DealProduct } from "@/lib/shopify/types";

export default function ProductBox({ product }: { product: DealProduct }) {
  const [progress, setProgress] = useState(
    (product.sold / (product.sold + product.currentInventory)) * 100
  );
  const sale =
    ((product.actualPrice - product.discountedPrice) / product.actualPrice) * 100;
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);



  return (
    <div
  className="flex flex-col m-4 bg-white shadow-sm hover:shadow-lg hover:border rounded"
  onMouseEnter={() => {
    setShowOverlay(true);
    setOverlayVisible(true);
  }}
  onMouseLeave={() => {
    setShowOverlay(false);
    setOverlayVisible(false);
  }}
>
      <div className="relative w-full sm:w-96 h-96">
        <Image
          src={product.image}
          alt="product"
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
        <div className="absolute top-2 font-bold left-3 text-black">New</div>
        <div className="absolute top-2 right-2 font-semibold w-18 text-black">
          Sale: {sale.toFixed(2)}%
        </div>
        {showOverlay && (
          <div className="absolute flex inset-0 bg-opacity-50 transition-transform duration-400 origin-center items-center text-center justify-center">
            <div
              className="flex bg-white shadow-sm rounded-full text-xl text-gray-600 text-center gap-7 py-4 justify-center w-11/12 sm:w-2/4"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "transform 0.5s",
              }}
            >
              <div className="tooltip">
                <button className="hover:text-orange-500">
                  <IoIosSearch />
                </button>
                <span className="tooltiptext">Quick View</span>
              </div>
              <div className="tooltip">
                <button className="hover:text-orange-500">
                  <LiaHeart />
                </button>
                <span className="tooltiptext">Add to wishlist</span>
              </div>
              <div className="tooltip">
                <button className="hover:text-orange-500">
                  <SlRefresh />
                </button>
                <span className="tooltiptext">Compare</span>
              </div>
              <div className="tooltip">
                <button className="hover:text-orange-500">
                  <BsBag />
                </button>
                <span className="tooltiptext">Add to cart</span>
              </div>
            </div>
          </div>
        )}
        {showOverlay && (
          <div
          className={`absolute text-center w-full bottom-2 bg-white text-black p-1 shadow-sm rounded-sm flex items-center justify-center space-x-2 transition-transform duration-500 ease-in-out ${overlayVisible ? 'translate-y-0' : 'translate-y-full'}`}


            style={{ transition: "opacity 0.5s" }}
          >
            {product.variations.map((variation, index) => (
              <div key={index}>
                {variation.options.map((option, optionIndex) => (
                  <div key={optionIndex} className="inline-block">
                    <img
                      src={option.image}
                      alt={option.value}
                      className="w-9 cursor-pointer rounded-full mx-1 h-9"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full p-4 mt-2">
        <div className="flex justify-between">
          <div>
            Sold:{" "}
            <span className="text-orange-500 font-medium">{product.sold}</span>
          </div>
          <div>
            Available:{" "}
            <span className="text-orange-500 font-medium">
              {product.currentInventory}
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded mt-2">
          <div
            className="h-full bg-orange-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <h2 className="text-lg px-4 text-gray-800 cursor-pointer hover:text-orange-500 font-normal">
        {product.title}
      </h2>
      <div className="flex px-4 gap-1 pb-4">
        <p className="mt-2 text-orange-500 line-through">
          ${product.actualPrice}
        </p>
        <p className="mt-2 text-orange-500 font-bold text-lg">
          ${product.discountedPrice}
        </p>
      </div>
      <style jsx>{`
        .tooltip {
          position: relative;
          display: inline-block;
        }

        .tooltip .tooltiptext {
          visibility: hidden;
          background-color: rgba(0, 0, 0, 0.85); /* black with 60% opacity */
          color: #fff;
          text-align: center;
          padding: 2px 5px; /* Adjust the vertical padding here */
          border-radius: 6px;
          font-size: 0.7em; /* Adjust the font size here */

          /* Position the tooltip text */
          position: absolute;
          z-index: 1;
          bottom: 125%; /* Place the tooltip above the button */
          left: 50%;
          transform: translateX(-50%); /* Center the tooltip */
          white-space: nowrap; /* Prevent the text from breaking into new lines */

          /* Fade in tooltip */
          opacity: 0;
          transition: opacity 0.3s;
        }

        /* Tooltip arrow */
        .tooltip .tooltiptext::after {
          content: "";
          position: absolute;
          top: 100%; /* At the bottom of the tooltip */
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: rgba(0, 0, 0, 0.85) transparent transparent transparent; /* black with 60% opacity */
        }

        /* Show the tooltip text when you mouse over the tooltip container */
        .tooltip:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
