import { Button1, Header, Heading, Hero } from "../../components";
import Button3 from "../../components/Button/Button3";
import Hero2 from "../../components/Hero/Hero2";
import hairtrans from "../../assets/photos/services/hair transplant.png";

export default function Menu1() {
  return (
    <div className="Test">
      <Header />

      <Hero2
        hero2class="w-[50vw] mx-auto pt-[50%] sm:pt-[20%] lg:pt-[20vh] 2xl:pt-[10vh] pb-[8vh] pl-[3vw] xl:pl-[5vw]"
        hero2Caption="Max"
        hero2Title1="About"
        hero2Title2="Us"
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
    <div className="Menu1 top-0 flex w-[90vw] mx-auto my-[8vh] bg-white z-20 text-[11px]">
      <div className="ml-auto mr-[1vw]">
        <Button3
          btnln="/about"
          btn3click={ScrollEvent}
          button3Name="Our Clinic"
        />
      </div>
      <div className="mx-[1vw]">
        <Button3
          btnln="/about/Our-Capability"
          btn3click={ScrollEvent}
          button3Name="Our Capability"
        />
      </div>
      <div className="mx-[1vw]">
        <Button3
          btnln="/about/Our-Forte"
          btn3click={ScrollEvent}
          button3Name="Our Forte"
        />
      </div>
      <div className="ml-[1vw] mr-auto">
        <Button3
          btnln="/about/Our-Milestones"
          btn3click={ScrollEvent}
          button3Name="Our Milestones"
        />
      </div>
    </div>
  );
}
