import { useState } from "react";
import serviceIcon1 from "../../assets/photos/counter/i3.png";
import serviceIcon2 from "../../assets/photos/counter/i1.png";
import serviceIcon3 from "../../assets/photos/counter/i3.png";
import hairtrans from "../../assets/photos/services/hair transplant.png";
import beard from "../../assets/photos/services/beard.png";
import cosmetic1 from "../../assets/photos/services/cosmetic.png";
import cosmetic2 from "../../assets/photos/services/cosmetic2.png";
import eyebrow from "../../assets/photos/services/eyebrow.png";
import igm from "../../assets/photos/services/igm.png";
import meso from "../../assets/photos/services/meso2.png";
import celebrity from "../../assets/photos/services/celebrity choice.jpg";
import eyelash from "../../assets/photos/services/eyelash.png";
import olt from "../../assets/photos/services/olt.png";
import prp from "../../assets/photos/services/prp.png";
import scalp from "../../assets/photos/services/sacal detaox.png";
import saph from "../../assets/photos/services/Scalp micropigmentation.png";
import stem from "../../assets/photos/services/stem.png";
import women from "../../assets/photos/services/women transp.png";
import Button3 from "../Button/Button3";
import InnerService from "./InnerService";
import Button1 from "../Button/Button1";
import Heading from "../Heading/Heading";

