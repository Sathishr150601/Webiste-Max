import { Header } from "../../components";
import Footer from "../../components/Footer/Footer";
import Surgical from "./dropdown/Surgical";
import Menu2 from "./Menu2";

export default function Services() {
  return (
    <div className="Services">
      <Header />

      <Menu2 />

      <Surgical />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/contact"
      />
    </div>
  );
}
