import Hero from "./Hero/page";
import BlogComponent from "./Components/blog";
import Spacer from "./Components/spacer";
import SubscribeComponent from "./Components/subscribe";
import CountdownComponent from "./Components/time";
import VideoComponent from "./Components/video";
import { getDealSliderProducts, getHomeHeroSlider, getPinkProduct } from "@/lib/shopify/index";

export default async function Home() {

  const pinkProduct:any = await getPinkProduct();
  const slider:any = await getHomeHeroSlider();
  const dealSlider:any = await getDealSliderProducts();

  console.log(dealSlider,null,4)
  return (
    <main className="">
      <Hero slider={slider}/>
      <Spacer/>
      <CountdownComponent/>
      <VideoComponent/>
      <BlogComponent/>
      <SubscribeComponent />
    </main>
  );
}
