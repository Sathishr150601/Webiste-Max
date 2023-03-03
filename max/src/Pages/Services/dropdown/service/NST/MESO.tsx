import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { meso } from "../../../../../assets";

export default class Meso extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="Meso">
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
          <h2 className="">Meso QR 678</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              At MAX Hair Clinic, we provide the most advanced hair retention
              treatment, Meso QR 678. It is a bio-engineered substance with six
              proven growth factors designed to stop hair loss, thicken hair,
              increase the number of hair follicles, and densify the
              pre-existing hair, covering bald patches on the scalp. It is an
              FDA-approved and patented technology that aids in retaining
              various hair loss. This product is a polypeptide-based
              formulation, making it a plant-based growth factor. As a result,
              it is both safe for the human body and nature. Meso QR 678 is more
              stable and result-oriented. QR678 therapy is locally applied over
              the scalp skin by mesotherapy, which doesn’t disrupt systemic
              circulation. In the majority of cases, the QR678 therapy has no
              side effects. The QR678 is non-invasive, non-surgical, and
              therefore safer. The QR678 therapy gives the best results in
              androgenetic alopecia and in both male and female patterns of hair
              loss. QR678 therapy is recommended for individuals experiencing
              post-chemotherapy hair loss, treating hair conditions such as
              seborrheic dermatitis, and treating immunogenic diseases such as
              alopecia areata.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={meso} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
