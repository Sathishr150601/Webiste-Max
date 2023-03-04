import Content from "../../../components/content/Content";
import Footer from "../../../components/Footer/Footer";
import Heading1 from "../../../components/Heading/Heading1";
import Test from "../Menu1";
import Milestone from "../../../assets/photos/Milestone.jpeg";

export default function Milestones() {
    window.onload = () => {
      window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
    };
  return (
    <div className="OurForte">
      <Test />
      <OurMilestones />
      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/services"
      />
    </div>
  );
}

function OurMilestones() {
  return (
    <div className="OurMilestones">
      <img src={Milestone} alt="" className="w-[100vw]" />
    </div>
  );
}
