import { Component } from "react";
import Marquee from "react-fast-marquee";
import {
  servicelogo1,
  servicelogo10,
  servicelogo2,
  servicelogo3,
  servicelogo4,
  servicelogo5,
  servicelogo6,
  servicelogo7,
  servicelogo8,
  servicelogo9,
} from "../../assets";

export default class LogoSlider extends Component {
  render() {
    return (
      <div className="LogoSlider bg-white w-[100vw] mb-[8vh]">
        <Marquee speed={60} direction="right">
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo1}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo2}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo3}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo4}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo5}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo6}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo7}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo8}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw] "
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo9}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
          <div className="logo1 px-[2vw]">
            <img
              src={servicelogo10}
              alt=""
              className="w-[30vw] sm:w-[20vw] lg:w-[15vw]"
            />
          </div>
        </Marquee>
      </div>
    );
  }
}
