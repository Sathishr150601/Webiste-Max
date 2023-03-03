import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { saphD } from "../../../../../assets";

export default class HT extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="HT">
        <Header />
        <Menu2 />
        <Service5 />
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

function Service5() {
  return (
    <div className="Service1 w-[90vw] mx-auto my-[20vh]">
      <div className="goBackBtn">
        <Button1
          btn1click=""
          btnLocation="/services"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Sapphire Hair Transplant</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px]  xl:text-[20px]">
              Sapphire is a material imported from Italy that boasts
              anti-microbial properties and minimal postoperative effects,
              making it the perfect choice for those looking for a safe and
              effective way to achieve their desired look. With our experienced
              team of surgeons, you can rest assured that you’re in good hands
              when you choose the Sapphire Technique from Max Hair Clinic. which
              helps to keep your scalp healthy and free from infection.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={saphD} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
