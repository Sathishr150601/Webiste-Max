import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "antd";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import {circleC} from "../../assets";

export default function Footer(props: {
  fspeed: number;
  footercap: string;
  footercontent: string;
  footerpath: string;
}) {
  const scrollUp = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    if (top > 0) {
      window.scrollTo(0, top - 15);
      setTimeout(scrollUp, 1);
    }
  };
  const maxFacebook = () => {
    window.open("https://www.facebook.com/maxhairclinicglobal/");
  };
  const maxTwitter = () => {
    window.open("https://twitter.com/maxhairclinicgl/");
  };
  const maxInstagram = () => {
    window.open("https://www.instagram.com/maxhairclinicglobal/");
  };
  const maxYoutube = () => {
    window.open("https://www.youtube.com/@MaxHairClinicGlobal/");
  };
  const maxLinkedin = () => {
    window.open("https://www.linkedin.com/company/maxhairclinic/");
  };

  return (
    <div className="Footer mt-[5vw] bg-[url('./assets/photos/counter/counterbg.jpg')] bg-cover bg-no-repeat">
      <div className="NavHeading w-[90vw] mx-auto">
        <div className="block">
          <h2 className="py-[3vh] sm:p-[5vw] sm:pb-[1vw] text-[calc(1rem+1vw)]">
            {props.footercap}
          </h2>
        </div>
      </div>
      <div className="NavContent w-[100vw] h-max  lg:pt-0">
        <Marquee speed={props.fspeed} className="pb-[3vw] mouse-active">
          <Link to={props.footerpath} className="">
            <h2 className="text-[10vw] leading-[11vw] pl-[9vw]">
              {props.footercontent} &nbsp;
            </h2>
          </Link>
        </Marquee>
        <Row className="w-[90vw] mx-auto flex">
          <Col span={6}>
            <Link to="" className="flex" onClick={scrollUp}>
              <FontAwesomeIcon
                icon={faChevronUp}
                className="text-white pt-4 px-[1vw]"
              />
              <p className="text-white hidden sm:block">Back to Top</p>
            </Link>
          </Col>
          <Col span={12} className="justify-center hidden sm:flex sm:-ml-[40px] lg:ml-0">
            <p className="text-white">2022</p>
            <img src={circleC} alt="" className="h-[30px] pt-2 px-[.5vw]" />
            <p className="text-white">Max &nbsp; </p>
            <p className="text-white">All Rights Reserved.</p>
          </Col>
          <Col span={6} className="flex lg:justify-end">
            <div className="SocialMediaIcons flex">
              <Link to="" onClick={maxFacebook}>
                <FacebookOutlined />
              </Link>
              <Link to="" onClick={maxTwitter}>
                <TwitterOutlined />
              </Link>
              <Link to="" onClick={maxInstagram}>
                <InstagramOutlined />
              </Link>
              <Link to="" onClick={maxYoutube}>
                <YoutubeOutlined />
              </Link>
              <Link to="" onClick={maxLinkedin}>
                <LinkedinOutlined />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
