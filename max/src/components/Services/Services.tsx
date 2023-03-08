import { Link } from "react-router-dom";
import { hairLight } from "../../assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    if (window.innerWidth >= 1024) {
      gsap.to(".Services1", {
        scrollTrigger: {
          // markers: true,
          trigger: "#scroll-trigger",
          start: "bottom 90%",
          end: "bottom 60%",
          scrub: true,
        },
        x: -24 + "vw",
      });
    } else {
      if (window.innerWidth >= 767) {
        gsap.to(".Services1", {
          scrollTrigger: {
            // markers: true,
            trigger: "#scroll-trigger",
            start: "bottom 90%",
            end: "bottom 60%",
            scrub: true,
          },
          x: -60 + "vw",
        });
      } else {
        gsap.to(".Services1", {
          scrollTrigger: {
            // markers: true,
            trigger: "#scroll-trigger",
            start: "bottom 75%",
            end: "bottom 50%",
            scrub: true,
          },
          x: -102 + "vw",
        });
      }
    }
  }, []);

  return (
    <div className="ImgScrollContainer h-max flex mb-[14vw] overflow-hidden">
      <FlipCard
        ln="/services"
        serviceimg="front img1 w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] max-w-[50vw]"
        cardname="Surgical Treatments"
        serviceContent1="Hair Transplant"
        serviceContent2="Women Hair Transplant"
        serviceContent3="IGM Hair Transplant"
        serviceContent4="DHI Hair Transplant"
        serviceContent5="Sapphire Hair Transplant"
        serviceContent6="Eyebrow Hair Transplant"
        serviceContent7="Beard Hair Transplant"
        servicehidden1="flex sm:mb-[.5vh] lg:mb-[1vh] leading-[initial]"
        servicehidden2="flex sm:mb-[.5vh] lg:mb-[1vh] leading-[initial]"
        servicehidden3="flex sm:mb-[.5vh] lg:mb-[1vh] leading-[initial]"
        servicehidden4="flex sm:mb-[.5vh] lg:mb-[1vh] leading-[initial]"
      />
      <FlipCard
        ln="/services/non-surgical-treatments"
        serviceimg="front img2 w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] max-w-[50vw]"
        cardname="Non-Surgical Treatments"
        serviceContent1="CC PRP Active+"
        serviceContent2="Oxygen LASER Therapy"
        serviceContent3="Dr Regrowth"
        serviceContent4="Crotico - Shot"
        serviceContent5="Laser Helmet"
        serviceContent6="Meso Qr 678"
        serviceContent7="Scalp Detox"
        servicehidden1="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]"
        servicehidden2="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]"
        servicehidden3="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]"
        servicehidden4="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]"
      />
      <FlipCard
        serviceimg="front img3 w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] max-w-[50vw]"
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
        serviceimg="front img4 w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] max-w-[50vw]"
        cardname="Non-Clinical Treatments"
        serviceContent1="Tres Pro"
        serviceContent2="Celebrity's Choice"
        serviceContent3="Satin Lace"
        serviceContent4="French grip"
        serviceContent5="Dura"
        serviceContent6=""
        serviceContent7=""
        servicehidden1="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]"
        servicehidden2="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]"
        servicehidden3="flex hidden"
        servicehidden4="flex hidden"
      />
    </div>
  );
}

function FlipCard(props: any) {
  return (
    <div className="Services1 w-max mx-auto" id="scroll-trigger">
      <Link to={props.ln}>
        <div className="flip-card bg-transparent w-[51vw] md:w-[41vw] md:h-[40vw] lg:w-[31vw] lg:h-[30vw]">
          <div className="flip-card-inner relative mx-[.5vw] md:w-[41vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw]">
            <div className="flip-card-front absolute">
              <div className={props.serviceimg}>
                <div className="flex items-end  h-[50vw] md:h-[40vw] lg:h-[30vw]">
                  <div className="bg-black w-[51vw] md:w-[41vw] lg:w-[30vw] h-max flex items-center pt-[1vh]">
                    <h2 className="caption txtshadow pl-[2vw] text-[1rem] leading-[2vh] sm:text-[1.5rem] lg:text-[1.8rem] lg:leading-[4vh] 2xl:leading-[48px]">
                      {props.cardname}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flip-card-back absolute">
              <h4 className="p-[2vw] text-[8px] sm:text-[16px] lg:text-[18px] 2xl:text-[32px] sm:leading-[16px]">
                <ul className="">
                  <li className="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
                    />
                    {props.serviceContent1}
                  </li>
                  <li className="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]">
                    <img
                      src={hairLight}
                      alt=""
                      className="w-[2vw] h-[2vw] mt-[1.5vw] sm:mt-[.5vw] lg:mt-0 2xl:-mt-[.5vw] mr-[.5vw]"
                    />
                    {props.serviceContent2}
                  </li>
                  <li className="flex sm:mb-[.5vh] lg:mb-[1vh]  leading-[initial]">
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
