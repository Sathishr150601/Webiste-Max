import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { prp } from "../../../../../assets";

export default class PRP extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="PRP">
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
          <h2 className="">CC PRP Active+</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              A non-surgical, completely safe, and organic procedure that aids
              in hair retention and prevention of hair loss and has no side
              effects. At MAX Hair Clinic, we use a Closed-Casket Kit to collect
              plasma from the client’s blood using the modern German technology
              known as Closed Casket Platelet Rich Plasma (CC-PRP). This
              contains Growth factors, proteins, amino acids, nutrients, and
              electrolytes derived from the platelets. As a result, this Non-
              surgical treatment benefits by nurturing, rejuvenating, and
              promoting hair regrowth. Any damage to the scalp or hair follicles
              will return to their natural, healthy state. The closed-casket PRP
              machine has a single entry point and a single exit point; As a
              result, the plasma is pathogen- and toxin free and has not been
              exposed to the outside environment. The CC-PRP kit spins at 5000
              RPM, thus extracting growth factor concentrate (GFC) while
              protecting the cells through a self-cooling mechanism. MAX Hair
              Clinic ensures proper maintenance of hygiene. We use sterile and
              disposable CC-PRP kits. Catalyzing optimum healing. CC-PRP
              treatments are a 100% customizable procedure that increases hair
              density & quality and also counteracts baldness. Helps in the
              natural regenerative process of hair growth.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={prp} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
