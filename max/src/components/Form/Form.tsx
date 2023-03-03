import Button1 from "../Button/Button1";

export default function Form() {
  return (
    <div className="Form w-[60vw] mx-auto text-[1vw] text-black my-[8vw]">
      <p>Let's talk</p>
      <h2 className="">
        Get <br /> in Touch
      </h2>
      <form action="" className="form mt-[5vw]">
        <div className="row1 flex mb-[5vw]">
          <div className="section mr-[1vw]">
            <input
              type="text"
              placeholder="&nbsp; What's your Name"
              className="form-border w-[29vw] leading-[30px] text-[1.2rem]"
            />
          </div>
          <div className="section mr-[2vw]">
            <input
              type="text"
              placeholder="&nbsp; Your Mobile Number"
              className="form-border w-[29vw] leading-[30px] text-[1.2rem]"
            />
          </div>
        </div>
        <div className="row2 mb-[3vw]">
          <div className="section">
            <input
              type="text"
              placeholder="&nbsp; Tell us about your Hair Problems"
              className="form-border w-[60vw] leading-[30px] text-[1.2rem]"
            />
          </div>
        </div>
        <div className="button text-[1rem]">
          <div className="contactBtn">
            <Button1
              btn1click=""
              btnName="Submit"
              btnLocation=""
              spanClass1="hidden"
              spanClass2=""
              spanClass3=""
            />
          </div>
        </div>
      </form>
    </div>
  );
}
