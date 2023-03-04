import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { lh } from "../../../../../assets";

export default class LH extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="LH">
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
          <h2 className="">Laser Helmet</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Enjoy comfortable hair restoration at your leisure! Oxygen LASER
              therapy MAX Hair Clinic provides LASER helmet that can be used to
              rejuvenate hair growth and circulation. The helmet can be worn by
              the patient for 20 minutes, three times per week, for a total of
              8000 hours. Because it can be worn from the comfort of the
              patient’s home, it has no negative impact on the patient’s
              routine. Patients should use topical solutions & oral supplements
              as advised by the physician during the course of the treatment
              given when they are present for reviews. The best hair restoration
              treatment is the LASER helmet; the best part is that it is a
              non-surgical and clinical procedure that helps to stop hair loss.
              As an advantage, this treatment thickens the existing hair and
              encourages the growth of new hair by emitting laser beams that
              stimulate blood circulation throughout the scalp.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={lh} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
