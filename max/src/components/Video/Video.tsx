import { Component } from "react";
import { LocationVideo } from "../../assets";

export default class Video extends Component {
  render() {
    return (
      <div className="w-[95vw] sm:w-[80vw] lg:w-[70vw] 2xl:w-[60vw]  mx-auto my-[5vw]">
        <video className="rounded-3xl" height="500" autoPlay muted loop>
          <source src={LocationVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}
