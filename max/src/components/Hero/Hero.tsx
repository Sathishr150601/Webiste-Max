import { Link } from "react-router-dom";
import { maxlogo2, since } from "../../assets";
import Button2 from "../Button/Button2";

export default function Hero(props: any) {
  return (
    <div className="Hero  overflow-hidden text-white lg:mb-[3vw]">
      <div className="heroContent  w-[90vw] mx-auto mt-[20vh] sm:mt-[14vh] lg:mt-[24vh] lg:pl-[5vw]">
        <div className="heroTitle h-[30vh] lg:h-[75vh] flex justify-between mb-[3vh]">
          <div className="w-[40vw] flex flex-col justify-evenly lg:justify-center ml-8 sm:ml-20">
            <h2 className="text-white text-[60px] sm:text-[10vw] sm:leaing-[13vh] lg:mb-[7vw]">
              {props.herotitle1}
            </h2>
            <h2 className="text-white text-[60px] sm:text-[10vw] sm:leaing-[13vh] lg:mb-[7vw]">
              {props.herotitle2}
            </h2>
            <h2 className="text-white text-[60px] sm:text-[10vw] sm:leaing-[13vh] lg:mb-[7vw]">
              {props.herotitle3}
            </h2>
          </div>
          <div className="hidden sm:w-[40vw] sm:flex flex-col items-center justify-center lg:mt-[3vw]">
            <img src={since} alt="" className="w-[40%] lg:w-[25%] " />
            <img
              src={maxlogo2}
              alt=""
              className="w-[60%] lg:-mt-[8vh] lg:w-[80%]"
            />
          </div>
        </div>
        <div className="heroCaption w-[80vw] sm:w-[50vw] 2xl:w-[40vw] mx-auto lg:mr-0 2xl:mr-[10%] h-[45vh] sm:h-[46vh] lg:h-[48vh] float-none sm:float-right ">
          <p className="text-[13px] sm:text-[18px] lg:text-2xl 2xl:text-[1.4vw] lg:leading-[52px] text-justify lg:text-left">
            {props.herocaption1}
            <br />
            <br className="hidden sm:block" />
            {props.herocaption2}
          </p>
          <Link to="/about" className="read-more flex w-max">
            <Button2 button2text="Read More" />
          </Link>
        </div>
      </div>
      <div className="heroBgImg w-[100vw] h-[100vh] sm:h-[90vh] lg:h-[280vh] 2xl:h-[260vh] top-0 lg:-top-[1000px]"></div>
    </div>
  );
}
