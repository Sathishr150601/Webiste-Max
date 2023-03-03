import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Clinic from "./sections/Clinic";

export default function About() {
  return (
    <div className="About">
      <Header />

      <Clinic />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/services"
      />
    </div>
  );
}
