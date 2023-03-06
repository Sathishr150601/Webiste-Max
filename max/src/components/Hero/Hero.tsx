import React, { Component } from "react";
import { Link } from "react-router-dom";
import { maxlogo2, since } from "../../assets";
import Button2 from "../Button/Button2";

export default class Hero extends Component {
  render() {
    return (
      <section className="Hero3 w-[100vw] overflow-hidden h-[100vh] lg:h-[180vh]">
        <div className="heroBgImg lg:-top-[1000px]">
          <div className="part1 w-[90vw] mx-auto h-[50vh] pt-[18vh] sm:flex sm:justify-evenly lg:h-[100vh] lg:pt-[22vh] lg:items-center 2xl:pt-[30vh]">
            <div className="left pl-[5vw] sm:pl-0">
              <h2 className="text-[18vw] leading-[9vh] sm:text-[12vw] sm:leading-[6vh] md:text-[10vw] md:leading-[5vh] lg:text-[12vw] lg:leading-[11vh] 2xl:text-[9vw] 2xl:leading-[8vh] ">
                <span className="mb-[7vw]">Hair</span>
                <span className="mb-[7vw]">Defines</span>
                <span className="mb-[7vw]">You</span>
              </h2>
            </div>
            <div className="right hidden sm:flex sm:flex-col sm:justify-center sm:items-center">
              <img
                src={since}
                alt=""
                className="w-[15vw] -my-[2vh] lg:w-[18vw] lg:-mt-[-3vh] 2xl:w-[16vw] 2xl:-my-[3vh]"
              />
              <img
                src={maxlogo2}
                alt=""
                className="w-[35vw] -my-[3vh] lg:w-[40vw] lg:-my-[5vh] 2xl:w-[35vw] 2xl:-my-[4vh]"
              />
            </div>
          </div>
          <div className="part2 w-[90vw] mx-auto h-[50vh] sm:w-[60vw] sm:mr-[10vw] sm:float-right lg:w-[50vw] lg:h-[80vh] 2xl:w-[40vw] 2xl:mr-[10vw]">
            <p className="text-justify pt-[5vh] text-[3.5vw] leading-[4.5vh] sm:text-[2.5vw] sm:leading-[3.5vh] md:text-[2.2vw] md:leading-[3.2vh] md:pt-[10vh] lg:text-[1.8vw] lg:leading-[6.8vh] xl:text-[1.6vw] 2xl:text-[1.3vw] ">
              MAX delivers Elite Hair Restoration services and takes Pride in
              having a Solid Reputation since 2004.
              <br />
              <br className="" />
              <span className="">
                Pioneers to the Sapphire Hair Transplant wonder. We don’t brag,
                but our results do. Explore our website to witness the marvels
                that we have taken the world through our Hair Restoration
                Treatments.
              </span>
            </p>
            <Link to="/about" className="read-more flex w-max">
              <Button2 button2text="Read More" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
