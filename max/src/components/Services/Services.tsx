import { Link } from "react-router-dom";
import { hairLight } from "../../assets";
import { useEffect } from "react";
import $ from "jquery";

export default function Services() {
  return (
    <div className="flex flex-wrap">
      <FlipCard
        ln="/services"
        cardname="Surgical Treatments"
        serviceimg="front img1 w-[300px] h-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[23.5vw] lg:h-[23.5vw]"
        serviceContent1="Hair Transplant"
        serviceContent2="Women Hair Transplant"
        serviceContent3="IGM Hair Transplant"
        serviceContent4="DHI Hair Transplant"
        serviceContent5="Sapphire Hair Transplant"
        serviceContent6="Eyebrow Hair Transplant"
        serviceContent7="Beard Hair Transplant"
        servicehidden1="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden2="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden3="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden4="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
      />
      <FlipCard
        ln="/services/non-surgical-treatments/"
        cardname="Non - Surgical Treatments"
        serviceimg="front img2 w-[300px] h-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[23.5vw] lg:h-[23.5vw]"
        serviceContent1="CC PRP Active Plus"
        serviceContent2="Oxygen LASER Therapy"
        serviceContent3="Dr Regrowth"
        serviceContent4="Crotico-Shot"
        serviceContent5="Laser Helmet"
        serviceContent6="Meso QR 678"
        serviceContent7="Scalp Detox"
        servicehidden1="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden2="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden3="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden4="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
      />{" "}
      <FlipCard
        ln="/services/clinical-treatments"
        cardname="Clinical Treatments"
        serviceimg="front img3 w-[300px] h-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[23.5vw] lg:h-[23.5vw]"
        serviceContent1="Scalp Micropigmentation"
        serviceContent2="Eyelash Extension"
        serviceContent3="Eyebrow Microblading"
        serviceContent4=""
        serviceContent5=""
        serviceContent6=""
        serviceContent7=""
        servicehidden1="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden2="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden3="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden4="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
      />{" "}
      <FlipCard
        ln="/services/non-clinical-treatments"
        cardname="Non - Clinical Treatments"
        serviceimg="front img4 w-[300px] h-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[23.5vw] lg:h-[23.5vw]"
        serviceContent1="Tres Pro"
        serviceContent2="Celebrity's Choice"
        serviceContent3="Satin Lace"
        serviceContent4="French Grip"
        serviceContent5="Dura"
        serviceContent6=""
        serviceContent7="Dura"
        servicehidden1="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden2="flex items-end lg:items-center mb-[.5vh] leading-[initial]"
        servicehidden3="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
        servicehidden4="flex items-end lg:items-center mb-[.5vh] leading-[initial] hidden"
      />
    </div>
  );
}

function FlipCard(props: any) {
  return (
    <div className="Services1 w-max mx-auto my-[2vh]">
      <Link to={props.ln}>
        <div className="flip-card bg-transparent h-[300px] w-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[23.5vw] lg:h-[23.5vw]">
          <div className="flip-card-inner relative h-[300px] w-[300px] sm:w-[44vw] sm:h-[44vw] lg:w-[23.5vw] lg:h-[23.5vw]">
            <div className="flip-card-front absolute">
              <div className={props.serviceimg}>
                <div className="flex items-end h-[300px] sm:h-[44vw] lg:h-[23.5vw]">
                  <div className="bg-black opacity-70 w-[300px] sm:w-[44vw] lg:w-[23.5vw] h-max flex justify-center items-center pt-[1vh] text-center">
                    <h2 className="caption txtshadow text-[1.3rem] leading-[2vh] xl:text-[1.4rem] 2xl:text-[1.6em] lg:leading-[3vh]">
                      {props.cardname}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back absolute">
              <h4 className="p-[1.5rem] text-[1.3rem] lg:text-[1.1rem] xl:text-[1.3rem] 2xl:text-[1.8rem]">
                <ul className="">
                  <li className="flex items-end  lg:items-center mb-[.5vh] leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent1}
                  </li>
                  <li className="flex items-end  lg:items-center mb-[.5vh] leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent2}
                  </li>
                  <li className="flex items-end  lg:items-center mb-[.5vh] leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent3}
                  </li>
                  <li className={props.servicehidden1}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent4}
                  </li>
                  <li className={props.servicehidden2}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent5}
                  </li>
                  <li className={props.servicehidden3}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent6}
                  </li>
                  <li className={props.servicehidden4}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[1.5em] h-[1.5em]"
                    />
                    {props.serviceContent7}
                  </li>
                </ul>
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
