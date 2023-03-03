import { Col, Row } from "antd";
import GalImg2 from "../../assets/photos/locations/BABU0185.jpg";
import GalImg4 from "../../assets/photos/locations/BABU0195.jpg";
import GalImg3 from "../../assets/photos/locations/BABU0217.jpg";
import GalImg1 from "../../assets/photos/locations/BABU0237.jpg";
import Vector1 from "../../assets/photos/vectors/c.png";
import Vector2 from "../../assets/photos/vectors/co.png";
import Vector3 from "../../assets/photos/vectors/b.png";
import Vector4 from "../../assets/photos/vectors/hy.png";

export default function Locations() {
  return (
    <div className="ImageGallery bg-white text-black overflow-hidden">
      <div className="w-[90vw] mt-[5vw] mx-auto mb-[8vw] p-20">
        <div className="ImageHeading pl-[3vw] flex flex-row">
          <Row>
            <Col span={12}>
              <div className="headingLeft w-max">
                {/* <p className="headingCap text-[1.5vw] ml-5 mb-0">Max</p> */}
                <h3 className="text-[3vw]">
                  <span className="playfair">India's Best</span>
                  <span>Hair Transplant Clinic</span>
                </h3>
              </div>
            </Col>
          </Row>
        </div>
        <div className="ImageSection mt-[4vw]">
          <div className="sectionLeft">
            <Row>
              <Col flex={3}>
                <div className="ImgContainer flex justify-center p-5 w-[40vw] mx-auto">
                  <img src={GalImg2} alt="" className="rounded-lg" />
                </div>
              </Col>
              <Col flex={2}>
                <div className="TxtContainer relative h-full flex justify-center items-center flex-col -left-[4vw]">
                  <img src={Vector1} alt="" className="w-[20vw]" />
                  <div className="imgHeading ">
                    <h4 className=" flex text-center text-[3vw]">
                      <span className="playfair">Max Hair Clinic</span>
                    </h4>
                    <div className="imgCap text-[2vw] playfair text-center">
                      Chennai
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="sectionRight mt-[4vw]">
            <Row>
              <Col flex={2}>
                <div className="TxtContainer relative h-full flex justify-center items-center flex-col left-[4vw]">
                  <img src={Vector2} alt="" className="w-[20vw]" />
                  <div className="imgHeading">
                    <h4 className=" flex flex-col justify-center items-center text-[3vw]">
                      <span className="playfair">Max Hair Clinic</span>
                    </h4>
                    <div className="imgCap text-[2vw] playfair text-center">
                      Coimbatore
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex={3}>
                <div className="ImgContainer flex justify-center p-5 w-[40vw] mx-auto">
                  <img src={GalImg1} alt="" className="rounded-lg" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="sectionLeft mt-[4vw]">
            <Row>
              <Col flex={3}>
                <div className="ImgContainer flex justify-center p-5 w-[40vw] mx-auto">
                  <img src={GalImg3} alt="" className="rounded-lg" />
                </div>
              </Col>
              <Col flex={2}>
                <div className="TxtContainer relative h-full flex justify-center items-center flex-col -left-[4vw]">
                  <img src={Vector3} alt="" className="w-[20vw]" />
                  <div className="imgHeading">
                    <h4 className=" flex flex-col justify-center items-center text-[3vw]">
                      <span className="playfair">Max Hair Clinic</span>
                    </h4>
                    <div className="imgCap text-[2vw] playfair text-center">
                      Bangalore
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="sectionRight mt-[4vw]">
            <Row>
              <Col flex={2}>
                <div className="TxtContainer relative h-full flex justify-center items-center flex-col left-[4vw]">
                  <img src={Vector4} alt="" className="w-[20vw]" />
                  <div className="imgHeading">
                    <h4 className=" flex flex-col justify-center items-center text-[3vw]">
                      <span className="playfair">Max Hair Clinic</span>
                    </h4>
                    <div className="imgCap text-[2vw] playfair text-center">
                      Hyderbad
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex={3}>
                <div className="ImgContainer flex justify-center p-5 w-[40vw] mx-auto">
                  <img src={GalImg4} alt="" className="rounded-lg" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
