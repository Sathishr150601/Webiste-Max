import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero02 from "../../components/Hero/Hero02";
import abtimg2 from "../../assets/photos/BABU0235.jpg";
import Milestone from "../../assets/photos/Milestone.jpeg";
import { useState } from "react";

export default function About() {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);

  const handleScroll = () => {
    if (window.innerWidth >= 1024) {
      if (window.innerWidth <= 1280) {
        window.scrollTo({
          top: window.innerHeight / 1,
          behavior: "smooth",
        });
      } else if (window.innerWidth <= 1561) {
        window.scrollTo({
          top: window.innerHeight / 1,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: window.innerHeight / 1,
          behavior: "smooth",
        });
      }
    } else {
      if (window.innerWidth <= 768) {
        if (window.innerWidth <= 450) {
          window.scrollTo({
            top: window.innerHeight / 1.25,
            behavior: "smooth",
          });
        } else {
          window.scrollTo({
            top: window.innerHeight / 1,
            behavior: "smooth",
          });
        }
      } else {
      }
    }
  };

  const Click1 = () => {
    handleScroll();
    setfirst(true);
    setsecond(false);
    setthird(false);
    setfourth(false);
  };
  const Click2 = () => {
    handleScroll();
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfourth(false);
  };
  const Click3 = () => {
    handleScroll();
    setfirst(false);
    setsecond(false);
    setthird(true);
    setfourth(false);
  };
  const Click4 = () => {
    handleScroll();
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfourth(true);
  };

  return (
    <div className="About overflow-hidden">
      <Header />
      <Hero02
        caption="Max"
        title1="About"
        title2="Us"
        menu1="Our Clinic"
        click1={Click1}
        click2={Click2}
        click3={Click3}
        click4={Click4}
        menu2="Our Capability"
        menu3="Our Forte"
        menu4="Our Milestones"
      />
      {first && <OurClinic1 />}
      {second && <OurCapability />}
      {third && <OurForte />}
      {fourth && <OurMilestones />}
      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/services"
      />
    </div>
  );
}

function OurClinic1() {
  return (
    <section className="OurClinic my-[8vw]">
      <div className="content w-[90vw] mx-auto text-black">
        <div className="title">
          <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh]">Our Clinic</h2>
        </div>
        <div className="passage sm:w-[80vw] sm:mx-auto">
          <p className="text-[1em] text-justify">
            MAX hair clinic is one of the finest hair transplant clinics since
            2004. Has gained high trust & reputation all over India for the best
            results on the complete hair growth treatments. We are one of a kind
            and are proud to pioneer the SAPPHIRE HAIR TRANSPLANT. An elite
            advancement, imported from Europe. We provide clinical and
            non-clinical hair loss solutions for both MEN and Women. MAX hair
            clinic is well known for its quality service by our highly skilled
            and experienced panel of surgeons and hair experts.
          </p>
        </div>
      </div>
      <div className="image">
        <img
          src={abtimg2}
          alt=""
          className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl"
        />
      </div>
    </section>
  );
}

function OurClinic() {
  return (
    <div className="OurClinic my-[6vw] w-[90vw] h-max mx-auto">
      <div className="flex justify-between items-center">
        <div className="textContent w-[45vw] text-black">
          <h2 className="clinic-title">Our Clinic</h2>
          <p className="text-[14px] xl:text-[18px] poppins text-justify">
            MAX hair clinic is one of the finest hair transplant clinics since
            2004. Has gained high trust & reputation all over India for the best
            results on the complete hair growth treatments. We are one of a kind
            and are proud to pioneer the SAPPHIRE HAIR TRANSPLANT. An elite
            advancement, imported from Europe. We provide clinical and
            non-clinical hair loss solutions for both MEN and Women. MAX hair
            clinic is well known for its quality service by our highly skilled
            and experienced panel of surgeons and hair experts.
          </p>
        </div>
        <div className="imgSection w-[40vw]">
          <img src={abtimg2} alt="" className="w-[40vw] h-[40vw] rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

function OurCapability() {
  return (
    <div className="OurCapability my-[8vw] w-[90vw] h-max mx-auto">
      <div className="flex justify-between">
        <div className="imgSection w-[40vw]">
          <img src={abtimg2} alt="" className="w-[40vw] h-[40vw] rounded-3xl" />
        </div>
        <div className="textContent w-[45vw] text-black">
          <h2 className="clinic-title">Our Capability</h2>
          <p className="text-[14px] poppins text-justify">
            MAX Hair Clinic, since its inception in 2004, has already managed to
            win the reputation of being the Best Hair Solution Company in India.
            At MAX Hair, our highly experienced experts work ceaselessly to
            develop custom solutions. We have relentlessly added to our
            technique, Advanced technological and knowledge ensuring that we
            develop and deliver nothing less than the Best Hair Cosmetic
            Systems, Hair Transplant and Hair Replacement products and services.
            We have achieved the feat of being widely acclaimed in the USA and
            have managed to achieve the same in India, with our unparalleled
            services and products. Our Hair Replacement procedures offer the
            best possible natural look. We also take pride in our Human Skin
            Lace Cosmetic Systems that are fully undetectable and offer our
            customers 100% natural look with high comfort level.
          </p>
        </div>
      </div>
    </div>
  );
}

function OurForte() {
  return (
    <div className="OurForte my-[8vw] w-[90vw] h-max mx-auto">
      <div className="flex justify-between items-center">
        <div className="textContent w-[45vw] text-black">
          <h2 className="clinic-title">Our Forte</h2>
          <p className="text-[14px] poppins text-justify">
            Practicing the latest in FUE Hair Transplant, MAX Hair Clinic has
            set a benchmark with its Sapphire+ Hair Transplant treatment. MAX
            Hair Clinic specialises in Hair Transplantation, Beard
            transplantation, Hair Restoration, Hair Replacement, Hair Retention
            programmes like CC-PRP, Dr. Regrowth, SLS, QR 678 and much more. No
            doubt our experienced professionals and experts recommend you the
            best treatment that matches your needs and achieve the desired
            results that you have always longed for.
          </p>
        </div>
        <div className="imgSection w-[40vw]">
          <img src={abtimg2} alt="" className="w-[40vw] h-[40vw] rounded-3xl" />
        </div>
      </div>
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
