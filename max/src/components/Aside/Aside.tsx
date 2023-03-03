import { Link } from "react-router-dom";
import Curtain from "../curtain/Curtain";
import { close } from "../../assets";
import { useNavigate } from "react-router-dom";

function Aside() {
  let navigate = useNavigate();

  let Navigate = () => {
    navigate(-1);
  };

  return (
    <div className="Aside bg-[#222] h-[100vh]">
      <div className="bgoverlay"></div>
      <div className="hidden sm:block">
        <Curtain number={8} />
      </div>
      <div className="exitBtn pt-[4vw] pl-[4vw] relative fade">
        <Link to="/" onClick={Navigate}>
          <img
            src={close}
            alt=""
            className="w-[3%] sm:w-[4%] 2xl:w-[2%] hover:scale-125"
          />
        </Link>
      </div>
      <div className="w-[90vw] mx-auto px-[8vw] lg:px-[4vw] xl:px-[8vw] pt-[3vh] sm:pt-[8vh] flex flex-col lg:flex-row relative fade">
        <div className="leftSection w-[40vw] mx-auto -ml-[50px] sm:flex sm:justify-center">
          <div className="menu">
            <h2 className="">
              <div className="menu-item">
                <Link to="/"> Home</Link>
              </div>
              <div className="menu-item">
                <Link to="/about"> About</Link>
                <div className="Show pl-[1vw]">
                  <p className="text-xl xl:text-2xl 2xl:text-3xl text-white mb-1">
                    <span className="py-[1vw] hover:scale-125">
                      <Link to="/about">Our Clinic</Link>
                    </span>
                    <span className="pb-[1vw] hover:scale-125">
                      <Link to="/about/our-capability">Our Capability</Link>
                    </span>
                    <span className="pb-[1vw] hover:scale-125">
                      <Link to="/about/our-forte">Our Forte</Link>
                    </span>
                    <span className="hover:scale-125">
                      <Link to="/about/our-milestones">Our Milestones</Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menu-item services">
                <Link to="/services">Services</Link>
                <div className="Show pl-[1vw]">
                  <p className="text-xl xl:text-2xl 2xl:text-3xl text-white mb-1">
                    <span className="py-[1vw] hover:scale-125">
                      <Link to="/services">Surgical Treatments</Link>
                    </span>
                    <span className="pb-[1vw] hover:scale-125">
                      <Link to="/services/non-surgical-treatments">
                        Non-Surgical Treatments
                      </Link>
                    </span>
                    <span className="pb-[1vw] hover:scale-125">
                      <Link to="/services/clinical-treatments">
                        Clinical Treatments
                      </Link>
                    </span>
                    <span className="hover:scale-125">
                      <Link to="/services/non-clinical-treatments">
                        Non-Clinical Treatments
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="menu-item">
                <Link to="/contact-us"> Contact</Link>
              </div>
              <div className="menu-item more">
                <Link to=""> More</Link>
                <div className="Show pl-[1vw]">
                  <p className="text-xl xl:text-2xl 2xl:text-3xl text-white mb-1">
                    <span className="py-[1vw] hover:scale-125">
                      <Link to="/transformations">Image Gallery</Link>
                    </span>
                  </p>
                </div>
              </div>
            </h2>
          </div>
        </div>
        <div className="rightSection w-[50vw] mx-auto flex justify-center pt-[5vh] sm:pt-[8vh]">
          <div className="">
            <div className="head">
              <h3 className="playfair pb-[2vw]">Our Locations</h3>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col pr-[4vw]">
                <div className="Location pb-[4vw]">
                  <div className="heading playfair text-xl lg:text-2xl pb-[1vw]">
                    MAX - Chennai
                  </div>
                  <div className="address text-xl lg:text-2xl pb-[.5vw] hidden">
                    10, 21, Nageswara Rd, behind Taj Coromandel Hotel,
                    Tirumurthy Nagar, Nungambakkam, Chennai, Tamil Nadu 600034
                  </div>
                  <div className="phone text-xl lg:text-2xl">
                    +91 88832 88822
                  </div>
                </div>
                <div className="Location">
                  <div className="heading playfair text-xl lg:text-2xl pb-[1vw]">
                    MAX - Coimbatore
                  </div>
                  <div className="address  text-xl lg:text-2xl pb-[.5vw] hidden">
                    3rd Floor, No.90/1C TKR Tower, Race Course Rd, Coimbatore,
                    Tamil Nadu 641018
                  </div>
                  <div className="phone text-xl lg:text-2xl">
                    +91 83905 56789
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="Location pb-[4vw]">
                  <div className="heading playfair text-xl lg:text-2xl pb-[1vw]">
                    MAX - Banglore
                  </div>
                  <div className="address text-xl lg:text-2xl pb-[.5vw] hidden">
                    3R Plaza 28, 2nd Floor, 100 Feet Road, 2A Stage, Hal,
                    Indiranagar, Bengaluru, Karnataka 560038
                  </div>
                  <div className="phone text-xl lg:text-2xl">
                    +91 95516 95516
                  </div>
                </div>
                <div className="Location">
                  <div className="heading playfair text-xl lg:text-2xl pb-[1vw]">
                    MAX - Hyderbad
                  </div>
                  <div className="address text-xl lg:text-2xl pb-[.5vw] hidden">
                    Police Station, 1130/A, Rd Number 36, opposite Jubliee
                    Hills, Jubilee Hills, Hyderabad, Telangana 500034
                  </div>
                  <div className="phone text-xl lg:text-2xl">
                    +91 90325 10000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
