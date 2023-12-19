import Image from 'next/image';
import { Playfair_Display } from "next/font/google";
import { HeroImage } from '@/lib/shopify/types';


const playfair = Playfair_Display({
    subsets: ["latin"],
  });

export default function FeaturedProductLeft(props:{product:HeroImage}) {
  return (
    <div className="flex flex-col mb-10 mt-16 bg-white justify-center items-center md:flex-row">
      <div className="w-full justify-center flex md:w-1/2">
        <Image
          src={props.product.image}
          alt={props.product.heading}
          width={500}
          height={300}
        />
      </div>
      <div className="w-full flex-col justify-start md:w-1/2 space-y-10">
        <h2 className="text-xl">{props.product.topText}</h2>
        <div className={playfair.className}>
        <h1 className="text-5xl font-semibold text-orange-500 w-2/3">{props.product.heading}</h1></div>
        <p className='text-xl text-gray-800 w-2/3'>{props.product.detail}</p>
        <button className="bg-[#06264b] text-[#fc6539] hover:bg-[#fc6539] hover:text-white rounded-full text-xl font-semibold py-4 px-10">
          {props.product.button}
        </button>
      </div>
    </div>
  )
}
