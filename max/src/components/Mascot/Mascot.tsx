import { Component } from "react";
import { Button1 } from "../index";
import { MascotImg } from "../../assets";

export default class Mascot extends Component {
  render() {
    return (
      <div className="Mascot w-[90vw] mx-auto my-[8vh] sm:mt-[8vw] flex justify-center text-black">
        <div className="mascotContent my-auto px-[5vw]">
          <h2 className="flex items-baseline justify-start text-[6vw] sm:text-[7vw] lg:mb-[3vh]">
            Hi, I'm<span className="text-[#fcb717] pl-3">XAM</span>
          </h2>
          <h3 className="lg:mb-[3vh] 2xl:text-[2vw]">
            Let Me Take you
            <br /> through your <br /> Hair Regrowth Journey!
          </h3>
          <br />
          <div className="contactBtn">
            <Button1 btnName="Start" btnLocation="/contact-us" />
          </div>
        </div>
        <div className="mascot-img">
          <img
            src={MascotImg}
            alt=""
            className="w-[50vw] sm:w-[45vw] lg:w-[30vw]"
          />
        </div>
      </div>
    );
  }
}
