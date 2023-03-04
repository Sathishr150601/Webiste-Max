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
      <Hero2
        hero2class="w-[50vw] mx-auto pt-[50%] sm:pt-[20%] lg:pt-[20vh] xl:pt-[15vh] 2xl:pt-[20vh] pb-[8vh] pl-[3vw] 2xl:pl-[8vw]"
        hero2Caption="Max"
        hero2Title1="Contact"
        hero2Title2="Us"
      />

      <SubMenu />
    </div>
  );
}

function SubMenu() {
  return (
    <div className="Menu1 top-0 flex justify-around w-[100vw] my-[9vh] bg-white text-[9px]">
      <div className="ml-auto mr-[.5vw]">
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
  );
}
