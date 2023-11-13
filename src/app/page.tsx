import BlogComponent from "./Components/blog";
import SubscribeComponent from "./Components/subscribe";
import CountdownComponent from "./Components/CountdownComponent";
import VideoComponent from "./Components/video";
import { getDealSliderProducts, getHomeHeroSlider } from "@/lib/shopify/index";
import HeroSlider from "./Components/HeroSlider";
import FeaturedProducts from "./Components/FeaturedProducts";


export default async function Home() {

  //const pinkProduct:any = await getPinkProduct();
  const slider:any = await getHomeHeroSlider();
  const dealSlider:any = await getDealSliderProducts();


  return (
    <main className="">
<<<<<<< HEAD
      <Hero />
      <FeaturedProduct />
      <FeaturedProduct2 />
      <CountdownComponent />
=======
      <HeroSlider slider={slider} />
      <FeaturedProducts/>
      <CountdownComponent deals={dealSlider} />
>>>>>>> work
      <VideoComponent />
      <BlogComponent />
      <SubscribeComponent />
    </main>
  );
}
