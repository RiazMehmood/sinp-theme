import { HeroImage } from '@/lib/shopify/types.js'
import Image from 'next/image.js'
import React from 'react'
import HeroImageComp from './HeroImage'

export default function HomeTwoProductsComp(props:{productData:HeroImage[]}) {
  return (
        props.productData.map((item:HeroImage,i:Number)=>
        {
            return <HeroImageComp imageData={item}/>
        })
  )
}
