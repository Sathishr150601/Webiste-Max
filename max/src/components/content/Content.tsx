import { Col, Row } from "antd";
import { fastForward } from "../../assets";

function Content(props: { content1: string; content2: string }) {
  return (
    <div className="Content mb-[8vw]">
      <Row>
        <Col span={6} className="hidden lg:block">
          <div className="left-content flex justify-center pl-[5vw] ">
            <div className="icon pt-[.4vw] pr-[1vw]">
              <img src={fastForward} alt="" className="w-[1vw] h-[1vw] " />
            </div>
            {/* <p className="font-medium text-black text-[1.4vw]">Objective</p> */}
          </div>
        </Col>
        <Col span={14} className="mx-auto">
          <div className="right-content text-black text-justify">
            <p className="text-sm lg:text-[18px] poppins leading-[52px]">{props.content1}</p>
            <p className="text-sm lg:text-[18px] poppins leading-[52px]">{props.content2}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Content;
