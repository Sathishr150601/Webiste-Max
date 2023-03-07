import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { prp } from "../../../../../assets";

export default class PRP extends Component {
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
            top: window.innerHeight / 1.66,
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
      <div className="PRP">
        <Header />
        <Menu2 />
        <Service1 />
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

function Service1() {
  return (
    <section className="Service2 my-[8vw]">
      <div className="lg:w-[90vw] lg:mx-auto lg:flex lg:flex-row-reverse lg:justify-between">
        <div className="goBackBtn">
          <Button1
            btn1click=""
            btnLocation="/services/non-surgical-treatments"
            btnName="Go Back"
            spanClass1=""
            spanClass2=""
            spanClass3=""
          />
        </div>
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[45vw] lg:mx-0 mt-[3vh]">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh] md:text-[8vw] lg:text-[6vw]">
              CC PRP Active+
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              A non-surgical, completely safe, and organic procedure that aids
              in hair retention and prevention of hair loss and has no side
              effects. At MAX Hair Clinic, we use a Closed-Casket Kit to collect
              plasma from the client’s blood using the modern German technology
              known as Closed Casket Platelet Rich Plasma (CC-PRP). This
              contains Growth factors, proteins, amino acids, nutrients, and
              electrolytes derived from the platelets. As a result, this Non-
              surgical treatment benefits by nurturing, rejuvenating, and
              promoting hair regrowth. Any damage to the scalp or hair follicles
              will return to their natural, healthy state. The closed-casket PRP
              machine has a single entry point and a single exit point; As a
              result, the plasma is pathogen- and toxin free and has not been
              exposed to the outside environment. The CC-PRP kit spins at 5000
              RPM, thus extracting growth factor concentrate (GFC) while
              protecting the cells through a self-cooling mechanism. MAX Hair
              Clinic ensures proper maintenance of hygiene. We use sterile and
              disposable CC-PRP kits. Catalyzing optimum healing. CC-PRP
              treatments are a 100% customizable procedure that increases hair
              density & quality and also counteracts baldness. Helps in the
              natural regenerative process of hair growth.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={prp}
            alt="CC PRP Active Plus"
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
