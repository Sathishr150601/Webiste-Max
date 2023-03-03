import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { sm } from "../../../../../assets";

export default class SM extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="SM">
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
    <div className="Service1 w-[90vw] mx-auto my-[20vh]">
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
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Scalp Micropigmentation</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Scalp micropigmentation is a cosmetic treatment procedure. This
              Multiple shades of pigmentation is popular among people suffering
              from alopecia, or hair loss, as well as baldness. This suits all
              skin types. At MAX Hair Clinic, scalp micropigmentation is done by
              skilled technicians. A safe cosmetic tattooing procedure helps
              cover areas of visible baldness. It is a low-maintenance,
              non-invasive procedure that produces results quickly. This
              effective process is used to provide a smudge-free solution to
              hair loss that will last for years. Multiple shades of
              pigmentation Scalp micropigmentation is the best replacement for
              people who fear hair transplant surgery and have a busy scheduled
              lifestyle.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={sm} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
