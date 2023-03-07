import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { meso } from "../../../../../assets";

export default class Meso extends Component {
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
      <div className="Meso">
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
              Meso QR 678
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              At MAX Hair Clinic, we provide the most advanced hair retention
              treatment, Meso QR 678. It is a bio-engineered substance with six
              proven growth factors designed to stop hair loss, thicken hair,
              increase the number of hair follicles, and densify the
              pre-existing hair, covering bald patches on the scalp. It is an
              FDA-approved and patented technology that aids in retaining
              various hair loss. This product is a polypeptide-based
              formulation, making it a plant-based growth factor. As a result,
              it is both safe for the human body and nature. Meso QR 678 is more
              stable and result-oriented. QR678 therapy is locally applied over
              the scalp skin by mesotherapy, which doesn’t disrupt systemic
              circulation. In the majority of cases, the QR678 therapy has no
              side effects. The QR678 is non-invasive, non-surgical, and
              therefore safer. The QR678 therapy gives the best results in
              androgenetic alopecia and in both male and female patterns of hair
              loss. QR678 therapy is recommended for individuals experiencing
              post-chemotherapy hair loss, treating hair conditions such as
              seborrheic dermatitis, and treating immunogenic diseases such as
              alopecia areata.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={meso}
            alt="Meso QR 678"
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
