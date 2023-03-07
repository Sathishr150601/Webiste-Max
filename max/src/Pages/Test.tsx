import { Link } from "react-router-dom";
import { Button1 } from "../components";
import { icon1 } from "../assets";

export default function Test() {
  return (
    <div className="flex flex-wrap w-[90vw] mx-auto">
      <Hero02
        serviceNo={1}
        serviceBtn=""
        serviceIcon1={icon1}
        serviceCaption="Baldness will no longer bother you anymore"
        serviceTitle="HAIR micropigmentation"
      />

      <Hero02
        serviceNo={1}
        serviceBtn=""
        serviceIcon1={icon1}
        serviceCaption="Baldness will no longer bother you anymore"
        serviceTitle="HAIR TRANSPLANT"
      />
      <Hero02
        serviceNo={1}
        serviceBtn=""
        serviceIcon1={icon1}
        serviceCaption="Baldness will no longer bother you anymore"
        serviceTitle="HAIR micropigmentation"
      />

      <Hero02
        serviceNo={1}
        serviceBtn=""
        serviceIcon1={icon1}
        serviceCaption="Baldness will no longer bother you anymore"
        serviceTitle="HAIR TRANSPLANT"
      />
    </div>
  );
}

function Hero02(props: any) {
  return (
    <div className="innerService my-[3vh] w-[80vw] mx-auto sm:w-[60vw] md:w-[40vw] lg:w-[22vw] lg:mx-[1vw] 2xl:max-w-[400px]">
      <Link to={props.serviceBtn} onClick={props.serviceBtn}>
        <div className="inner bg-black hover:bg-white min-h-[450px] h-[52vh] p-[2rem] sm:h-[60vh] md:h-[50vh] lg:min-h-[380px] lg:h-[50vh] 2xl:max-w-[600px]">
          <div className="psx-overlay"></div>
          <div className="serviceNo float-right">
            / {props.serviceNo} &nbsp;
          </div>
          <div className="serviceIcon">
            <img
              src={props.serviceIcon1}
              alt=""
              className="w-[25vw] mt-[5vh] sm:w-[15vw] md:w-[12vw] lg:w-[6vw]"
            />
          </div>
          <div className="serviceTitle my-[3vh]">
            <h5 className="font-semibold uppercase text-[6.5vw] leading-[4vh] sm:text-[4.5vw] sm:leading-[5vh] md:text-[3vw] md:leading-[4vh] lg:text-[1.6vw]">
              {props.serviceTitle}
            </h5>
          </div>
          <hr className="border-white overflow-hidden w-[70vw] max-sm:w-[50vw] sm:w-[25vw] lg:w-[16vw] border-[.5px]" />
          <div className="serviceCaption mt-[3vh]">
            <p className="text-[1.3em] lg:text-[1em]">{props.serviceCaption}</p>
            <div className="serviceBtn">
              <Button1
                btn1click={props.serviceBtn}
                btnLocation={props.serviceBtn}
                btnName="Learn More"
                spanClass1=""
                spanClass2=""
                spanClass3=""
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
