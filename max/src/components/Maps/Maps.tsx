import { useEffect, useState } from "react";
import Iframe from "react-iframe";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { Element } from "react-scroll";

export default function Maps() {
  const [ShowMap1, setIsShown1] = useState(true);
  const [ShowMap2, setIsShown2] = useState(false);
  const [ShowMap3, setIsShown3] = useState(false);
  const [ShowMap4, setIsShown4] = useState(false);

  const handleClick1 = () => {
    setIsShown1(true);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
  };

  const handleClick2 = () => {
    setIsShown1(false);
    setIsShown2(true);
    setIsShown3(false);
    setIsShown4(false);
  };

  const handleClick3 = () => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(true);
    setIsShown4(false);
  };

  const handleClick4 = () => {
    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(true);
  };

  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  return (
    <Element name="map">
      <div className="MapsSection w-[90vw] h-[max] overflow-hidden mx-auto py-[8vw] flex text-black flex-col sm:flex-row">
        <h2 className="my-[5vh]">Let's Meet</h2>
        <div className="textContainer w-[90vw] sm:w-[40vw]">
          <h4 className="pl-[2vw]">Locations(6)</h4>
          <div className="h-[450px] overflow-y-scroll" onLoad={ScrollToTop}>
            <div className="Location1 w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] mb-[2vh]">
              <h5 className="leading-[32px]">Max Hair Clinic - Chennai</h5>
              <p className="text-[13px] leading-[20px] mb-0">
                10, 21, Nageswara Rd, behind Taj Coromandel Hotel, Tirumurthy
                Nagar, Nungambakkam, Chennai, Tamil Nadu 600034
              </p>
              <Link to="" onClick={handleClick1}>
                <div className="flex items-center w-max hover:underline hover:cursor-pointer">
                  <p className="text-[13px] text-[#5491f5] mb-0">
                    Get Directions
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-[5px] -rotate-45 text-[#5491f5]"
                  />
                </div>
              </Link>
            </div>
            <div className="Location2 w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] my-[2vh]">
              <h5 className="leading-[32px]">Max Hair Clinic - Bangalore</h5>
              <p className="text-[13px] leading-[20px] mb-0">
                3R Plaza 28, 2nd Floor, 100 Feet Road, 2A Stage, Hal,
                Indiranagar, Bengaluru, Karnataka 560038
              </p>
              <Link to="" onClick={handleClick2}>
                <div className="flex items-center hover:underline hover:">
                  <p className="text-[13px] text-[#5491f5] mb-0">
                    Get Directions
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-[5px] -rotate-45 text-[#5491f5]"
                  />
                </div>
              </Link>
            </div>
            <div className="Location3 w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] my-[2vh]">
              <h5 className="leading-[32px]">Max Hair Clinic - Coimbatore</h5>
              <p className="text-[13px] leading-[20px] mb-0">
                3rd Floor, No.90/1C TKR Tower, Race Course Rd, Coimbatore, Tamil
                Nadu 641018
              </p>
              <Link to="" onClick={handleClick3}>
                <div className="flex items-center hover:underline hover:">
                  <p className="text-[13px] text-[#5491f5] mb-0">
                    Get Directions
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-[5px] -rotate-45 text-[#5491f5]"
                  />
                </div>
              </Link>
            </div>
            <div className="Location w-[90vw] sm:w-[38vw] mx-auto p-[2vw] bg-[#F7F7F7] rounded-[20px] my-[2vh]">
              <h5 className="leading-[32px]">Max Hair Clinic - Hyderabad</h5>
              <p className="text-[13px] leading-[20px] mb-0">
                Police Station, 1130/A, Rd Number 36, opposite Jubliee Hills,
                Jubilee Hills, Hyderabad, Telangana 500034
              </p>
              <Link to="" onClick={handleClick4}>
                <div className="flex items-center hover:underline hover:">
                  <p className="text-[13px] text-[#5491f5] mb-0">
                    Get Directions
                  </p>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-[5px] -rotate-45 text-[#5491f5]"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mapsContainer w-[90vw] mx-auto sm:w-max ">
          {ShowMap1 && <Map1 />}
          {ShowMap2 && <Map2 />}
          {ShowMap3 && <Map3 />}
          {ShowMap4 && <Map4 />}
        </div>
      </div>
    </Element>
  );
}

function Map1() {
  return (
    <div className="location1 ">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.646293601603!2d80.2435051153436!3d13.05817191650464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664281626b21%3A0x7ba51b84f54c63c3!2sMax%20Hair%20Clinic%20Chennai%20-%20Best%20Hair%20Fall%20Treatment%20Clinic%20in%20Chennai!5e0!3m2!1sen!2sin!4v1677733134724!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="auto"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function Map2() {
  return (
    <div className="location1">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1377948840304!2d77.63967591534308!3d12.96303321857237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bcac424faf%3A0xbeab6998a29ccb44!2sMax%20Hair%20Clinic%20Bangalore%20-%20Best%20Hair%20Fall%20Treatment%20Clinic%20in%20Bangalore!5e0!3m2!1sen!2sin!4v1677738470672!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function Map3() {
  return (
    <div className="location1">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5022855547227!2d76.97080901533496!3d11.00089065801721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a71eac1ba9%3A0xd9dce8d7a376204b!2sMax%20Hair%20Clinic%20Coimbatore%20-%20Best%20Hair%20Fall%20Treatment%20Clinic%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1677738584571!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function Map4() {
  return (
    <div className="location1 fade-appear fade-leave">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.617093056403!2d78.4065639153708!3d17.43015410615685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91486b672467%3A0x89c58da0c02ec56d!2sMax%20Hair%20Clinic%20-%20Hyderabad!5e0!3m2!1sen!2sin!4v1677737779388!5m2!1sen!2sin"
        className="h-[500px] w-[90vw] sm:w-[50vw]"
        scrolling="no"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
