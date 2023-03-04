import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { fg } from "../../../../../assets";

export default class FG extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="FG">
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
          <h2 className="">French Grip</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px]  xl:text-[20px]">
              An exclusive hair styling technique to vanish your baldness and
              scalp patches. Make your new look more elegant and outstanding in
              no time. MAX Hair Clinic presents MAX French Grip, a human hair
              system hand-tied and hand-knotted that gives 100% perfect and
              natural-looking hair with better volume and ensures a high-quality
              finishing look. Our premium, high-quality French Grip is available
              in a variety of sizes, shades, and textures that make it stand out
              from the crowd. These perfect-looking, easy-to-use laces make the
              hairline look undetectably natural.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={fg} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
