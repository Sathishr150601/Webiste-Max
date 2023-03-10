import { Link } from "react-router-dom";
import { arrowDark, maxlogo1, maxlogo2, since1 } from "../../assets";

export default function Hero2(props: any) {
  return (
    <section className="Hero02 overflow-clip text-black w-[100vw] ">
      <div className="top w-[90vw] mx-auto h-[70vh] pt-[25vh] pb-[5vh] sm:pt-[16vh] sm:flex sm:justify-around md:h-[90vh] ">
        <div className="top-left pl-[3vw] flex flex-col justify-center sm:pl-0">
          <div className="arrow-icon">
            <img
              src={arrowDark}
              alt=""
              className="w-[8vw] sm:w-[6vw] lg:w-[3vw]"
            />
          </div>
          <div className="hero2caption pt-[5vh] sm:pt-[8vh]">
            <h3 className="uppercase text-[3rem] sm:text-[3rem]">
              {props.caption}
            </h3>
          </div>
          <div className="hero2title pt-[5vh] sm:pt-[8vh]">
            <h2 className="text-[20vw] leading-[12vh] sm:text-[12vw] md:text-[10vw] md:leading-[16vh] 2xl:text-[8vw]">
              <span className="">{props.title1}</span>
              <span className="">{props.title2}</span>
            </h2>
          </div>
        </div>
        <div className="top-right hidden sm:flex sm:flex-col sm:justify-center sm:items-center">
          <img
            src={since1}
            alt="since logo"
            className="w-[15vw] sm:w-[18vw] sm:my-[3vh] md:-my-[1vh] lg:w-[15vw]"
          />
          <img
            src={maxlogo1}
            alt="logo1"
            className="w-[30vw] sm:[35vw] sm:-my-[3vh] md:-my-[5vh] lg:w-[25vw] 2xl:w-[22vw]"
          />
        </div>
      </div>
    </section>
  );
}
