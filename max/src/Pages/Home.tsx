import {
  Header,
  Hero,
  ImageSlider,
  LocationVector,
  Video,
  Mascot,
  Counter,
  LogoSlider,
  Heading,
  Services,
  BeforeAfter,
} from "../components";
import Footer from "../components/Footer/Footer";
import SpclServices from "../components/SpclServices/SpclServices";

export default function Home() {
  return (
    <div className="Home w-[100vw] overflow-hidden">
      <Header />
      <Hero />
      <ImageSlider />
      <Video />
      <LocationVector />
      <Mascot />
      <Counter />
      <LogoSlider />
      <Heading
        headingtitleclass="text-black"
        headingtitlecontent1="Our"
        headingtitlecontent2="Services"
      />
      <Services />
      <Heading
        headingtitleclass="text-black"
        headingtitlecontent1="Still Not"
        headingtitlecontent2="Convinced?"
      />
      <BeforeAfter />
      <Heading
        headingtitleclass="text-black"
        headingtitlecontent1="Our Best"
        headingtitlecontent2="Selling Services"
      />
      <SpclServices />
      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/about"
      />
    </div>
  );
}
