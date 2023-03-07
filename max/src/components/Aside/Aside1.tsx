import { Link } from "react-router-dom";
import Curtain from "../curtain/Curtain";
import { close } from "../../assets";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Aside1() {
  let navigate = useNavigate();

  let Navigate = () => {
    navigate(-1);
  };

  return (
    <section className="menu-section w-[100vw] h-[100vh] bg-[#222] overflow-hidden">
      <div className="close-btn h-[10vh] w-[100vw] flex items-end pl-[10vw]">
        <Link to="/" onClick={Navigate}>
          <img
            src={close}
            alt="close-btn"
            className="w-[8vw] md:w-[6vw] lg:w-[3vw] hover:scale-125"
          />
        </Link>
      </div>
      <div className="lg:flex justify-evenly">
        <div className="Main-Menu w-[100vw] lg:w-[40vw]">
          <ul className="flex flex-col justify-center items-center h-[90vh] text-[4em] text-center ">
            <li className="Home">Home</li>
            <li className="About">
              About
              <FontAwesomeIcon
                icon={faChevronDown}
                className=" pl-[3vw] w-[6vw] lg:pl-[1vw] lg:w-[1.5vw]"
              />
              <ul className="inner-menu text-center text-[.5em] hidden">
                <Link to="/about">
                  <li className="hover:scale-125">Our Clinic</li>
                </Link>
                <Link to="/about">
                  <li className="hover:scale-125">Our Capability</li>
                </Link>
                <Link to="/about">
                  <li className="hover:scale-125">Our Forte</li>
                </Link>
                <Link to="/about">
                  <li className="hover:scale-125">Our Milestones</li>
                </Link>
              </ul>
            </li>
            <li className="Services">
              Services
              <FontAwesomeIcon
                icon={faChevronDown}
                className=" pl-[3vw] w-[6vw] lg:pl-[1vw] lg:w-[1.5vw]"
              />
              <ul className="inner-menu text-center text-[.5em] hidden">
                <Link to="/services">
                  <li className="hover:scale-125">Surgical Treatments</li>
                </Link>
                <Link to="/services/non-surgical-treatments">
                  <li className="hover:scale-125">Non-Surgical Treatments</li>
                </Link>
                <Link to="/services/clinical-treatments">
                  <li className="hover:scale-125">Clinical Treatments</li>
                </Link>
                <Link to="/services/non-clinical-treatments">
                  <li className="hover:scale-125">Non-Clinical Treatments</li>
                </Link>
              </ul>
            </li>
            <li className="Contact">Contact</li>
            <li className="More">
              More
              <FontAwesomeIcon
                icon={faChevronDown}
                className=" pl-[3vw] w-[6vw] lg:pl-[1vw] lg:w-[1.5vw]"
              />
              <ul className="inner-menu text-center text-[.5em] hidden">
                <Link to="/transformations">
                  <li className="hover:scale-125">Image Gallery</li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
        <div className="locations lg:w-[50vw] h-[90vh] hidden lg:flex flex-col justify-center items-center">
          <h2 className="mb-[5vh]">Our Locations</h2>
          <div className="flex justify-center items-center text-[2vw] leading-[5vh] xl:leading-[7vh] 2xl:text-[1.5vw] 2xl:leading-[6vh]">
            <ul className="flex flex-col justify-between">
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Chennai</span>
                <span className="">+91 88832 88822</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Coimbatore</span>
                <span className="">+91 95516 95516</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Hyderabad</span>
                <span className="">+91 90325 10000</span>
              </li>
            </ul>
            <ul className="pl-[3vw]">
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Bangalore</span>
                <span className="">+91 95516 95516</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Noida</span>
                <span className="">+91 98192 23456</span>
              </li>
              <li className="flex flex-col mb-[3vh]">
                <span className="">MAX - Mumbai</span>
                <span className="">+91 98845 20000</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
