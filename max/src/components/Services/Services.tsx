import { Link } from "react-router-dom";
import { hairLight } from "../../assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    gsap.to(".Services1", {
      scrollTrigger: {
        // markers: true,
        trigger: "#scroll-trigger",
        start: "bottom 75%",
        end: "bottom center",
        scrub: true,
      },
      x: -24 + "vw",
    });
  }, []);

  return (
    <div className="ImgScrollContainer h-[13vh] sm:h-[23vh] lg:h-[32vh] 2xl:h-[38vh] w-[124vw] flex mb-[14vw]">
      <FlipCard
        serviceimg="front img1 w-[30vw] h-[30vw] max-w-[600px]"
        cardname="Surgical Treatments"
        serviceContent1="Hair Transplant"
        serviceContent2="Women Hair Transplant"
        serviceContent3="IGM Hair Transplant"
        serviceContent4="DHI Hair Transplant"
        serviceContent5="Sapphire Hair Transplant"
        serviceContent6="Eyebrow Hair Transplant"
        serviceContent7="Beard Hair Transplant"
        servicehidden1="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden2="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden3="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden4="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
      />
      <FlipCard
        serviceimg="front img2 w-[30vw] h-[30vw] max-w-[600px]"
        cardname="Non-Surgical Treatments"
        serviceContent1="CC PRP Active+"
        serviceContent2="Oxygen LASER Therapy"
        serviceContent3="Dr Regrowth"
        serviceContent4="Crotico - Shot"
        serviceContent5="Laser Helmet"
        serviceContent6="Meso Qr 678"
        serviceContent7="Scalp Detox"
        servicehidden1="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden2="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden3="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden4="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
      />
      <FlipCard
        serviceimg="front img3 w-[30vw] h-[30vw] max-w-[600px]"
        cardname="Clinical Treatments"
        serviceContent1="Scalp Micropigmentation"
        serviceContent2="Eyelash Extension"
        serviceContent3="Eyebrow Micoblading"
        serviceContent4=""
        serviceContent5=""
        serviceContent6=""
        serviceContent7=""
        servicehidden1="flex hidden"
        servicehidden2="flex hidden"
        servicehidden3="flex hidden"
        servicehidden4="flex hidden"
      />
      <FlipCard
        serviceimg="front img4 w-[30vw] h-[30vw] max-w-[600px]"
        cardname="Non-Clinical Treatments"
        serviceContent1="Tres Pro"
        serviceContent2="Celebrity's Choice"
        serviceContent3="Satin Lace"
        serviceContent4="French grip"
        serviceContent5="Dura"
        serviceContent6=""
        serviceContent7=""
        servicehidden1="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden2="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]"
        servicehidden3="flex hidden"
        servicehidden4="flex hidden"
      />
    </div>
  );
}

function FlipCard(props: any) {
  return (
    <div className="Services1 w-[90vw] mx-auto" id="scroll-trigger">
      <Link to="/services">
        <div className="flip-card bg-transparent w-[31vw]">
          <div className="flip-card-inner relative mx-[.5vw]">
            <div className="flip-card-front absolute">
              <div className={props.serviceimg}>
                <h2 className="caption txtshadow pt-[9.5vh] sm:pt-[18vh] lg:pt-[35vh] 2xl:pt-[45vh] pl-[1vw] text-[13px] sm:text-[18px] lg:text-[3vw] leading-5 lg:leading-[36px] 2xl:leading-[48px]">
                  {props.cardname}
                </h2>
              </div>
            </div>
            <div className="flip-card-back absolute">
              <h4 className="p-[2vw] text-[8px] sm:text-[16px] lg:text-[20px] 2xl:text-[32px] sm:leading-[16px]">
                <ul className="">
                  <li className="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
                    />
                    {props.serviceContent1}
                  </li>
                  <li className="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
                    />
                    {props.serviceContent2}
                  </li>
                  <li className="flex sm:leading-[2vh] sm:mb-[.5vh] lg:mb-[1vh]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
                    />
                    {props.serviceContent3}
                  </li>
                  <li className={props.servicehidden1}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
                    />
                    {props.serviceContent4}
                  </li>
                  <li className={props.servicehidden2}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw]  mr-[.5vw]"
                    />
                    {props.serviceContent5}
                  </li>
                  <li className={props.servicehidden3}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
                    />
                    {props.serviceContent6}
                  </li>
                  <li className={props.servicehidden4}>
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
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
