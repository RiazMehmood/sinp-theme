import BlogComponent from "./Components/blog";
import SubscribeComponent from "./Components/subscribe";
import CountdownComponent from "./Components/time";
import VideoComponent from "./Components/video";
import FeaturedProduct from "./Components/Featured1";
import FeaturedProduct2 from "./Components/featured2";
import Hero from "./Components/hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProduct />
      <FeaturedProduct2 />
      <CountdownComponent />
      <VideoComponent />
      <BlogComponent />
      <SubscribeComponent />
    </main>
  );
}
