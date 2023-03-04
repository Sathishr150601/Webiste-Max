import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { cs } from "../../../../../assets";

export default class CS extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 540,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="CS">
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
          btnLocation="/services/non-surgical-treatments"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Crotico - Shot</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              MAX Hair Clinic provides treatments for multifaceted hair loss
              issues. Auto-immune disease is one of them. We have the best, most
              dedicated team for treating hair loss. A Cortico shot is
              exclusively given to people suffering from alopecia areata.
              Alopecia Areata is an auto-immune disorder where our own body
              attacks native body cells. This shot lowers the immune response.
              Cortico shots help in treating alopecia areata of the scalp where
              less than 50% of the scalp area is involved. Alopecia areata of
              the brows, beard, and lichen are also common. Planopilaris
              Alopecia due to frontal fibrosis, discoid lupus, and folliculitis
              de calvans can also be treated. While corticosteroids cannot
              guarantee that the hair follicles in the affected area will grow
              back completely, they can help to lower the immune response and
              stop the spread of this specific illness. In certain cases, we are
              able to appreciate 50% of the regrowth in the affected portion.
              Along with the Derma-Roller, a Cortico shot can be administered.
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={cs} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
