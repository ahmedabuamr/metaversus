import {
  About,
  Explor,
  FeedBack,
  Footer,
  GetStarted,
  Hero,
  Insights,
  Navbar,
  WhatsNew,
  World,
} from "./components";

export default function Home() {
  return (
    <div className=" bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className=" relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explor />
      </div>
      <div className=" relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>

      <World />
      <div className=" relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <FeedBack/>
      </div>
      <Footer/>
    </div>
  );
}
