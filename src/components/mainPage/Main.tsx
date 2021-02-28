import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Header from "./Header";
import { BiChevronUpCircle, BiChevronDownCircle } from "react-icons/bi";
import { color, rotation, eyes } from "../../assets/index";
import { useHistory } from "react-router";

const Main: React.FC<{ style: string }> = () => {
  const TOTAL_SILDES = 2;
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  //const [currentWidth, setCurrnetWidth] = useState<string>("20%");
  const sliderRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const nextSlider = () => {
    if (currentSlider >= TOTAL_SILDES) {
      setCurrentSlider(0);
      //setCurrnetWidth("");
      history.push('/')
    } else {
      setCurrentSlider(currentSlider + 1);
    }
  };

  const prevSlider = () => {
    if (currentSlider === 0) {
      setCurrentSlider(TOTAL_SILDES);
    } else {
      setCurrentSlider(currentSlider - 1);
    }
  };

  useEffect(() => {
    sliderRef.current!.style.transition = "all 0.5s ease-in-out";
    sliderRef.current!.style.transform = `translateX(-${currentSlider * 30}%)`;
  });

  return (
    <S.MainWrapper>
      <Header />
      <S.Main ref={sliderRef}>
        <div className="introduce" >
          <img src={rotation} alt="이미지" />
          <h1>ROTATION</h1>
        </div>
        <div className="introduce">
          <img src={eyes} alt="이미지" />
          <h1>EYES MOUSE</h1>
        </div>
        <div className="introduce">
          <img src={color} alt="이미지" />
          <h1>COLOR DIEPERSION</h1>
        </div>
      </S.Main>
      <S.ButtonWrapper>
        <BiChevronUpCircle size={45} color="white" onClick={prevSlider} />
        <BiChevronDownCircle size={45} color="white" onClick={nextSlider} />
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default Main;
