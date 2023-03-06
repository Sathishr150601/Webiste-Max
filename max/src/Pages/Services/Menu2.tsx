import { Element, Link } from "react-scroll";
import { Button1, Header, Heading, Hero } from "../../components";
import Button3 from "../../components/Button/Button3";
import Hero2 from "../../components/Hero/Hero2";

export default function Menu2() {
  return (
    <div className="Test">
      <Header />

      <Hero2
        hero2class="w-max mx-auto pt-[40vh] sm:pt-[18vh] lg:pt-[14h] pb-[8vh]"
        hero2Caption="Max"
        hero2Title1="Our"
        hero2Title2="Services"
      />

      <SubMenu />
    </div>
  );
}

function SubMenu() {
  const ScrollEvent = () => {
    window.scrollTo({
      top: window.innerHeight / 1.4,
      behavior: "smooth",
    });
  };

  return (
    <Element name="test1">
      <div className="Menu1 top-0 flex justify-around w-[100vw] mx-auto pt-[8vh] px-[9vh] bg-white text-[8px]">
        <div className="ml-auto mr-[1vw]">
          <Button3
            btnln="/services"
            btn3click={ScrollEvent}
            button3Name="Surgical Treatments"
          />
        </div>
        <div className="mx-[1vw]">
          <Button3
            btnln="/services/non-surgical-treatments"
            btn3click={ScrollEvent}
            button3Name="Non-Surgical Treatments"
          />
        </div>
        <div className="mx-[1vw]">
          <Button3
            btnln="/services/clinical-treatments"
            btn3click={ScrollEvent}
            button3Name="Clinical Treatments"
          />
        </div>
        <div className="ml-[1vw] mr-auto">
          <Button3
            btnln="/services/non-clinical-treatments"
            btn3click={ScrollEvent}
            button3Name="Non-Clinical Treatments"
          />
        </div>
      </div>
    </Element>
  );
}
