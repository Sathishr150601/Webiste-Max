import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { sd } from "../../../../../assets";

export default class SD extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="SD">
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
          btnLocation="/services/non-surgical-treatments"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Scalp Detox</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              At MAX Hair Clinic, get rid of your flaky and itchy scalp by
              detoxifying. Our detox treatment provides nourishment and
              revivification for dry and itchy scalps. This exfoliates dead and
              damaged scalp tissues. When it comes to having scalp pores, the
              scalp resembles the skin on other parts of the body. The pores
              created in the scalp can get clogged as a result of oil, sebum,
              dust, or any other reason, which results in pimples, boils, pus
              formation, or even fungal development on the scalp. This affects
              the health of the scalp and the quality of hair growth and may
              also end up in hair loss.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={sd} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
