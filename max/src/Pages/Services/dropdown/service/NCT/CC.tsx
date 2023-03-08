import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { cc } from "../../../../../assets";

export default class CC extends Component {
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
      <div className="CC">
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
            btnLocation="/services/non-clinical-treatments"
            btnName="Go Back"
            spanClass1=""
            spanClass2=""
            spanClass3=""
          />
        </div>
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[45vw] lg:mx-0 mt-[3vh]">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh] md:text-[8vw] lg:text-[6vw]">
              Celebrity's Choice
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              Mirage human hair systems are designed using only the finest
              quality human hair, resulting in a natural appearance that is 100%
              authentic to the touch. Our celebrity’s choice of hair system
              results in the most realistic hairlines and offers a worry-free
              solution to alleviate any signs of baldness. Natural appearances
              and top-notch durability are assured with MAX hair replacement
              systems and Celebrity’s Choice is an unbelievably natural
              low-maintenance solution available in a multitude of choices for
              hair color, texture, and thickness. Developed from the finest
              quality base materials, the mirage human hair system offers
              flexibility to adopt versatile styling choices with a natural feel
              that perfectly mimics real hair. It is soft to the touch with a
              natural shine and can be styled into any number of exquisite
              styles. It is easy to wash and requires little maintenance, making
              it the perfect choice for anyone looking for a realistic and
              high-quality hair replacement solution.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={cc}
            alt="Celebrity's Choice"
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
