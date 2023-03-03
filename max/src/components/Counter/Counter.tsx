import { Component } from "react";
import { experienceicon, medalicon, surgeryicon, since2 } from "../../assets";

export default class Counter extends Component {
  render() {
    return (
      <div className="text-white shadow-slate-50 my-[8vw]">
        <div className="CounterSection absolute h-[20vh] lg:h-[35vh]"></div>
        <div className="w-[80vw] h-[20vh] lg:h-[35vh] m-auto flex justify-around relative">
          <div className="counterContainer flex flex-col justify-center items-center">
            <img
              src={since2}
              alt=""
              className="w-[20vw] sm:w-[12vw] lg:w-[5.5vw]"
            />
            <span className="text-[11px] sm:text-[16px] lg:text-[20px] text-center">
              Years of <br /> Experience
            </span>
          </div>

          <div className="counterContainer flex flex-col justify-center items-center">
            <img
              src={surgeryicon}
              alt=""
              className="w-[16vw] sm:w-[10vw] lg:w-[5.5vw]"
            />
            <span className="text-[11px] sm:text-[16px] lg:text-[20px] text-center">
              30,000+ <br /> Successful <br /> Surgeries
            </span>
          </div>

          <div className="counterContainer flex flex-col justify-center items-center text-[3.5vw]">
            <img
              src={experienceicon}
              alt=""
              className="w-[16vw] sm:w-[10vw] lg:w-[5.5vw]"
            />
            <span className="text-[11px] sm:text-[16px] lg:text-[20px] text-center">
              50,000+ <br /> Satisfied <br /> Clients
            </span>
          </div>

          <div className="counterContainer flex flex-col justify-center items-center text-[4vw]">
            <img
              src={medalicon}
              alt=""
              className="w-[16vw] sm:w-[10vw] lg:w-[5.5vw]"
            />
            <span className="text-[11px] sm:text-[16px] lg:text-[20px] text-center">
              Award Winning <br /> Clinic in <br /> Trichology
            </span>
          </div>
        </div>
      </div>
    );
  }
}
