import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import Header from "./Header";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { color, rotation, eyes } from "../../assets/index";
import { useHistory } from "react-router";

const Main: React.FC<{ style: string }> = () => {
  const TOTAL_SILDES = 2;
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const nextSlider = () => {
    if (currentSlider >= TOTAL_SILDES) {
      setCurrentSlider(0);
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

  const rotationHistory = () => {
    history.push("/rotation");
  };

  const eyesHistory = () => {
    history.push("/mouse");
  };

  const dispersionHistory = () => {
    history.push("/dispersion");
  };

  useEffect(() => {
    sliderRef.current!.style.transition = "all 0.5s ease-in-out";
    sliderRef.current!.style.transform = `translateX(-${currentSlider * 30}%)`;
  });

  return (
    <S.MainWrapper>
      <Header />
      <S.Main ref={sliderRef}>
        <div className="introduce" onClick={rotationHistory}>
          <img src={rotation} alt="이미지" />
          <h1>ROTATION</h1>
        </div>
        <div className="introduce" onClick={eyesHistory}>
          <img src={eyes} alt="이미지" />
          <h1>EYES MOUSE</h1>
        </div>
        <div className="introduce" onClick={dispersionHistory}>
          <img src={color} alt="이미지" />
          <h1>COLOR DIEPERSION</h1>
        </div>
      </S.Main>
      <S.ButtonWrapper >
        <FiChevronLeft size={45} onClick={prevSlider} />
        <FiChevronRight size={45} onClick={nextSlider} />
      </S.ButtonWrapper>
    </S.MainWrapper>
  );
};

export default Main;
