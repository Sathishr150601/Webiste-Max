import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { saphD } from "../../../../../assets";

export default class HT extends Component {
  componentDidMount() {
    if (window.innerWidth >= 1023) {
      if (window.innerWidth <= 1280) {
        window.scrollTo({
          top: window.innerHeight / 1.4,
          behavior: "smooth",
        });
      } else if (window.innerWidth <= 1561) {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      }
    } else {
      if (window.innerWidth <= 767) {
        if (window.innerWidth <= 450) {
          window.scrollTo({
            top: window.innerHeight / 1.33,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: window.innerHeight / 1.45,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.25,
          behavior: "smooth",
        });
      }
    }
  }

  render() {
    return (
      <div className="HT">
        <Header />
        <Menu2 />
        <Service5 />
        <Footer
          fspeed={80}
          footercap="About Our Clinic"
          footercontent="Welcome to the Haven of Hair Regrowth"
          footerpath="/contact"
        />
      </div>
    );
  }
}

function Service5() {
  return (
    <section className="Service2 my-[8vw]">
      <div className="lg:w-[90vw] lg:mx-auto lg:flex lg:flex-row-reverse lg:justify-between">
        <div className="goBackBtn">
          <Button1
            btn1click=""
            btnLocation="/services"
            btnName="Go Back"
            spanClass1=""
            spanClass2=""
            spanClass3=""
          />
        </div>
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[45vw] lg:mx-0 mt-[3vh]">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh] md:text-[8vw] lg:text-[6vw]">
              Sapphire Hair Transplant
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              Sapphire is a material imported from Italy that boasts
              anti-microbial properties and minimal postoperative effects,
              making it the perfect choice for those looking for a safe and
              effective way to achieve their desired look. With our experienced
              team of surgeons, you can rest assured that you’re in good hands
              when you choose the Sapphire Technique from Max Hair Clinic. which
              helps to keep your scalp healthy and free from infection.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={saphD}
            alt="Sapphire Hair Transplant"
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
