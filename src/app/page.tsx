import Hero from "./Hero/page";
import BlogComponent from "./Components/blog";
import Spacer from "./Components/spacer";
import SubscribeComponent from "./Components/subscribe";
import CountdownComponent from "./Components/time";
import VideoComponent from "./Components/video";
import ProductOnePage from "./Components/productOne";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <ProductOnePage/>
      <Spacer/>
      <CountdownComponent/>
      <VideoComponent/>
      <BlogComponent/>
      <SubscribeComponent />
    </main>
  );
}
