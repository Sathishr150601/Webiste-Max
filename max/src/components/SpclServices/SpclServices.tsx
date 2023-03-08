import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { cosmetic2, prp, sht, saphD, meso, olt, stem } from "../../assets";
import { Link } from "react-router-dom";

export default function SpclServices() {
  return (
    <div className="Services mb-[8vh] sm:mb-[8vw] px-16 w-[90vw] mx-auto text-black">
      <hr className="hidden" />
      <div className="sm:pl-[5vw] ">
        <div className="ServiesText">
          <h2 className="text-black text-[4vw] lg:text-[3vw]">
            <div className="flex flex-col lg:flex-row">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="/services/surgical-treatments/sapphire-hair-transplant">
                    Sapphire Hair Transplant
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={sht}
                  alt=""
                  className="s1 mx-[4vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
              <div className="service w-max flex items-center lg:pl-[3vw]">
                <span className="glow">
                  <Link to="/services/non-surgical-treatments/meso-qr-678">
                    Meso Hair Therapy
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={meso}
                  alt=""
                  className="s1 mx-[4vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="/services/non-clinical-treatments/celebrity's-choice">
                    Cosmetic Hair Surgery
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={cosmetic2}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
              <div className="service w-max flex items-center lg:pl-[3vw]">
                <span className="glow">
                  <Link to="/services/non-surgical-treatments/cc-prp-active+">
                    CC PRP Active plus
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={prp}
                  alt=""
                  className="s1 mx-[3vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="/services/surgical-treatments/sapphire-hair-transplant">
                    Activated Sapphire Mirror+FUE
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={saphD}
                  alt=""
                  className="s1 mx-[15vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
              <div className="service w-max flex items-center lg:pl-[3vw]">
                <span className="glow">
                  <Link to="/services/non-surgical-treatments/meso-qr-678">
                    StemX27
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={stem}
                  alt=""
                  className="s1 mx-[-5vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[25vw]"
                />
              </div>
            </div>
            <div className="flex">
              <div className="service w-max flex items-center ">
                <span className="glow">
                  <Link to="/services/non-surgical-treatments/oxygen-laser-therapy">
                    Oxygen LASER Therapy
                  </Link>
                </span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={olt}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 mt-[15px] w-[30vw] lg:w-[23vw]"
                />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
