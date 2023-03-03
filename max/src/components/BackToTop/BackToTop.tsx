import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top relative">
      <div className="fixed">
        {isVisible && (
          <div onClick={scrollToTop}>
            <div className="bg-black h-[40px] w-[40px] rounded-[50%] flex justify-center items-center absolute left-[]">
              <FontAwesomeIcon icon={faArrowUp} className="h-[1.5em]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
