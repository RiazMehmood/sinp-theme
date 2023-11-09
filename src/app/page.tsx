import Image from 'next/image'
import { getHomeHeroImage, getHomeHeroSlider, getHomeTwoProducts } from '@/lib/shopify/index'
import HeroImageComp from './componants/HeroImage';
import { HeroImage } from '@/lib/shopify/types.js';
import HeroSliderComp from './componants/HeroSliderComp';
import HomeTwoProductsComp from './componants/HomeTwoProductsComp';



export default async function Home() {
  const data:any = await getHomeHeroImage();
  const slider:any = await getHomeHeroSlider();
  const twoProducts:any = await getHomeTwoProducts();

  return (
      <div>
        {/* <HeroImageComp imageData={data}/> */}
        {/* <HeroSliderComp sliderData={slider} /> */}
        <HomeTwoProductsComp productData={twoProducts} />
      </div>
  )
}
