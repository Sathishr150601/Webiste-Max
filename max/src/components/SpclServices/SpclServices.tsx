import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { cosmetic2, prp,saph, saphD, eyebrow, meso, olt, stem } from "../../assets";

export default function SpclServices() {
  return (
    <div className="Services mb-[8vw] px-20 w-[90vw] mx-auto text-black">
      <div className="pl-[3vw]">
        <hr />
        <div className="ServiesText">
          <h2 className="text-black text-[3vw]">
            <div className="flex flex-col">
              <div className="service flex">
                <span className="glow">Sapphire Hair Transplant</span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={saph}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 -mt-[10vw]"
                />
              </div>
              <div className="service flex pl-[3vw]">
                <span className="glow">Meso Hair Therapy</span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={meso}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 -mt-[10vw]"
                />
              </div>
            </div>
            <div className="flex">
              <div className="service flex">
                <span className="glow">Cosmetic Hair Surgery</span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={cosmetic2}
                  alt=""
                  className="s1 mx-[7vw] absolute z-10 -mt-[10vw]"
                />
              </div>
              <div className="service flex pl-[3vw]">
                <span className="glow">PRP Active plus</span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={prp}
                  alt=""
                  className="s1 mx-[3vw] absolute z-10 -mt-[10vw]"
                />
              </div>
            </div>
            <div className="flex">
              <div className="service flex">
                <span className="glow">Activated Sapphire Mirror+FUE</span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={saphD}
                  alt=""
                  className="s1 mx-[15vw] absolute z-10 -mt-[10vw] w-[]"
                />
              </div>
              <div className="service flex pl-[3vw]">
                <span className="glow">StemX27</span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={stem}
                  alt=""
                  className="s1 mx-[-5vw] absolute z-10 -mt-[10vw]"
                />
              </div>
            </div>
            <div className="flex">
              <div className="service flex">
                <span className="glow">Oxygen LASER Therapy</span>
                <FontAwesomeIcon icon={faCircle} />
                <img
                  src={olt}
                  alt=""
                  className="s1 mx-[15vw] absolute z-10 -mt-[10vw] w-[]"
                />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
}
