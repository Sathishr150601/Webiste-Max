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
import Hero3 from "../components/Hero/Hero3";
import SpclServices from "../components/SpclServices/SpclServices";

export default function Home() {
  return (
    <div className="Home w-[100vw] overflow-hidden">
      <Header />

      <Hero
        herotitle1="Hair"
        herotitle2="Defines"
        herotitle3="You"
        herocaption1="MAX delivers Elite Hair Restoration services and takes Pride in
            having a Solid Reputation since 2004."
        herocaption2="Pioneers to the Sapphire Hair Transplant wonder. We don’t brag, but
            our results do. Explore our website to witness the marvels that we
            have taken the world through our Hair Restoration Treatments."
      />

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
