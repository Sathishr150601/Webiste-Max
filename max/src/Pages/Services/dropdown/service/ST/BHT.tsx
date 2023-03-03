import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { bht } from "../../../../../assets";

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
          btnLocation="/services"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Beard Hair Transplant</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Max Hair Clinic provides the best beard hair transplant. Men who
              can’t grow beard hair naturally or are genetically incapable of
              growing beard hair can go through a beard hair transplant. We use
              the most effective method, FUE, to implant beard hair. Hair
              follicles are collected from the back area of the head and
              implanted in the marked jawline area. A few steps should be
              considered if you plan for a beard transplant. Be gentle to your
              implanted area in the first week; sleep on your back. Likewise,
              follow the instructions and guidelines provided by our MAX Hair
              Clinic expert team.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={bht} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
