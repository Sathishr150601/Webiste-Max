import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { du } from "../../../../../assets";

export default class TP extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="TP">
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
          btnLocation="/services/non-clinical-treatments"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Dura</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Max Hair Clinic offers Dura Cosmetic Hair to improve your
              appearance and bring out the best version of you. Max Hair
              Clinic’s highly defined 100% natural cosmeceutical human hair is
              worth a try. This is designed to completely conceal balding or
              bare spots, such as male pattern baldness. Dura Cosmetic provides
              superior grip and all-around protection while concealing receding
              hairlines. Enjoy all the moments in your life without worrying
              about carrying the best cosmetic hair.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={du} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
