import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { cc } from "../../../../../assets";

export default class CC extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="CC">
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
          <h2 className="">Celebrity's Choice</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              Mirage human hair systems are designed using only the finest
              quality human hair, resulting in a natural appearance that is 100%
              authentic to the touch. Our celebrity’s choice of hair system
              results in the most realistic hairlines and offers a worry-free
              solution to alleviate any signs of baldness. Natural appearances
              and top-notch durability are assured with MAX hair replacement
              systems and Celebrity’s Choice is an unbelievably natural
              low-maintenance solution available in a multitude of choices for
              hair color, texture, and thickness. Developed from the finest
              quality base materials, the mirage human hair system offers
              flexibility to adopt versatile styling choices with a natural feel
              that perfectly mimics real hair. It is soft to the touch with a
              natural shine and can be styled into any number of exquisite
              styles. It is easy to wash and requires little maintenance, making
              it the perfect choice for anyone looking for a realistic and
              high-quality hair replacement solution.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={cc} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
