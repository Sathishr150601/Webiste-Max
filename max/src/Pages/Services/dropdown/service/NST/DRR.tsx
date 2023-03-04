import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { drr } from "../../../../../assets";

export default class DRR extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="DRR">
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
          btnLocation="/services/non-surgical-treatments"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Dr Regrowth</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Dr. Regrowth is a unique treatment method that addresses the most
              common causes of hair loss and baldness. The Dr. Regrowth
              treatment revitalizes and strengthens hair follicles while
              reversing the conditions of hair loss through optimum scalp
              metabolism and circulation by injecting vital minerals, amino
              acids, and nutrients into the scalp layers and exposing the hair
              as well as the scalp to controlled low-level LASER light emission.
              The treatment invigorates the scalp’s metabolic action and
              strengthens hair follicles through natural regeneration and
              proliferation. Dr. Regrowth uses low-level laser therapy and
              direct injections of essential nutrients to improve hair health by
              increasing circulation and delivering an ideal blend of nutrients
              to the scalp. A specialized treatment approach with essential hair
              health enhancement nutrients.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={drr} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
