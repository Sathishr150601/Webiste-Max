import Marquee from "react-fast-marquee";
import { slideimg1, slideimg2, slideimg3 } from "../../assets";

import { Component } from "react";

export default class ImageSlider extends Component {
  render() {
    return (
      <div className="slide-container overflow-hidden mt-[3vh] sm:mt-[1vh]">
        <Marquee direction="left" speed={100} className="lg:mt-[1vh] 2xl:mt-[2vh]">
          <div className="flex w-[120vw]  text-black">
            <img src={slideimg1} alt="" className="w-[40vw] px-[5vw]" />
            <img src={slideimg2} alt="" className="w-[40vw] px-[5vw]" />
            <img src={slideimg3} alt="" className="w-[40vw] px-[5vw]" />
          </div>
        </Marquee>
        <hr className="w-[100vw]" />
      </div>
    );
  }
}
