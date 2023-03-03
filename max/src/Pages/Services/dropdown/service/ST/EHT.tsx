import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { ebht } from "../../../../../assets";

export default class HT extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="HT">
        <Header />
        <Menu2 />
        <Service6 />
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

function Service6() {
  return (
    <div className="Service1 w-[90vw] mx-auto my-[20vh]">
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
          <h2 className="">Eyebrow Hair Transplant</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              An eyebrow transplant is basically a cosmetic surgery that makes
              the eyebrow area fuller with natural-looking hair. MAX Hair Clinic
              offers the Sapphire and Mirror methods to attain the best angular
              and geometric directions for perfect eyebrow shapes. Many people
              who suffer from trichotillomania or alopecia areata benefit from
              an eyebrow transplant. This permanent procedure can last a
              lifetime. It takes a few months to see visible results after the
              hair transplant. But the good part is that the recovery time is
              reasonably quick. The grafts are obtained from the Nape area. This
              scalp piece contains a minimum of 13 to 15 hair follicles. Later,
              the collected grafts are implanted into the eyebrows. This
              procedure is done once the skin heals after the removal of grafts.
              This implantation helps your brow look well-defined with
              natural-looking hair. At MAX Hair Clinic, eyebrow transplants are
              performed by highly skilled cosmetic or plastic surgeons who help
              with pre- and post-implant recovery.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={ebht} alt="" className="w-[30vw] h-[60vh] rounded-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
