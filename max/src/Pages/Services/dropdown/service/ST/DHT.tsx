import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { dht } from "../../../../../assets";

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
        <Service4 />
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

function Service4() {
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
          <h2 className="">DHI Hair Transplant</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              DHI is an advanced technique for implanting hair in a balding
              area. The grafts are collected using an FUE (follicular unit
              extraction) method and directly implanted on the recipient site.
              By identifying the graft thickness an implanter is selected. With
              this, the process can be completed without opening the canal for
              transplant. The collected grafts will be placed within a thin
              cylindrical and sharp tip that helps to implant the follicles
              directly. MAX HAIR CLINIC DHI HAIR TRANSPLANT IS A TRADITIONAL
              TECHNIQUE PROCEDURE WITH OUTSTANDING OUTCOMES.specialized
              pen-shaped Choi implanters are utilized to implant the same in
              affected areas. 65-75 hair follicles replanted an sq. cm giving up
              to 70-75% survival rate. The hair follicle is punched into the
              scalp using a Choi implanter and a clearance space of 1mmi is
              given between 2 punches, thus creating a less dense packing of
              hair follicles.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={dht} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
