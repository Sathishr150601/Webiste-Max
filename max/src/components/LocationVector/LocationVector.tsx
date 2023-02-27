import { Component } from "react";
import {
  Vectorbanglore,
  VectorChennai,
  VectorCoimbatore,
  VectorHyderbad,
  VectorMumbai,
  VectorNoida,
} from "../../assets";

export default class LocationVector extends Component {
  render() {
    return (
      <div className="Locations1 w-[90vw] mx-auto flex flex-col sm:flex-row text-black">
        <div className="flex justify-between">
          <div className="section ">
            <img
              src={VectorChennai}
              alt=""
              className="w-[24vw] lg:w-[22vw] mx-[.5vw]"
            />
            <div className="imgText text-center">
              <h4>Chennai</h4>
            </div>
          </div>
          <div className="section">
            <img
              src={Vectorbanglore}
              alt=""
              className="w-[24vw] lg:w-[22vw] mx-[.5vw]"
            />
            <div className="imgText text-center">
              <h4>Banglore</h4>
            </div>
          </div>
          <div className="section">
            <img
              src={VectorCoimbatore}
              alt=""
              className="w-[24vw] lg:w-[22vw] mx-[.5vw]"
            />
            <div className="imgText text-center">
              <h4>Coimbatore</h4>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="section">
            <img
              src={VectorHyderbad}
              alt=""
              className="w-[24vw] lg:w-[22vw] mx-[.5vw]"
            />
            <div className="imgText text-center">
              <h4>Hyderbad</h4>
            </div>
          </div>
          <div className="section">
            <img
              src={VectorNoida}
              alt=""
              className="w-[24vw] lg:w-[22vw] mx-[.5vw]"
            />
            <div className="imgText text-center">
              <h4>Noida</h4>
            </div>
          </div>
          <div className="section">
            <img
              src={VectorMumbai}
              alt=""
              className="w-[24vw] lg:w-[22vw] mx-[.5vw]"
            />
            <div className="imgText text-center">
              <h4>Mumbai</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
