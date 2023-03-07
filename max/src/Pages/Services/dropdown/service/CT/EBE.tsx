import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { ebht } from "../../../../../assets";

export default class EBE extends Component {
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
      <div className="EBE">
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
            btnLocation="/services/clinical-treatments"
            btnName="Go Back"
            spanClass1=""
            spanClass2=""
            spanClass3=""
          />
        </div>
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[45vw] lg:mx-0 mt-[3vh]">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh] md:text-[8vw] lg:text-[6vw]">
              Eyebrow Microblading
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              MAX Hair Clinic provides FDA-approved medical-grade pigments and
              disposable blades for eyebrow microblading treatments. This is a
              cosmetic treatment procedure. The pigments are deposited in the
              upper region of the dermis. This method produces fine,
              high-quality strokes that mimic naturally occurring hair. Our
              skilled professional team assists you in obtaining well-defined
              shapes for brimming best results. We guarantee fuller brows and
              improved facial aesthetics. The pigment is scratched into the skin
              using a hand tool with a blade made of tiny needles. A
              semi-permanent technique for enhancing the appearance of the
              eyebrows. Some individuals may require follow-up sessions based on
              individual body acceptance. The microblading technique helps to
              reshape your appearance in terms of your eyebrows, both in shape
              and color. Microblading also carries other terms like “feather
              touch”,” 3D eyebrow embroidery,” and “hair-like strokes.” In the
              first stage, the eyebrow outline is marked. Followed by the
              technician applying numbing cream and leaving for at least 30
              minutes. Later, the procedure is started by tattooing the pigments
              in fine lines according to the angles and directions
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={ebht}
            alt="Eyebrow Microblading"
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
