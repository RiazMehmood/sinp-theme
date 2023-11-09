import { HeroImage } from '@/lib/shopify/types.js'
import Image from 'next/image.js'
import React from 'react'
import HeroImageComp from './HeroImage'

export default function HeroSliderComp(props:{sliderData:HeroImage[]}) {
  return (
        props.sliderData.map((item:HeroImage,i:Number)=>
        {
            return <HeroImageComp imageData={item}/>
        })
  )
}
