import { Header } from "../../../components";
import Footer from "../../../components/Footer/Footer";
import InnerService from "../../../components/Inner/InnerService";
import Menu2 from "../Menu2";
import { icon16, icon17, icon18, icon19, icon20 } from "../../../assets";

export default function NonClinical() {
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

      <NonClinicalTreatments />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/contact"
      />
    </div>
  );
}

function NonClinicalTreatments() {
  return (
    <div className="innerServiceWRappe flex flex-wrap justify-center mb-[8vw] w-[90vw] lg:w-[96vw] mx-auto">
      <InnerService
        serviceNo={1}
        serviceBtn="/services/non-clinical-treatments/tres-pro"
        serviceCaption="Get natural-looking, easy-to-fit long hair with Tress Pro"
        serviceIcon1={icon16}
        serviceTitle="TRES PRO"
      />
      <InnerService
        serviceNo={2}
        serviceBtn="/services/non-clinical-treatments/celebrity's-choice"
        serviceCaption="Make Your Luxury Choice. Choose our high-end cosmetic hair replacement"
        serviceIcon1={icon17}
        serviceTitle="CELEBRITY'S CHOICE"
      />
      <InnerService
        serviceNo={3}
        serviceBtn="/services/non-clinical-treatments/satin-lace"
        serviceCaption="No Time for Treatments! Get the best non-surgical hair replacement"
        serviceIcon1={icon18}
        serviceTitle="SATIN LACE"
      />
      <InnerService
        serviceNo={4}
        serviceBtn="/services/non-clinical-treatments/french-grip"
        serviceCaption="Grab the most affordable hair replacement with the French Grip Hair Patch"
        serviceIcon1={icon19}
        serviceTitle="FRENCH GRIP"
      />
      <InnerService
        serviceNo={5}
        serviceBtn="/services/non-clinical-treatments/dura"
        serviceCaption="Natural-looking hair that complements your new look"
        serviceIcon1={icon20}
        serviceTitle="DURA"
      />
    </div>
  );
}

