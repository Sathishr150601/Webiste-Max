import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { wht } from "../../../../../assets";

export default class HT extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="HT">
        <Header />
        <Menu2 />
        <Service2 />
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

function Service2() {
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
          <h2 className="">Women Hair Transplant</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px]  xl:text-[20px]">
              Female Pattern Baldness is Multifactorial but is usually caused
              due to Hormonal changes or the hair products used. During the
              consultation, the Doctor makes sure to rule out the possible
              underlying Two factors should be considered for hair
              transplantation:
              <br />
              There should be enough healthy hair in your donor area for the
              hair to be transplanted where it is needed.
              <br />
              The place where hair will be transplanted should be suitable for
              hair transplant. There should be no irritation or damage.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={wht} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
