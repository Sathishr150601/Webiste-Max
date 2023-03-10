import { Header } from "../../components";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import Hero2 from "../../components/Hero/Hero2";
import Maps from "../../components/Maps/Maps";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

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

      <Numbers />
    </div>
  );
}

function Numbers() {
  return (
    <div className="Numbers sm:hidden w-[90vw] mx-auto text-black">
      <h2 className="my-[5vh]">Let's Talk</h2>
      <div className="flex flex-row justify-evenly w-[90vw] mx-auto">
        <div className="flex flex-col">
          <div className="Locations mb-[2vh]">
            <h4>Max - Chennai</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Coimbatore</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Bangalore</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Hyderabad</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Noida</h4>
          </div>
          <div className="Locations mb-[2vh]">
            <h4>Max - Mumbai</h4>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="Locations mb-[2vh]">
            <a href="tel:8883288822">
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 88832 88822
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:8390556789">
              {" "}
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 83905 56789
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9551695516">
              {" "}
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 95516 95516
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9032510000">
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 90325 10000
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9819223456">
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 98192 23456
              </h4>
            </a>
          </div>
          <div className="Locations mb-[2vh]">
            <a href="tel:9884520000">
              {" "}
              <h4>
                <FontAwesomeIcon icon={faPhone} />
                +91 98845 20000
              </h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubMenu() {
  return (
    <div className="Menu1 hidden sm:flex flex-wrap justify-evenly sm:justify-center w-[100vw] mb-[9vh] bg-white text-[9px]">
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
