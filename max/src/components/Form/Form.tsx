import Button1 from "../Button/Button1";
import { useState } from "react";

export default function Form() {
  const re = /^[A-Za-z]+$/;

  const [CForm, setCForm] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const saveData = () => {
    localStorage.setItem("contact", JSON.stringify(CForm));
  };

  const [error, setError] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    saveData();
  };

  return (
    <div className="Form w-[80vw] mx-auto text-[1vw] text-black my-[8vw]">
      <p>Let's talk</p>
      <h2 className="my-[5vh]">
        Get <br /> in Touch
      </h2>
      <form
        action="mailto:sathishr150601@gmail.com"
        method="get"
        className="form mt-[5vw]"
      >
        <div className="row1 sm:flex mb-[5vw]">
          <div className="section mr-[1vw]">
            <input
              name="name"
              type="text"
              placeholder="&nbsp; What's your Name"
              className="form-border w-[80vw] sm:w-[40vw] leading-[30px] text-[1.2rem] mb-[3vh]"
            />
          </div>
          <div className="section mr-[2vw]">
            <input
              name="phone"
              type="number"
              placeholder="&nbsp; Your Mobile Number"
              className="form-border w-[80vw] sm:w-[40vw] leading-[30px] text-[1.2rem] mb-[3vh]"
            />
          </div>
        </div>
        <div className="row2 mb-[3vh]">
          <div className="section">
            <input
              name="message"
              type="text"
              placeholder="&nbsp; Tell us about your Hair Problems"
              className="form-border w-[80vw] leading-[30px] text-[1.2rem]  mb-[3vh]"
            />
          </div>
        </div>
        <div className="button text-[1rem]">
          <div className="contactBtn">
            <button type="submit">
              <Button1
                btn1click=""
                btnName="Submit"
                btnLocation=""
                spanClass1="hidden"
                spanClass2=""
                spanClass3=""
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
