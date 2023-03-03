import InnerService from "../../../components/Inner/InnerService";
import { icon1, icon2, icon3, icon4, icon5, icon6, icon7 } from "../../../assets";

export default function Surgical() {
  return (
    <div className="innerServiceWRapper flex flex-wrap flex-col my-[8vw] w-[90vw] mx-auto">
      <div className="flex flex-col sm:flex-row mx-auto mb-[2vw]">
        <div className="flex mb-[3vh]">
          <InnerService
            serviceNo={1}
            serviceBtn="/services/surgical-treatments/hair-transplant"
            serviceIcon1={icon1}
            serviceCaption="Baldness will no longer bother you anymore"
            serviceTitle="HAIR TRANSPLANT"
          />
          <InnerService
            serviceNo={2}
            serviceBtn="/services/surgical-treatments/women-hair-transplant"
            serviceIcon1={icon2}
            serviceCaption="Your perfect solution to baldness"
            serviceTitle="WOMEN HAIR TRANSPLANT"
          />
        </div>
        <div className="flex mb-[3vh]">
          <InnerService
            serviceNo={3}
            serviceBtn="/services/surgical-treatments/igm-hair-transplant"
            serviceIcon1={icon3}
            serviceCaption="The best result-oriented Hair Restoration Treatment"
            serviceTitle="IGM HAIR TRANSPLANT"
          />
          <InnerService
            serviceNo={4}
            serviceBtn="/services/surgical-treatments/dhi-hair-transplant"
            serviceIcon1={icon4}
            serviceCaption="A Primer High-tech solution for Baldness"
            serviceTitle="DHI HAIR TRANSPLANT"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mx-auto mb-[3vw]">
        <div className="flex mb-[3vh]">
          <InnerService
            serviceNo={5}
            serviceBtn="/services/surgical-treatments/sapphire-hair-transplant"
            serviceIcon1={icon5}
            serviceCaption="An advanced Hair Treatment with Minimal scars and postoperative effects"
            serviceTitle="SAPPHIRE HAIR TRANSPLANT"
          />
          <InnerService
            serviceNo={6}
            serviceBtn="/services/surgical-treatments/beard-hair-transplant"
            serviceIcon1={icon6}
            serviceCaption="No delay to achieve your Macho look. A permanent beard restoration procedure"
            serviceTitle="BREAD HAIR TRANSPLANT"
          />
          <InnerService
            serviceNo={7}
            serviceBtn="/services/surgical-treatments/eyebrow-hair-transplant"
            serviceIcon1={icon7}
            serviceCaption="Get your Permanent, Thick and Natural-looking Eyebrow"
            serviceTitle="EYEBROW HAIR TRANSPLANT"
          />
        </div>
      </div>
    </div>
  );
}
