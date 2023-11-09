import { HeroImage } from '@/lib/shopify/types.js'
import Image from 'next/image.js'
import React from 'react'

export default function HeroImageComp(props:{imageData:HeroImage}) {
  return (
    <ul className='border-orange-100 border-2'>
      <li>{props.imageData.topText}</li>
      <li>{props.imageData.heading}</li>
      <li>{props.imageData.detail}</li>
      <li><Image className='w-[99%]' src={props.imageData.image} width={1000} height={1000} alt={props.imageData.heading} /></li>
      <li>{props.imageData.button}</li>
    </ul>
  )
}
