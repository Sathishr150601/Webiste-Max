import { Component } from "react";
import { experienceicon, medalicon, surgeryicon, since3 } from "../../assets";

export default class Counter extends Component {
  render() {
    return (
      <div className="text-white my-[8vh]">
        <div className="CounterSection py-[3vh] px-[5vw]">
          <div className="flex flex-col flex-wrap justify-evenly items-center text-center sm:flex-row">
            <div className="flex justify-evenly items-center mb-[3vh]">
              <div className="w-[40vw] sm:w-[22vw]">
                <img
                  src={since3}
                  alt=""
                  className="w-[24vw] -my-[1.5vh] mx-auto sm:w-[16vw] sm:-my-[2vh] md:w-[12vw]"
                />
                <p className="leading-[3vh] mb-0">
                  Years of <br /> Entensive <br /> Experience
                </p>
              </div>
              <div className="w-[40vw] sm:w-[22vw] ">
                <img
                  src={surgeryicon}
                  alt=""
                  className="w-[15vw] mx-auto sm:w-[12vw] md:w-[8vw]"
                />
                <p className="leading-[3vh] mb-0">
                  30,000+ <br /> Successful <br /> Surgeries
                </p>
              </div>
            </div>
            <div className="flex justify-evenly items-center ">
              <div className="w-[40vw] sm:w-[22vw]">
                <img
                  src={medalicon}
                  alt=""
                  className="w-[15vw] mx-auto sm:w-[12vw] md:w-[8vw]"
                />
                <p className="leading-[3vh] mb-0">
                  Award <br /> Winning Clinic <br /> in Trichology
                </p>
              </div>
              <div className="w-[40vw] sm:w-[22vw]">
                <img
                  src={experienceicon}
                  alt=""
                  className="w-[15vw] mx-auto sm:w-[12vw] md:w-[8vw]"
                />
                <p className="leading-[3vh] mb-0">
                  50,000+ <br /> Satisfied <br /> Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
