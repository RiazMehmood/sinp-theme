import Image from "next/image";
import Link from "next/link";
import {
  SlSocialDribbble,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
} from "react-icons/sl";

export default function SubscribeComponent() {
  return (
    <div className="flex flex-col items-center p-12 gap-5 bg-pink-50 rounded-lg shadow-md mx-auto ">
      {/* Website logo */}
      <Link href={"/"}>
      <Image src="/logo.webp" alt="Logo" width={120} height={80} />
      </Link>

      {/* Text */}
      <p className="mt-4 text-center max-w-md text-gray-800 font-normal text-md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliqua. Ut
        enim ad minim. Lorem ipsum dolor sit amet.
      </p>

      {/* Subscribe box */}
      <div className="flex flex-col md:flex-row mt-4">
        <input
          className="flex-grow w-full px-6 py-3 rounded-full md:rounded-r-none border border-black text-lg bg-pink-50"
          type="email"
          placeholder="email@example.com"
        />
        <button className="mt-2 md:mt-0 w-full md:w-auto px-4 py-3 rounded-full hover:bg-[#fc6539] md:rounded-l-none bg-gray-800 text-white text-lg font-semibold">
          Subscribe
        </button>
      </div>

      {/* Social buttons */}
      <div className="flex mt-4 mb-6 space-x-6">
        <Link href={"#"}><div className="hover:text-[#fc6539] cursor-pointer"><SlSocialFacebook size={22}/></div></Link>
        <Link href={"#"}><div className="hover:text-[#fc6539] cursor-pointer"><SlSocialTwitter size={22} /></div></Link>
        <Link href={"#"}><div className="hover:text-[#fc6539] cursor-pointer"><SlSocialInstagram size={22} /></div></Link>
        <Link href={"#"}><div className="hover:text-[#fc6539] cursor-pointer"><SlSocialYoutube size={22} /></div></Link>
        <Link href={"#"}><div className="hover:text-[#fc6539] cursor-pointer"><SlSocialDribbble size={22} /></div></Link>
      </div>
    </div>
  );
}
