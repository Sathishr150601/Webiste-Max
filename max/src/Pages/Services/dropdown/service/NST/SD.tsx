import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { sd } from "../../../../../assets";

export default class SD extends Component {
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
      <div className="SD">
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
              Scalp Detox
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              At MAX Hair Clinic, get rid of your flaky and itchy scalp by
              detoxifying. Our detox treatment provides nourishment and
              revivification for dry and itchy scalps. This exfoliates dead and
              damaged scalp tissues. When it comes to having scalp pores, the
              scalp resembles the skin on other parts of the body. The pores
              created in the scalp can get clogged as a result of oil, sebum,
              dust, or any other reason, which results in pimples, boils, pus
              formation, or even fungal development on the scalp. This affects
              the health of the scalp and the quality of hair growth and may
              also end up in hair loss.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={sd}
            alt="Scalp Detox"
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}
