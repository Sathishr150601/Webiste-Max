import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { olt } from "../../../../../assets";

export default class OLT extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="OLT">
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
          <h2 className="">Oxygen LASER Therapy</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              MAX Oxygen LASER Therapy is a clinically proven, FDA-approved
              advanced method of stimulating hair growth and effectively
              reducing baldness. Oxygen laser therapy is a non-surgical
              treatment for hair loss that employs a medical laser device with
              therapeutic and low-light laser levels. The photo-bio stimulation
              of MAX Oxygen LASER Hair Treatment irradiates photons into scalp
              tissues, which upon penetration accelerates pure oxygen intake.
              The Oxygen LASER light beam will stimulate the hair follicles and
              their tissue cells. This promotes blood flow, increases the hair
              growth rate, reduces the thinning of hair, and treats androgenetic
              alopecia. As this activates the intracellular fluid, nutrients get
              supplied equally. This helps the follicles to restore and
              reconstruct healthy hair. Because this noninvasive wavelength
              contains 100% oxygen, this method of preventing hair loss is
              completely safe for human health. At MAX Hair Clinic, we use 650nm
              to 830nm. In addition, this reduces dandruff, improves the
              immunity of the skin, and also activates collagen production. The
              cold beam emitted from the diode freezes hair and prevents it from
              falling. The main factor and an added advantage of using Oxygen
              LASER therapy are that it breaks down DHT, which plays a
              significant role in hair fall. It also aids in the production of
              oil and sebum secretion, which helps to keep the scalp’s pH
              stable.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={olt} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
