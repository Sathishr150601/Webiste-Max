import { Link } from "react-router-dom";
import { arrowDark, maxlogo1, since1 } from "../../assets";

export default function Hero02(props: any) {
  return (
    <section className="Hero02 overflow-clip text-black w-[100vw] h-[100vh]">
      <div className="top w-[90vw] mx-auto h-[80vh] pt-[25vh] pb-[5vh] sm:pt-[16vh] sm:flex sm:justify-around md:h-[90vh] ">
        <div className="top-left pl-[8vw] flex flex-col justify-center sm:pl-0">
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
            <h2 className="text-[20vw] leading-[12vh] sm:text-[12vw] md:text-[10vw] md:leading-[12vh] 2xl:text-[8vw]">
              <span className="">{props.title1}</span>
              <span className="">{props.title2}</span>
            </h2>
          </div>
        </div>
        <div className="top-right hidden sm:flex sm:flex-col sm:justify-center sm:items-center">
          <img
            src={since1}
            alt=""
            className="w-[15vw] sm:w-[18vw] sm:my-[3vh] md:-my-[1vh] lg:w-[15vw]"
          />
          <img
            src={maxlogo1}
            alt=""
            className="w-[30vw] sm:[35vw] sm:-my-[3vh] md:-my-[5vh] lg:w-[25vw] 2xl:w-[22vw]"
          />
        </div>
      </div>
      <div className="bottom h-[20vh] text-[.8rem] xl:text-[1rem] 2xl:text-[1.2rem] md:h-[10vh]">
        <div className="inner flex flex-wrap justify-evenly flex-col md:flex-row">
          <div className="flex-[100%] flex justify-evenly mb-[10vh] md:flex-[50%]">
            <div className="">
              <Link to="" onClick={props.click1} className="space-btn">
                {props.menu1}
              </Link>
            </div>
            <div className="">
              <Link to="" onClick={props.click2} className="space-btn">
                {props.menu2}
              </Link>
            </div>
          </div>
          <div className="flex-[100%] flex justify-evenly md:flex-[50%]">
            <div className="">
              <Link to="" onClick={props.click3} className="space-btn">
                {props.menu3}
              </Link>
            </div>
            <div className="">
              <Link to="" onClick={props.click4} className="space-btn">
                {props.menu4}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
