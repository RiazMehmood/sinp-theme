
import { getHomeTwoProducts } from '@/lib/shopify/index'
import { HeroImage } from '@/lib/shopify/types'
import FeaturedProductRight from './FeaturedProductRight'
import FeaturedProductLeft from './FeaturedProductLeft'


const FeaturedProducts = async () => {

  const products:HeroImage[] = await getHomeTwoProducts()
  let count=0;
  return (
    <div>
        { 
          products.map((product:HeroImage,index:number)=>{
            count=count+1
            return count%2!=0?<FeaturedProductLeft product={product} />:<FeaturedProductRight product={product}/>
          })
        }
    </div>
  )
}

export default FeaturedProducts