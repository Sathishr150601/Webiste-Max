import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { ht } from "../../../../../assets";

export default function HT() {
  window.onload = () => {
    window.scrollTo({
      top: 80,
      behavior: "smooth",
    });
  };

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

function Service1() {
  return (
    <div className="Service1 w-[90vw] mx-auto my-[10vh]">
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
          <h2 className="">Hair Transplant</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              A Surgical Transfer of Hair Tissues from Healthy Donor Sites to
              the Affected Areas via FUT (Follicular Unit Transplantation) or
              FUE (Follicular Unit Extraction) techniques, using
              State-of-the-Art equipment under Sterile conditions. High Density
              and Natural looking Hairlines are created by our well-experienced
              surgical team using Local Anesthetics measures.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={ht} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
