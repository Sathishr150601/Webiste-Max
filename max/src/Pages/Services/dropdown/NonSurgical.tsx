import { Header } from "../../../components";
import Footer from "../../../components/Footer/Footer";
import InnerService from "../../../components/Inner/InnerService";
import Menu2 from "../Menu2";
import {
  icon8,
  icon9,
  icon10,
  icon11,
  icon12,
  icon13,
  icon14,
} from "../../../assets";

export default function NonSurgical() {
  window.onload = function ScrollEvent() {
    if (window.innerWidth >= 1023) {
      if (window.innerWidth <= 1280) {
        window.scrollTo({
          top: window.innerHeight / 1.4,
          behavior: "smooth",
        });
      } else if (window.innerWidth <= 1561) {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.33,
          behavior: "smooth",
        });
      }
    } else {
      if (window.innerWidth <= 767) {
        if (window.innerWidth <= 450) {
          window.scrollTo({
            top: window.innerHeight / 1.66,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: window.innerHeight / 1.45,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: window.innerHeight / 1.25,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="">
      <Header />

      <Menu2 />

      <NonSurgicalTreatments />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/contact"
      />
    </div>
  );
}

function NonSurgicalTreatments() {
  return (
    <div className="innerServiceWRappe flex flex-wrap justify-center mb-[8vw] w-[90vw] lg:w-[96vw] mx-auto">
      <InnerService
        serviceNo={1}
        serviceBtn="/services/non-surgical-treatments/cc-prp-active+"
        serviceIcon1={icon8}
        serviceCaption="Regrow your natural hair with Strong strands"
        serviceTitle="CC PRP ACTIVE+"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/non-surgical-treatments/oxygen-laser-therapy"
        serviceIcon1={icon9}
        serviceCaption="The best solution for hair thinning. Emerged with phototherapeutic effects"
        serviceTitle="OXYGEN LASER THERAPY"
      />
      <InnerService
        serviceNo={3}
        serviceBtn="/services/non-surgical-treatments/dr-regrowth"
        serviceIcon1={icon10}
        serviceCaption="Treats dull, dehydrated, and weak hair and  prevents hair loss"
        serviceTitle="DR REGROWTH"
      />
      <InnerService
        serviceNo={4}
        serviceBtn="/services/non-surgical-treatments/crotico-shot"
        serviceIcon1={icon11}
        serviceCaption="Does Alopecia worry you? Get your hair back with our safest treatment"
        serviceTitle="CROTICO - SHOT"
      />
      <InnerService
        serviceNo={5}
        serviceBtn="/services/non-surgical-treatments/laser-helmet"
        serviceIcon1={icon12}
        serviceCaption="Stops your hair loss and thickens your hair"
        serviceTitle="LASER HELMET"
      />
      <InnerService
        serviceNo={6}
        serviceBtn="/services/non-surgical-treatments/meso-qr-678"
        serviceIcon1={icon13}
        serviceCaption="Stock up vitamins to your scalp that  prevent hair fall"
        serviceTitle="MESO QR 678"
      />
      <InnerService
        serviceNo={7}
        serviceBtn="/services/non-surgical-treatments/scalp-detox"
        serviceIcon1={icon14}
        serviceCaption="Buff away dead skin and unclog product buildup from scalp"
        serviceTitle="SCALP DETOX"
      />
    </div>
  );
}
