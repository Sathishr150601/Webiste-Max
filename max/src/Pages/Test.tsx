import { Link } from "react-router-dom";
import { Header } from "../components";
import { arrowDark, maxlogo1, since1 } from "../assets";

export default function Test() {
  return (
    <div className="">
      <Header />
      <Hero02 />
    </div>
  );
}

function Hero02() {
  return (
    <section className="Hero02 overflow-clip text-black w-[100vw] h-[100vh]">
      <div className="top w-[90vw] mx-auto h-[80vh] pt-[25vh] pb-[5vh] sm:pt-[16vh] sm:flex sm:justify-around lg:h-[90vh] ">
        <div className="top-left pl-[8vw] flex flex-col justify-center sm:pl-0">
          <div className="arrow-icon">
            <img
              src={arrowDark}
              alt=""
              className="w-[8vw] sm:w-[6vw] lg:w-[3vw]"
            />
          </div>
          <div className="hero2caption pt-[5vh] sm:pt-[8vh]">
            <h3 className="uppercase text-[3rem] sm:text-[3rem]">Max</h3>
          </div>
          <div className="hero2title pt-[5vh] sm:pt-[8vh]">
            <h2 className="text-[20vw] leading-[12vh] sm:text-[12vw] md:text-[10vw] md:leading-[16vh] 2xl:text-[8vw]">
              <span className="">About</span>
              <span className="">Us</span>
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
      <div className="bottom h-[20vh] text-[.8rem] xl:text-[1rem] 2xl:text-[1.2rem] lg:h-[10vh]">
        <div className="inner flex flex-wrap justify-evenly flex-col lg:flex-row">
          <div className="flex-[100%] flex justify-evenly mb-[10vh] lg:flex-[50%]">
            <div className="">
              <Link to="" className="space-btn">
                Our Clinic
              </Link>
            </div>
            <div className="">
              <Link to="" className="space-btn">
                Our Capability
              </Link>
            </div>
          </div>
          <div className="flex-[100%] flex justify-evenly lg:flex-[50%]">
            <div className="">
              <Link to="" className="space-btn">
                Our Forte
              </Link>
            </div>
            <div className="">
              <Link to="" className="space-btn">
                Our Milestones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
