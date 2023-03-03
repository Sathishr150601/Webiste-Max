import { Link } from "react-router-dom";
import Button1 from "../Button/Button1";

export default function InnerService(props: any) {
  return (
    <div className="innerService mx-[.5vw]">
      <Link to={props.serviceBtn} onClick={props.serviceBtn}>
        <div className="innerService w-[20vw] h-[50vh] mx-auto p-[2vw] bg-black ">
          <div className="psx-overlay"></div>
          <div className="serviceNo float-right">
            / {props.serviceNo} &nbsp;
          </div>
          <div className="serviceIcon">
            <img
              src={props.serviceIcon1}
              alt=""
              className="w-[6vw] h-[12vh] mt-[2vw] ml-[1vw]"
            />
          </div>
          <div className="serviceTitle mt-[1vw]">
            <h5 className="">{props.serviceTitle}</h5>
          </div>
          <hr className=" w-[14vw] border-white border" />
          <div className="serviceCaption mt-[1vw]">
            <p className="text-sm sm:text-base xl:text-xl">
              {props.serviceCaption}
            </p>
            <div className="serviceBtn flex justify-center mt-[2vw]">
              <Button1
                btn1click={props.serviceBtn}
                btnLocation={props.serviceBtn}
                btnName="Learn More"
                spanClass1=""
                spanClass2=""
                spanClass3=""
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
