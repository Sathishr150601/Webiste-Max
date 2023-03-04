import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { ele } from "../../../../../assets";

export default class ELE extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="ELE">
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
          btnLocation="/services/clinical-treatments"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Eyelash Extension</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Eyelash extensions have bloomed widely among women to enhance
              their beauty. This cosmetic procedure is a set of semi-permanent
              extensions that are glued manually by MAX Hair Clinic’s highly
              skilled professionals. These ultra-fine fibers give your lashes a
              bold, long, and full appearance with a natural-looking thickness.
              MAX Hair Clinic eyelash extensions are lighter, last longer, and
              are available in custom-tailored style choices. It adapts to your
              eye shape and facial features for a completely natural look.
              Eyelash extensions last for six to eight weeks until they
              naturally fall off like your lashes usually do. No wait, ladies,
              pamper yourself to retain and relish your beauty. Self-indulgence
              is a necessary evil.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={ele} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
