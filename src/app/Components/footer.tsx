import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-8 md:text-[18px] text-[15px] bg-gray-500 text-white flex flex-col-reverse md:flex-row justify-between text-center">
      <div className="w-full md:w-5/12">
        © 2022 Sinp. Made with ❤️ by Codecarnival.
      </div>
      <div className="flex w-full md:w-5/12 justify-center space-x-2 mb-4 md:mb-0">
        {/* Replace 'logo.svg' with your payment logos */}
        <Image src="/amazon.svg" alt="Logo" width={40} height={30} />
        <Image src="/apple-pay.svg" alt="Logo" width={40} height={30} />
        <Image src="/google-pay.svg" alt="Logo" width={40} height={30} />
        <Image src="/paypal.svg" alt="Logo" width={40} height={30} />
        <Image src="/visa.svg" alt="Logo" width={40} height={30} />
        <Image src="/bitcoin.svg" alt="Logo" width={40} height={30} />
      </div>
    </div>
  );
}
