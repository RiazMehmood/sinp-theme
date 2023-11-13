import Image from 'next/image';
import { Playfair_Display } from "next/font/google";;

const playfair = Playfair_Display({
    subsets: ["latin"],
  });

export default function FeaturedProduct2() {
  return (
    <div className="flex flex-col mb-10 mt-16 justify-center bg-white items-center md:flex-row">
      
      <div className="flex-col items-center justify-center md:w-1/2 space-y-10">
        <h2 className="text-xl">FEATURED PRODUCT</h2>
        <div className={playfair.className}>
        <h1 className="text-5xl font-semibold text-orange-500 w-2/3">Minimal Headphone For Music Lover</h1></div>
        <p className='text-xl text-gray-800 w-2/3'>When an unknown printer took a galley of type and scrambled it to make a type specimen book. sint occaeca Excepteur sint occaecat cupidatat non proident.</p>
        <button className="bg-[#06264b] text-[#fc6539] hover:bg-[#fc6539] hover:text-white rounded-full text-xl font-semibold py-4 px-10">
          Buy Now
        </button>
      </div>
      <div className="w-full flex md:w-1/3">
        <Image
          src="/product2-fe.webp"
          alt="Featured Product"
          width={500}
          height={300}
        />
      </div>
    </div>
  )
}
