import { Header, Hero } from "../../components";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Hero2 from "../../components/Hero/Hero2";
import Maps from "../../components/Maps/Maps";
import { useRef } from "react";
import { Link } from "react-scroll";

export default function Contact() {
  document.onclose = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.onload = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="Contact">
      <Header />

      <Section />

      <Form />

      <Maps />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/"
      />
    </div>
  );
}

function Section() {
  return (
    <div className="">
      <Hero2 caption="Max" title1="Contact" title2="Us" className="h-[]" />

      <SubMenu />
    </div>
  );
}

function SubMenu() {
  return (
    <div className="Menu1 flex flex-wrap justify-center w-[100vw] mb-[9vh] bg-white text-[9px]">
      <div className="flex mb-[5vh]">
        <div className="ml-auto mr-[.5vw] ">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="map"
            spy={true}
            smooth={true}
            duration={500}
          >
            Max-chennai
          </Link>
        </div>
        <div className="mx-[.5vw]">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="map"
            spy={true}
            smooth={true}
            duration={500}
          >
            Max-Bangalore
          </Link>
        </div>
      </div>
      <div className="flex mb-[5vh]">
        <div className="mx-[.5vw]">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="map"
            spy={true}
            smooth={true}
            duration={500}
          >
            Max-Coimbatore
          </Link>
        </div>
        <div className="mx-[.5vw]">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="map"
            spy={true}
            smooth={true}
            duration={500}
          >
            Max-Hyderabad
          </Link>
        </div>
      </div>
      <div className="flex mb-[5vh]">
        <div className="mx-[.5vw]">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="map"
            spy={true}
            smooth={true}
            duration={500}
          >
            Max-Noida
          </Link>
        </div>
        <div className="ml-[.5vw] mr-auto">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="map"
            spy={true}
            smooth={true}
            duration={500}
          >
            Max-Mumbai
          </Link>
        </div>
      </div>
    </div>
  );
}
