import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { tp } from "../../../../../assets";

export default class TP extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="TP">
        <Header />
        <Menu2 />
        <Service1 />
        <Footer
          fspeed={80}
          footercap="About Our Clinic"
          footercontent="Welcome to the Haven of Hair Regrowth"
          footerpath="/contact"
        />
      </div>
    );
  }
}

function Service1() {
  return (
    <div className="Service1 w-[90vw] mx-auto my-[10vh]">
      <div className="goBackBtn">
        <Button1
          btn1click=""
          btnLocation="/services/non-clinical-treatments"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Tres Pro</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Tress Pro Solution is a high-end, high-quality hair extension. At
              MAX Hair Clinic, we provide you with the experience of the best
              hair extensions. Our premium quality Tress Pro helps you achieve
              your desired look by deriving the perfect volume, length, and
              lusters from your hair extensions. Each Tress Pro extension is
              handcrafted by a bespoke team of experts. This results in
              natural-looking hair with incredible elegance. Our Tress Pro is
              available in a variety of stunning shades and lengths for you to
              choose from. These instant styling hair extensions complement your
              hair perfectly, and the silky smooth Tress Pro can be treated in
              the same way as your own. Our multi-tone system allows for perfect
              color blending and a variety of choices in styling, ranging from
              curls to sleek and straight strands. We have the best reputation
              when it comes to Tress Pro extensions. Our hairstyling experts
              ensure a perfect blend of Tres Pro with your existing hair with
              careful positioning of the Tres Pro system closer to the parting.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={tp} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
