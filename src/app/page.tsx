import BlogComponent from "./Components/blog";
import SubscribeComponent from "./Components/subscribe";
import CountdownComponent from "./Components/time";
import VideoComponent from "./Components/video";
import FeaturedProduct from "./Components/Featured1";
import FeaturedProduct2 from "./Components/featured2";
import Hero from "./Components/hero";
import { getDealSliderProducts, getHomeHeroSlider, getPinkProduct } from "@/lib/shopify/index";

export default async function Home() {

  const pinkProduct:any = await getPinkProduct();
  const slider:any = await getHomeHeroSlider();
  const dealSlider:any = await getDealSliderProducts();

  console.log(dealSlider,null,4)
  return (
    <main className="">
      <Hero />
      <FeaturedProduct />
      <FeaturedProduct2 />
      {/* <CountdownComponent /> */}
      <VideoComponent />
      <BlogComponent />
      <SubscribeComponent />
    </main>
  );
}
