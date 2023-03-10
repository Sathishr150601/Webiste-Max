import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Element, Link } from "react-scroll";
import {
  BA1,
  BA10,
  BA11,
  BA12,
  BA13,
  BA14,
  BA15,
  BA16,
  BA17,
  BA18,
  BA19,
  BA2,
  BA20,
  BA21,
  BA22,
  BA23,
  BA24,
  BA25,
  BA26,
  BA27,
  BA28,
  BA29,
  BA3,
  BA30,
  BA31,
  BA32,
  BA33,
  BA34,
  BA35,
  BA36,
  BA37,
  BA38,
  BA39,
  BA4,
  BA40,
  BA41,
  BA42,
  BA43,
  BA44,
  BA45,
  BA46,
  BA47,
  BA48,
  BA5,
  BA6,
  BA7,
  BA8,
  BA9,
  yt1,
  yt2,
  yt3,
  yt4,
  yt5,
  yt6,
} from "../../assets";
import Button3 from "../Button/Button3";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero2 from "../Hero/Hero2";

export default function Transformations() {
  const [isShown1, setisShown1] = useState(true);
  const [isShown2, setisShown2] = useState(false);
  const [isShown3, setisShown3] = useState(false);
  const [isShown4, setisShown4] = useState(false);

  const handleClick1 = () => {
    setisShown1(true);
    setisShown2(false);
    setisShown3(false);
    setisShown4(false);
  };

  const handleClick2 = () => {
    setisShown1(false);
    setisShown2(true);
    setisShown3(false);
    setisShown4(false);
  };

  const handleClick3 = () => {
    setisShown1(false);
    setisShown2(false);
    setisShown3(true);
    setisShown4(false);
  };

  const handleClick4 = () => {
    setisShown1(false);
    setisShown2(false);
    setisShown3(false);
    setisShown4(true);
  };

  return (
    <div className="Transformations overflow-hidden">
      <Header />
      <Hero2
        hero2class="w-[50vw] mx-auto pt-[50%] sm:pt-[20%] lg:pt-[20vh] xl:pt-[15vh] 2xl:pt-[10vh] pb-[8vh] pl-[3vw]"
        caption="Max"
        title1="Image"
        title2="Gallery"
      />
      <div className="Menu1 mt-[12px] flex flex-wrap flex-col sm:flex-row justify-center items-center w-[100vw] mx-auto bg-white text-[.7rem]">
        <div className="mx-auto mb-[5vh] sm:w-[45%] sm:ml-auto sm:mr-[1vw] sm:mb-[5vh] sm:flex sm:justify-center lg:w-[23vw]">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick1}
          >
            Sapphire Hair Transplant
          </Link>
        </div>
        <div className="mx-auto mb-[5vh] sm:w-[45%] sm:ml-[1vw] sm:mr-auto sm:mb-[5vh] sm:flex sm:justify-center lg:w-[23vw]">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick2}
          >
            Activated Sapphire Mirror+FUE
          </Link>
        </div>
        <div className="mx-auto mb-[5vh] sm:w-[45%] sm:ml-auto sm:mr-[1vw] sm:mb-[5vh] sm:flex sm:justify-center lg:w-[23vw]">
          <Link
            activeClass="active"
            className="test1 space-btn"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick3}
          >
            Cosmetic Hair System
          </Link>
        </div>
        <div className="mx-auto mb-[5vh] sm:w-[45%] sm:ml-[1vw] sm:mr-auto sm:mb-[5vh] sm:flex sm:justify-center lg:w-[23vw]">
          <Link
            activeClass="active"
            className="test1 space-btn "
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            onClick={handleClick4}
          >
            Testimonials
          </Link>
        </div>
      </div>
      {isShown1 && <ImageSection1 />}
      {isShown2 && <ImageSection2 />}
      {isShown3 && <ImageSection3 />}
      {isShown4 && <ImageSection4 />}

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/contact"
      />
    </div>
  );
}

function ImageSection1() {
  const images = [
    BA1,
    BA2,
    BA3,
    BA4,
    BA5,
    BA6,
    BA7,
    BA8,
    BA10,
    BA11,
    BA12,
    BA13,
    BA14,
    BA15,
    BA16,
    BA18,
    BA19,
    BA20,
    BA21,
    BA25,
  ];
  const columnsCountBreakPoints = { 350: 2, 450: 2, 750: 3, 990: 4 };

  return (
    <div className="w-[90vw] mx-auto">
      <Element name="test1">
        <div className="pt-[8vh] md:pt-[10vh] lg:pt-[20vh]">
          <div className="text-center text-black">
            <h2 className="mb-[5vh]">Sapphire Hair Transplant</h2>
          </div>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="2rem">
              {images.map((image) => (
                <img src={image} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Element>
    </div>
  );
}

function ImageSection2() {
  const images = [
    BA26,
    BA30,
    BA31,
    BA31,
    BA33,
    BA35,
    BA36,
    BA37,
    BA38,
    BA39,
    BA42,
    BA43,
    BA44,
    BA45,
    BA47,
  ];
  const columnsCountBreakPoints = { 350: 2, 450: 3, 750: 4, 990: 3 };

  return (
    <div className="w-[80vw] mx-auto">
      <Element name="test1">
        <div className="pt-[8vh] md:pt-[10vh] lg:pt-[20vh]">
          <div className="text-center text-black">
            <h2 className="mb-[5vh]">Activated Sapphire Mirror+FUE</h2>
          </div>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="1rem">
              {images.map((image) => (
                <img src={image} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Element>
    </div>
  );
}

function ImageSection3() {
  const images = [BA9, BA17, BA27, BA28, BA29, BA34, BA41];
  const columnsCountBreakPoints = { 350: 2, 450: 3, 750: 4, 990: 3 };

  return (
    <div className="w-[90vw] mx-auto">
      <Element name="test1">
        <div className="pt-[8vh] md:pt-[10vh] lg:pt-[20vh]">
          <div className="text-center text-black">
            <h2 className="mb-[5vh]">Cosmetic Hair System</h2>
          </div>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="1rem">
              {images.map((image) => (
                <img src={image} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Element>
    </div>
  );
}

function ImageSection4() {
  const images = [yt1, yt2, yt3, yt4, yt5, yt6];
  const columnsCountBreakPoints = { 350: 1, 450: 2, 750: 3 };

  return (
    <div className="w-[90vw] mx-auto">
      <Element name="test1">
        <div className="pt-[8vh] md:pt-[10vh] lg:pt-[20vh]">
          <div className="text-center text-black">
            <h2 className="mb-[5vh]">Video Testimonials</h2>
          </div>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter="1rem">
              {images.map((image) => (
                <video
                  className="rounded-3xl w-[80vw] sm:w-[50vw] mx-auto h-[50vh]"
                  height="500"
                  controls
                  loop
                >
                  <source src={image} type="video/mp4" />
                </video>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Element>
    </div>
  );
}
