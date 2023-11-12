"use client"
import  productImage  from "../../../public/product4.webp";
import Image from "next/image";
import Title from "./title";
import Button from "./button";

const ProductOnePage = () => {
    const handleClick = ()=>{
        console.log("test")
    }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
      <div>
        {/* picture */}
        <Image src={productImage} alt="product Image" width={512} height={647} />
      </div>
      <div className="row-start-1">
        {/* title */}
        <Title
          title="Minimal Headphone"
          title2="For Music Love"
          topTitle="FEATURED PRODUCT"
          description="When an unknown printer took a galley of type and scrambled it to make a type specimen book. sint occaeca Excepteur sint occaecat cupidatat non proident."
        />
        <Button onClick={handleClick}>text</Button>
      </div>
    </div>
  );
};

export default ProductOnePage;
