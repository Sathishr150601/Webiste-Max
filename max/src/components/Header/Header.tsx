import { Component, useEffect, useState } from "react";
import Button1 from "../Button/Button1";
import { maxlogo1, maxlogo2, since } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";

export default class Header extends Component {
  render() {
    return (
      <div className="HeaderWrapper relative z-[50]">
        <div className="Header block fixed shadow-none inset-x-0 transition-[background-color] duration-[0.3s] animate-[stickySlideDown_0.65s_cubic-bezier(0.23,1,0.32,1)_both]">
          <div className="flex justify-between mt-[4%] sm:mt-[2%] mx-[5%] sm:mx-[2%]">
            <HeaderLeft />
            <HeaderCenter />
            <HeaderRight />
          </div>
        </div>
      </div>
    );
  }
}

function HeaderLeft() {
  return (
    <div className="HeaderLeft flex justify-start items-start mt-[25px] sm:mt-0">
      <Button1
        btnName="Menu"
        btnLocation="/menu"
        spanClass1="bar"
        spanClass2="bar bar2"
        spanClass3="bar bar3"
      />
    </div>
  );
}

function HeaderCenter() {
  return (
    <div className="HeaderCenter flex flex-col sm:hidden">
      <div className="-mt-[10px] hidden">
        <img src={since} alt="" className="w-[28vw]" />
      </div>
      <img src={maxlogo1} alt="" className="w-[28vw]" />
    </div>
  );
}

function HeaderRight() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHeight, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let isHeight = 0;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll > isHeight || window.screenY > isHeight) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <div className="HeaderRight hidden justify-end items-center sm:flex">
      {isVisible && (
        <div
          className="call-btnWrapper mr-8 flex text-[#999999] "
          id="hide-element"
        >
          <div className="icon relative w-[4em] mt-[1em]">
            <FontAwesomeIcon icon={faPhone} className="h-[3em] absolute" />
          </div>
          <div className="number-content">
            <p className="mb-0">Call Us</p>
            <p className="-mt-2 mb-0 font-bold">1800 202 6112</p>
          </div>
        </div>
      )}
      <div className="contactBtn">
        <Button1 btnName="Contact Us" btnLocation="/contact-us" />
      </div>
      <div className="dotBtn ml-4 flex flex-row items-center">
        <Button1
          btnLocation="/"
          spanClass1="dot dot1"
          spanClass2="dot"
          spanClass3="dot"
        />
      </div>
    </div>
  );
}
