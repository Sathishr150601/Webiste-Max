import { Route, Routes } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import { Home, UnderMaintanence } from "../Pages";
import About from "../Pages/About/About";
import Capability from "../Pages/About/sections/Capability";
import Forte from "../Pages/About/sections/Forte";
import Milestones from "../Pages/About/sections/Milestones";
import Contact from "../Pages/Contact/Contact";
import Services from "../Pages/Services/Services";
import NonSurgical from "../Pages/Services/dropdown/NonSurgical";
import Clinical from "../Pages/Services/dropdown/Clinical";
import NonClinical from "../Pages/Services/dropdown/NonClinical";
import HT from "../Pages/Services/dropdown/service/ST/HT";
import WHT from "../Pages/Services/dropdown/service/ST/WHT";
import IHT from "../Pages/Services/dropdown/service/ST/IHT";
import DHT from "../Pages/Services/dropdown/service/ST/DHT";
import SHT from "../Pages/Services/dropdown/service/ST/SHT";
import EHT from "../Pages/Services/dropdown/service/ST/EHT";
import BHT from "../Pages/Services/dropdown/service/ST/BHT";
import PRP from "../Pages/Services/dropdown/service/NST/PRP";
import OLT from "../Pages/Services/dropdown/service/NST/OLT";
import DRR from "../Pages/Services/dropdown/service/NST/DRR";
import CS from "../Pages/Services/dropdown/service/NST/CS";
import LH from "../Pages/Services/dropdown/service/NST/LH";
import MESO from "../Pages/Services/dropdown/service/NST/MESO";
import SD from "../Pages/Services/dropdown/service/NST/SD";
import SM from "../Pages/Services/dropdown/service/CT/SM";
import ELE from "../Pages/Services/dropdown/service/CT/ELE";
import EBE from "../Pages/Services/dropdown/service/CT/EBE";
import TP from "../Pages/Services/dropdown/service/NCT/TP";
import CC from "../Pages/Services/dropdown/service/NCT/CC";
import SL from "../Pages/Services/dropdown/service/NCT/SL";
import FG from "../Pages/Services/dropdown/service/NCT/FG";
import DURA from "../Pages/Services/dropdown/service/NCT/DURA";
import Transformations from "../components/Transformations/Transformations";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/about/our-capability" element={<Capability />} />
      <Route path="/about/our-forte" element={<Forte />} />
      <Route path="/about/our-milestones" element={<Milestones />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/services/non-surgical-treatments"
        element={<NonSurgical />}
      />
      <Route path="/services/clinical-treatments" element={<Clinical />} />
      <Route
        path="/services/non-clinical-treatments"
        element={<NonClinical />}
      />
      <Route
        path="/services/surgical-treatments/hair-transplant"
        element={<HT />}
      />
      <Route
        path="/services/surgical-treatments/women-hair-transplant"
        element={<WHT />}
      />
      <Route
        path="/services/surgical-treatments/igm-hair-transplant"
        element={<IHT />}
      />
      <Route
        path="/services/surgical-treatments/dhi-hair-transplant"
        element={<DHT />}
      />
      <Route
        path="/services/surgical-treatments/sapphire-hair-transplant"
        element={<SHT />}
      />
      <Route
        path="/services/surgical-treatments/eyebrow-hair-transplant"
        element={<EHT />}
      />
      <Route
        path="/services/surgical-treatments/beard-hair-transplant"
        element={<BHT />}
      />
      <Route
        path="/services/non-surgical-treatments/cc-prp-active+"
        element={<PRP />}
      />
      <Route
        path="/services/non-surgical-treatments/oxygen-laser-therapy"
        element={<OLT />}
      />
      <Route
        path="/services/non-surgical-treatments/dr-regrowth"
        element={<DRR />}
      />
      <Route
        path="/services/non-surgical-treatments/crotico-shot"
        element={<CS />}
      />
      <Route
        path="/services/non-surgical-treatments/laser-helmet"
        element={<LH />}
      />
      <Route
        path="/services/non-surgical-treatments/meso-qr-678"
        element={<MESO />}
      />
      <Route
        path="/services/non-surgical-treatments/scalp-detox"
        element={<SD />}
      />
      <Route
        path="/services/clinical-treatments/scalp-micropigmentation"
        element={<SM />}
      />
      <Route
        path="/services/clinical-treatments/eyelash-extension"
        element={<ELE />}
      />
      <Route
        path="/services/clinical-treatments/eyebrow-extension"
        element={<EBE />}
      />
      <Route
        path="/services/non-clinical-treatments/tres-pro"
        element={<TP />}
      />
      <Route
        path="/services/non-clinical-treatments/celebrity's-choice"
        element={<CC />}
      />
      <Route
        path="/services/non-clinical-treatments/satin-lace"
        element={<SL />}
      />
      <Route
        path="/services/non-clinical-treatments/french-grip"
        element={<FG />}
      />
      <Route path="/transformations" element={<Transformations />} />
      <Route path="/services/non-clinical-treatments/dura" element={<DURA />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/menu" element={<Aside />} />
      <Route path="*" element={<UnderMaintanence />} />
    </Routes>
  );
}
