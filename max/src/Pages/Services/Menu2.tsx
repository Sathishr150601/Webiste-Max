import { Button1, Header, Heading, Hero } from "../../components";
import Button3 from "../../components/Button/Button3";
import Hero2 from "../../components/Hero/Hero2";

export default function Menu2() {
  return (
    <div className="Test">
      <Header />

      <Hero2
        hero2class="w-max mx-auto pt-[50%] sm:pt-[20%] lg:pt-[10%] xl:pt-[15%] pb-[8vh]"
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
      top: 430,
      behavior: "smooth",
    });
  };

  return (
    <div className="Menu1 top-0 flex justify-around w-[100vw] mx-auto my-[9vh] bg-white text-[9px]">
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
  );
}
