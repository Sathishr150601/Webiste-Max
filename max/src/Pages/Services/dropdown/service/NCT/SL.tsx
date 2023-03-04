import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { sl } from "../../../../../assets";

export default class TP extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="TP">
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
    <div className="Service1 w-[90vw] mx-auto my-[10vh]">
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
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Satin Lace</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Max Hair Clinic offers silk lace systems, which assure ultimate
              versatility and convenient installation. These cosmetic hair
              systems offer a healthy and undetectable solution to alleviate any
              signs of baldness and hair loss. These hair cosmetic systems offer
              100% natural looks and are preferred by the world’s most prominent
              business personalities due to their superior quality and
              craftsmanship. This cosmetic attachment complements the color and
              texture of the hair. It makes a very good skin-friendly option and
              is breathable. Satin lace carries its own versatile look. The
              ideal combination of convenience and comfort. Our customized
              options will help you achieve a long-lasting style in no time.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={sl} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
