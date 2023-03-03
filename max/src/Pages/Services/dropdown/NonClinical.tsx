import { Header } from "../../../components";
import Footer from "../../../components/Footer/Footer";
import InnerService from "../../../components/Inner/InnerService";
import Menu2 from "../Menu2";
import { icon16, icon17, icon18, icon19, icon20 } from "../../../assets";

export default function NonClinical() {
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
    <div className="innerServiceWRapper flex flex-col my-[8vw] w-[90vw] mx-auto">
      <div className="flex flex-col sm:flex-row mx-auto">
        <div className="flex mb-[3vh]">
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
        </div>
        <div className="flex mb-[3vh]">
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
        </div>
      </div>
      <div className="flex justify-center">
        <InnerService
          serviceNo={5}
          serviceBtn="/services/non-clinical-treatments/dura"
          serviceCaption="Natural-looking hair that complements your new look"
          serviceIcon1={icon20}
          serviceTitle="DURA"
        />
      </div>
    </div>
  );
}
