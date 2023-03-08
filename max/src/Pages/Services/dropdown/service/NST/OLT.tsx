import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { olt } from "../../../../../assets";

export default class OLT extends Component {
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
      <div className="OLT">
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
              Oxygen LASER Therapy
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              MAX Oxygen LASER Therapy is a clinically proven, FDA-approved
              advanced method of stimulating hair growth and effectively
              reducing baldness. Oxygen laser therapy is a non-surgical
              treatment for hair loss that employs a medical laser device with
              therapeutic and low-light laser levels. The photo-bio stimulation
              of MAX Oxygen LASER Hair Treatment irradiates photons into scalp
              tissues, which upon penetration accelerates pure oxygen intake.
              The Oxygen LASER light beam will stimulate the hair follicles and
              their tissue cells. This promotes blood flow, increases the hair
              growth rate, reduces the thinning of hair, and treats androgenetic
              alopecia. As this activates the intracellular fluid, nutrients get
              supplied equally. This helps the follicles to restore and
              reconstruct healthy hair. Because this noninvasive wavelength
              contains 100% oxygen, this method of preventing hair loss is
              completely safe for human health. At MAX Hair Clinic, we use 650nm
              to 830nm. In addition, this reduces dandruff, improves the
              immunity of the skin, and also activates collagen production. The
              cold beam emitted from the diode freezes hair and prevents it from
              falling. The main factor and an added advantage of using Oxygen
              LASER therapy are that it breaks down DHT, which plays a
              significant role in hair fall. It also aids in the production of
              oil and sebum secretion, which helps to keep the scalp’s pH
              stable.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={olt}
            alt="Oxygen Laser Theraphy"
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