export default function Inner() {
  const [isShown1, setIsShown1] = useState(true);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const [isShown8, setIsShown8] = useState(false);
  const [isShown9, setIsShown9] = useState(false);
  const [isShown10, setIsShown10] = useState(false);
  const [isShown11, setIsShown11] = useState(false);

  const [isShown12, setIsShown12] = useState(false);
  const [isShown13, setIsShown13] = useState(false);
  const [isShown14, setIsShown14] = useState(false);
  const [isShown15, setIsShown15] = useState(false);
  const [isShown16, setIsShown16] = useState(false);
  const [isShown17, setIsShown17] = useState(false);
  const [isShown18, setIsShown18] = useState(false);

  const [isShown19, setIsShown19] = useState(false);
  const [isShown20, setIsShown20] = useState(false);
  const [isShown21, setIsShown21] = useState(false);

  const [isShown22, setIsShown22] = useState(false);
  const [isShown23, setIsShown23] = useState(false);
  const [isShown24, setIsShown24] = useState(false);
  const [isShown25, setIsShown25] = useState(false);
  const [isShown26, setIsShown26] = useState(false);

  const serviceScroll1 = () => {
    window.scrollTo({
      top: 725,
      behavior: "smooth",
    });
  };

  const serviceScroll2 = () => {
    window.scrollTo({
      top: 945,
      behavior: "smooth",
    });
  };

  const handleClick1 = () => {
    serviceScroll1();

    setIsShown1(true);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick2 = () => {
    serviceScroll1();

    setIsShown1(false);
    setIsShown2(true);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick3 = () => {
    serviceScroll1();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(true);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick4 = () => {
    serviceScroll1();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(true);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick5 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(true);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick6 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(true);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick7 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(true);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick8 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(true);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick9 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(true);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick10 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(true);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick11 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(true);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick12 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(true);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick13 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(true);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick14 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(true);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick15 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(true);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick16 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(true);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick17 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(true);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick18 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(true);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick19 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(true);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick20 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(true);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick21 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(true);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick22 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(true);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick23 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(true);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick24 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(true);
    setIsShown25(false);
    setIsShown26(false);
  };
  const handleClick25 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(true);
    setIsShown26(false);
  };
  const handleClick26 = () => {
    serviceScroll2();

    setIsShown1(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);

    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setIsShown9(false);
    setIsShown10(false);
    setIsShown11(false);

    setIsShown12(false);
    setIsShown13(false);
    setIsShown14(false);
    setIsShown15(false);
    setIsShown16(false);
    setIsShown17(false);
    setIsShown18(false);

    setIsShown19(false);
    setIsShown20(false);
    setIsShown21(false);

    setIsShown22(false);
    setIsShown23(false);
    setIsShown24(false);
    setIsShown25(false);
    setIsShown26(true);
  };

  return (
    <div className="innerMenu w-[90vw] lg:w-[95vw] 2xl:w-[90vw] mx-auto my-[6vh]">
      <div className="innerHeading flex justify-evenly flex-nowrap flex-col lg:flex-row mt-[10vw] sm:mt-[5vh]">
        <div className="flex flex-col sm:flex-row">
          <div className="innerSection mx-auto mb-[8vh] text-sm lg:mx-[.4vw]">
            <Button3
              btn3click={handleClick1}
              button3Name="Surgical Treatments"
            />
          </div>
          <div className="innerSection mx-auto mb-[8vh] text-sm lg:mx-[.4vw]">
            <Button3
              btn3click={handleClick2}
              button3Name="Non-Surgical Treatments"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="innerSection mx-auto mb-[8vh] text-sm lg:mx-[.4vw]">
            <Button3
              btn3click={handleClick3}
              button3Name="Clinical Treatments"
            />
          </div>
          <div className="innerSection mx-auto mb-[8vh] text-sm lg:mx-[.4vw]">
            <Button3
              btn3click={handleClick4}
              button3Name="Non-Clinical Treatments"
            />
          </div>
        </div>
      </div>
      {isShown1 && (
        <div className="innerServiceWRapper flex flex-wrap flex-col my-[8vw] w-[90vw] mx-auto">
          <div className="flex flex-col sm:flex-row mx-auto mb-[2vw]">
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={1}
                serviceBtn={handleClick5}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="HAIR TRANSPLANT"
              />
              <InnerService
                serviceNo={2}
                serviceBtn={handleClick6}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon2}
                serviceTitle="WOMEN HAIR TRANSPLANT"
              />
            </div>
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={3}
                serviceBtn={handleClick7}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon3}
                serviceTitle="IGM HAIR TRANSPLANT"
              />
              <InnerService
                serviceNo={4}
                serviceBtn={handleClick8}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="DHI HAIR TRANSPLANT"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mx-auto mb-[3vw]">
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={5}
                serviceBtn={handleClick9}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="SAPPHIRE HAIR TRANSPLANT"
              />
              <InnerService
                serviceNo={6}
                serviceBtn={handleClick10}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon2}
                serviceTitle="BEARD HAIR TRANSPLANT"
              />
            </div>
            <InnerService
              serviceNo={7}
              serviceBtn={handleClick11}
              serviceCaption="Our inspired solutions have helped shape peoples lives"
              serviceIcon1={serviceIcon3}
              serviceTitle="EYEBROW HAIR TRANSPLANT"
            />
          </div>
        </div>
      )}
      {isShown2 && (
        <div className="innerServiceWRapper flex flex-col my-[8vw] w-[90vw] mx-auto">
          <div className="flex flex-col sm:flex-row mx-auto mb-[3vw]">
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={1}
                serviceBtn={handleClick12}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="CC PRP ACTIVE+"
              />
              <InnerService
                serviceNo={2}
                serviceBtn={handleClick13}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon2}
                serviceTitle="OXYGEN LASER THERAPY"
              />
            </div>
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={3}
                serviceBtn={handleClick14}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon3}
                serviceTitle="DR REGROWTH"
              />
              <InnerService
                serviceNo={4}
                serviceBtn={handleClick15}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="CROTICO - SHOT"
              />
            </div>{" "}
          </div>
          <div className="flex flex-col sm:flex-row mx-auto mb-[3vw]">
            <div className="flex mb-[3vh]">
              {" "}
              <InnerService
                serviceNo={5}
                serviceBtn={handleClick16}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="LASER HELMET"
              />
              <InnerService
                serviceNo={6}
                serviceBtn={handleClick17}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon2}
                serviceTitle="MESO QR 678"
              />
            </div>
            <InnerService
              serviceNo={7}
              serviceBtn={handleClick18}
              serviceCaption="Our inspired solutions have helped shape peoples lives"
              serviceIcon1={serviceIcon3}
              serviceTitle="SCALP DETOX"
            />
          </div>
        </div>
      )}
      {isShown3 && (
        <div className="innerServiceWRapper flex flex-col my-[8vw] w-[90vw] mx-auto">
          <div className="flex flex-col sm:flex-row mx-auto mb-[3vw]">
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={1}
                serviceBtn={handleClick19}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="SCALP MICRO PIGMENTATION"
              />
              <InnerService
                serviceNo={2}
                serviceBtn={handleClick20}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon2}
                serviceTitle="EYELASH EXTENSION"
              />
            </div>
            <InnerService
              serviceNo={3}
              serviceBtn={handleClick21}
              serviceCaption="Our inspired solutions have helped shape peoples lives"
              serviceIcon1={serviceIcon3}
              serviceTitle="EYEBROW MICROBLADING"
            />
          </div>
        </div>
      )}
      {isShown4 && (
        <div className="innerServiceWRapper flex flex-col my-[8vw] w-[90vw] mx-auto">
          <div className="flex flex-col sm:flex-row mx-auto">
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={1}
                serviceBtn={handleClick22}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="TRES PRO"
              />
              <InnerService
                serviceNo={2}
                serviceBtn={handleClick23}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon2}
                serviceTitle="CELEBRITY'S CHOICE"
              />
            </div>
            <div className="flex mb-[3vh]">
              <InnerService
                serviceNo={3}
                serviceBtn={handleClick24}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon3}
                serviceTitle="SATIN LACE"
              />
              <InnerService
                serviceNo={4}
                serviceBtn={handleClick25}
                serviceCaption="Our inspired solutions have helped shape peoples lives"
                serviceIcon1={serviceIcon1}
                serviceTitle="FRENCH GRIP"
              />
            </div>
          </div>
          <InnerService
            serviceNo={5}
            serviceBtn={handleClick26}
            serviceCaption="Our inspired solutions have helped shape peoples lives"
            serviceIcon1={serviceIcon1}
            serviceTitle="DURA"
          />
        </div>
      )}

      {isShown5 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  A Surgical Transfer of Hair Tissues from Healthy Donor Sites
                  to the Affected Areas via FUT (Follicular Unit
                  Transplantation) or FUE (Follicular Unit Extraction)
                  techniques, using State-of-the-Art equipment under Sterile
                  conditions. High Density and Natural looking Hairlines are
                  created by our well-experienced surgical team using Local
                  Anesthetics measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown6 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={women}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown7 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="IGM Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={igm}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  An eyebrow transplant is basically a cosmetic surgery that
                  makes the eyebrow area fuller with natural-looking hair. MAX
                  Hair Clinic offers the Sapphire and Mirror methods to attain
                  the best angular and geometric directions for perfect eyebrow
                  shapes. Many people who suffer from trichotillomania or
                  alopecia areata benefit from an eyebrow transplant. This
                  permanent procedure can last a lifetime. It takes a few months
                  to see visible results after the hair transplant. But the good
                  part is that the recovery time is reasonably quick. The grafts
                  are obtained from the Nape area. This scalp piece contains a
                  minimum of 13 to 15 hair follicles. Later, the collected
                  grafts are implanted into the eyebrows. This procedure is done
                  once the skin heals after the removal of grafts. This
                  implantation helps your brow look well-defined with
                  natural-looking hair. At MAX Hair Clinic, eyebrow transplants
                  are performed by highly skilled cosmetic or plastic surgeons
                  who help with pre- and post-implant recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown8 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="DHI Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  DHI is an advanced technique for implanting hair in a balding
                  area. The grafts are collected using an FUE (follicular unit
                  extraction) method and directly implanted on the recipient
                  site. By identifying the graft thickness an implanter is
                  selected. With this, the process can be completed without
                  opening the canal for transplant. The collected grafts will be
                  placed within a thin cylindrical and sharp tip that helps to
                  implant the follicles directly.
                  <br />
                  <br />
                  MAX HAIR CLINIC DHI HAIR TRANSPLANT IS A TRADITIONAL TECHNIQUE
                  PROCEDURE WITH OUTSTANDING OUTCOMES.specialized pen-shaped
                  Choi implanters are utilized to implant the same in affected
                  areas. 65-75 hair follicles replanted an sq. cm giving up to
                  70-75% survival rate. The hair follicle is punched into the
                  scalp using a Choi implanter and a clearance space of 1mmi is
                  given between 2 punches, thus creating a less dense packing of
                  hair follicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown9 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Sapphire Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={saph}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Sapphire is a material imported from Italy that boasts
                  anti-microbial properties and minimal postoperative effects,
                  making it the perfect choice for those looking for a safe and
                  effective way to achieve their desired look. With our
                  experienced team of surgeons, you can rest assured that you’re
                  in good hands when you choose the Sapphire Technique from Max
                  Hair Clinic. which helps to keep your scalp healthy and free
                  from infection.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown10 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Beard Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={beard}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Max Hair Clinic provides the best beard hair transplant. Men
                  who can’t grow beard hair naturally or are genetically
                  incapable of growing beard hair can go through a beard hair
                  transplant. We use the most effective method, FUE, to implant
                  beard hair. Hair follicles are collected from the back area of
                  the head and implanted in the marked jawline area.
                  <br />A few steps should be considered if you plan for a beard
                  transplant. Be gentle to your implanted area in the first
                  week; sleep on your back. Likewise, follow the instructions
                  and guidelines provided by our MAX Hair Clinic expert team.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown11 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Eyebrow Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={eyebrow}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  An eyebrow transplant is basically a cosmetic surgery that
                  makes the eyebrow area fuller with natural-looking hair. MAX
                  Hair Clinic offers the Sapphire and Mirror methods to attain
                  the best angular and geometric directions for perfect eyebrow
                  shapes. Many people who suffer from trichotillomania or
                  alopecia areata benefit from an eyebrow transplant. This
                  permanent procedure can last a lifetime. It takes a few months
                  to see visible results after the hair transplant. But the good
                  part is that the recovery time is reasonably quick.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isShown12 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick2}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="CC Prp Active Plus"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={prp}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  A non-surgical, completely safe, and organic procedure that
                  aids in hair retention and prevention of hair loss and has no
                  side effects. At MAX Hair Clinic, we use a Closed-Casket Kit
                  to collect plasma from the client’s blood using the modern
                  German technology known as Closed Casket Platelet Rich Plasma
                  (CC-PRP). This contains Growth factors, proteins, amino acids,
                  nutrients, and electrolytes derived from the platelets. As a
                  result, this Non- surgical treatment benefits by nurturing,
                  rejuvenating, and promoting hair regrowth. Any damage to the
                  scalp or hair follicles will return to their natural, healthy
                  state. The closed-casket PRP machine has a single entry point
                  and a single exit point; As a result, the plasma is pathogen-
                  and toxin free and has not been exposed to the outside
                  environment. The CC-PRP kit spins at 5000 RPM, thus extracting
                  growth factor concentrate (GFC) while protecting the cells
                  through a self-cooling mechanism. MAX Hair Clinic ensures
                  proper maintenance of hygiene. We use sterile and disposable
                  CC-PRP kits. Catalyzing optimum healing. CC-PRP treatments are
                  a 100% customizable procedure that increases hair density &
                  quality and also counteracts baldness. Helps in the natural
                  regenerative process of hair growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown13 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick2}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Oxygen LASER Therapy"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={olt}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  MAX Oxygen LASER Therapy is a clinically proven, FDA-approved
                  advanced method of stimulating hair growth and effectively
                  reducing baldness. Oxygen laser therapy is a non-surgical
                  treatment for hair loss that employs a medical laser device
                  with therapeutic and low-light laser levels. The photo-bio
                  stimulation of MAX Oxygen LASER Hair Treatment irradiates
                  photons into scalp tissues, which upon penetration accelerates
                  pure oxygen intake. The Oxygen LASER light beam will stimulate
                  the hair follicles and their tissue cells. This promotes blood
                  flow, increases the hair growth rate, reduces the thinning of
                  hair, and treats androgenetic alopecia. As this activates the
                  intracellular fluid, nutrients get supplied equally. This
                  helps the follicles to restore and reconstruct healthy hair.
                  Because this noninvasive wavelength contains 100% oxygen, this
                  method of preventing hair loss is completely safe for human
                  health. At MAX Hair Clinic, we use 650nm to 830nm. In
                  addition, this reduces dandruff, improves the immunity of the
                  skin, and also activates collagen production. The cold beam
                  emitted from the diode freezes hair and prevents it from
                  falling. The main factor and an added advantage of using
                  Oxygen LASER therapy are that it breaks down DHT, which plays
                  a significant role in hair fall. It also aids in the
                  production of oil and sebum secretion, which helps to keep the
                  scalp’s pH stable.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown14 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick2}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Dr Regrowth"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Dr. Regrowth is a unique treatment method that addresses the
                  most common causes of hair loss and baldness. The Dr. Regrowth
                  treatment revitalizes and strengthens hair follicles while
                  reversing the conditions of hair loss through optimum scalp
                  metabolism and circulation by injecting vital minerals, amino
                  acids, and nutrients into the scalp layers and exposing the
                  hair as well as the scalp to controlled low-level LASER light
                  emission. The treatment invigorates the scalp’s metabolic
                  action and strengthens hair follicles through natural
                  regeneration and proliferation. Dr. Regrowth uses low-level
                  laser therapy and direct injections of essential nutrients to
                  improve hair health by increasing circulation and delivering
                  an ideal blend of nutrients to the scalp. A specialized
                  treatment approach with essential hair health enhancement
                  nutrients. A one-stop solution to counter all concerns about
                  hair loss by treating the root cause in both men and women.
                  The Dr. Regrowth treatment focuses on correcting the
                  nutritional deficiencies that cause hair loss and baldness.
                  Photo-biotic stimulation. A direct nutritional boost helps in
                  the retention of hair and promotes hair growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown15 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick2}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Crotico - Shot"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  MAX Hair Clinic provides treatments for multifaceted hair loss
                  issues. Auto-immune disease is one of them. We have the best,
                  most dedicated team for treating hair loss. A Cortico shot is
                  exclusively given to people suffering from alopecia areata.
                  Alopecia Areata is an auto-immune disorder where our own body
                  attacks native body cells. This shot lowers the immune
                  response. Cortico shots help in treating alopecia areata of
                  the scalp where less than 50% of the scalp area is involved.
                  Alopecia areata of the brows, beard, and lichen are also
                  common. Planopilaris Alopecia due to frontal fibrosis, discoid
                  lupus, and folliculitis de calvans can also be treated. While
                  corticosteroids cannot guarantee that the hair follicles in
                  the affected area will grow back completely, they can help to
                  lower the immune response and stop the spread of this specific
                  illness. In certain cases, we are able to appreciate 50% of
                  the regrowth in the affected portion. Along with the
                  Derma-Roller, a Cortico shot can be administered. Cortico Shot
                  injections are non-invasive. Reduces the spread of areata
                  patches. Reduces the induction of new patches. Improves blood
                  circulation & improves hair regrowth by stimulating, and
                  activating dormant & affected hair follicles.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown16 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick2}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Laser Helmet"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown17 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown18 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isShown19 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown20 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown21 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {isShown22 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown23 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown23 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown23 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isShown23 && (
        <div className="innerContent">
          <div className="goBack-btn ml-[5vw] text-black w-max hidden sm:block">
            <Button1
              btn1click={handleClick1}
              btnLocation=""
              btnName="Go Back"
              spanClass1=""
              spanClass2=""
              spanClass3=""
            />
          </div>
          <div className="innerMain mr-[5vw] ml-[8vw]">
            <div className="innerMainHeading">
              <Heading
                headingtitleclass="text-black pb-[3vw]"
                headingtitlecontent1="Women Hair Transplant"
                headingtitlecontent2=""
                headingcapclass="hidden"
                headingcapcontent=""
                btn2hide="hidden"
                btn2text="View More"
              />
            </div>
            <div className="innerMainContent w-[80vw] mx-auto flex flex-col sm:flex-row-reverse justify-between">
              <div className="innermainImg mb-[5vh]">
                <img
                  src={hairtrans}
                  alt=""
                  className="w-[90%] sm:w-[30vw] sm:h-[30vh] lg:h-[50vh] rounded-xl"
                />
              </div>
              <div className="innerMainContent w-[90%] sm:w-[40vw] mx-auto text-justify">
                <p className="text-black text-[13px] lg:text-[24px] leading-[40px]">
                  Female Pattern Baldness is Multifactorial but is usually
                  caused due to Hormonal changes or the hair products used.
                  During the consultation, the Doctor makes sure to rule out the
                  possible underlying Two factors should be considered for hair
                  transplantation:
                  <br />
                  There should be enough healthy hair in your donor area for the
                  hair to be transplanted where it is needed.
                  <br />
                  The place where hair will be transplanted should be suitable
                  for hair transplant. There should be no irritation or damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
