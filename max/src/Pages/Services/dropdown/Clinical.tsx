import { Header } from "../../../components";
import Footer from "../../../components/Footer/Footer";
import InnerService from "../../../components/Inner/InnerService";
import Menu2 from "../Menu2";
import { icon15, icon6, icon7 } from "../../../assets";

export default function Clinical() {
  return (
    <div className="">
      <Header />

      <Menu2 />

      <ClinicalTreatments />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/contact"
      />
    </div>
  );
}

function ClinicalTreatments() {
  return (
    <div className="innerServiceWRapper flex flex-col my-[8vw] w-[90vw] mx-auto">
      <div className="flex flex-col sm:flex-row mx-auto mb-[3vw]">
        <InnerService
          serviceNo={1}
          serviceBtn="/services/clinical-treatments/scalp-micropigmentation"
          serviceCaption="Our new gen cosmetic procedure that mimics your hair"
          serviceIcon1={icon15}
          serviceTitle="SCALP MICRO PIGMENTATION"
        />
        <InnerService
          serviceNo={2}
          serviceBtn="/services/clinical-treatments/eyelash-extension"
          serviceCaption="Get Natural-looking Eyelashes with Custom style choices"
          serviceIcon1={icon7}
          serviceTitle="EYELASH EXTENSION"
        />
        <InnerService
          serviceNo={3}
          serviceBtn="/services/clinical-treatments/eyebrow-extension"
          serviceCaption="Shape your eyebrows permanently as you've always wanted"
          serviceIcon1={icon6}
          serviceTitle="EYEBROW MICROBLADING"
        />
      </div>
    </div>
  );
}
