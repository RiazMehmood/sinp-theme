import BlogComponent from "./Components/blog";
import Spacer from "./Components/spacer";
import SubscribeComponent from "./Components/subscribe";
import CountdownComponent from "./Components/time";
import VideoComponent from "./Components/video";

export default function Home() {
  return (
    <main className="">
      <Spacer/>
      <CountdownComponent/>
      <VideoComponent/>
      <BlogComponent/>
      <SubscribeComponent />
    </main>
  );
}
