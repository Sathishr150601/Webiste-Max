import {arrowDark, maxlogo1, maxlogo2, since1} from "../../assets"

export default function Hero2(props: {
  hero2class: string;
  hero2Caption: string;
  hero2Title1: string;
  hero2Title2: string;
}) {
  return (
    <div className="Hero2 w-[90vw] h-[80vh] mx-auto flex justify-evenly text-black overflow-hidden">
      <div className={props.hero2class}>
        <div className="arrIcon mb-[2vw]">
          <img src={arrowDark} alt="" className="w-[3vw]" />
        </div>
        <div className="hero2subtitle mb-[2vw]">
          <h5 className="">
            <span>{props.hero2Caption}</span>
          </h5>
        </div>
        <div className="hero2title mb-[2vw]">
          <h2 className="text-[10vw] xl:text-[8vw] leading-[13vw] xl:leading-[11vw]  font-medium relative inline-block align-top w-max overflow-hidden mt-0 p-0">
            <span>{props.hero2Title1}</span>
            <span>{props.hero2Title2}</span>
          </h2>
        </div>
      </div>
      <div className="logoSection w-[40vw] flex flex-col justify-center items-center pt-[20vh] xl:pt-[15vh] 2xl:pt-[10vh] ">
        <img src={since1} alt="" className="w-[15vw]" />
        <img src={maxlogo1} alt="" className="w-[30vw] xl:w-[25vw] 2xl:w-[23vw] -mt-[10vh]" />
      </div>
    </div>
  );
}