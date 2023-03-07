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
      {first && <OurClinic />}
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

function OurClinic() {
  return (
    <section className="OurClinic mb-[8vw] mt-[3vw]">
      <div className="lg:w-[90vw] lg:mx-auto lg:flex lg:justify-between">
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[40vw] lg:mx-0">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh] md:text-[8vw] lg:text-[6vw]">
              Our Clinic
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              MAX hair clinic is one of the finest hair transplant clinics since
              2004. Has gained high trust & reputation all over India for the
              best results on the complete hair growth treatments. We are one of
              a kind and are proud to pioneer the SAPPHIRE HAIR TRANSPLANT. An
              elite advancement, imported from Europe. We provide clinical and
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
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}

function OurCapability() {
  return (
    <section className="OurClinic mb-[8vw] mt-[3vw]">
      <div className="lg:w-[90vw] lg:mx-auto lg:flex lg:flex-row-reverse lg:justify-between">
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[45vw] lg:mx-0">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh] md:text-[8vw] lg:text-[6vw]">
              Our Capability
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              MAX Hair Clinic, since its inception in 2004, has already managed
              to win the reputation of being the Best Hair Solution Company in
              India. At MAX Hair, our highly experienced experts work
              ceaselessly to develop custom solutions. We have relentlessly
              added to our technique, Advanced technological and knowledge
              ensuring that we develop and deliver nothing less than the Best
              Hair Cosmetic Systems, Hair Transplant and Hair Replacement
              products and services. We have achieved the feat of being widely
              acclaimed in the USA and have managed to achieve the same in
              India, with our unparalleled services and products. Our Hair
              Replacement procedures offer the best possible natural look. We
              also take pride in our Human Skin Lace Cosmetic Systems that are
              fully undetectable and offer our customers 100% natural look with
              high comfort level.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={abtimg2}
            alt=""
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}

function OurForte() {
  return (
    <section className="OurClinic mb-[8vw] mt-[3vw]">
      <div className="lg:w-[90vw] lg:mx-auto lg:flex lg:justify-between">
        <div className="content w-[90vw] mx-auto text-black md:w-[80vw] lg:w-[40vw] lg:mx-0">
          <div className="title">
            <h2 className="text-[11vw] leading-[9vh] sm:mb-[3vh] md:text-[8vw] lg:text-[6vw]">
              Our Forte
            </h2>
          </div>
          <div className="passage sm:w-[80vw] sm:mx-auto md:w-[70vw] lg:w-[45vw]">
            <p className="text-[1em] text-justify md:text-[1.2em] xl:text-[1.3em] xl:leading-[2.3em] 2xl:text-[1.5em]">
              Practicing the latest in FUE Hair Transplant, MAX Hair Clinic has
              set a benchmark with its Sapphire+ Hair Transplant treatment. MAX
              Hair Clinic specialises in Hair Transplantation, Beard
              transplantation, Hair Restoration, Hair Replacement, Hair
              Retention programmes like CC-PRP, Dr. Regrowth, SLS, QR 678 and
              much more. No doubt our experienced professionals and experts
              recommend you the best treatment that matches your needs and
              achieve the desired results that you have always longed for.
            </p>
          </div>
        </div>
        <div className="image">
          <img
            src={abtimg2}
            alt=""
            className="w-[100vw] sm:w-[70vw] sm:mx-auto sm:rounded-3xl md:w-[60vw] lg:w-[40vw]"
          />
        </div>
      </div>
    </section>
  );
}

function OurMilestones() {
  return (
    <div className="OurMilestones">
      <img src={Milestone} alt="" className="w-[100vw]" />
    </div>
  );
}
