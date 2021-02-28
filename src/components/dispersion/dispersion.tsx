import React, { useState } from "react";
import ComeBack from "../ComeBack";
import * as S from "../style";

interface DispersionState {
  rotateValue: number;
  color: number;
  color1: number;
}

const Circle: React.FC<{
  rotateValue: number;
  color: number;
  color1: number;
}> = ({ rotateValue, color, color1 }) => {
  return (
    <S.Circle style={{ transform: "rotate(" + rotateValue + "deg)" }}>
      <div
        style={{
          backgroundColor: "rgb( 300," + color1 + "," + color + " )",
        }}
      ></div>
    </S.Circle>
  );
};

function Dispersion() {
  const [rotateVal, setRotateVal] = useState<number>(0);
  const rotateNum = [];
  const [font, setFont] = useState<string>("25px");
  const [translate, setTranslate] = useState<string>("");

  const circleSpread = () => {
    console.log(rotateVal);
    setRotateVal(20);
  };

  const returnRotate = () => {
    setRotateVal(0);
  };

  for (let i = 0; i < 18; i++) {
    rotateNum[i] = i;
  }

  const rotateApear = rotateNum.map((e) => (
    <Circle
      rotateValue={rotateVal * e}
      color={rotateVal * e}
      color1={(rotateVal * e) / 3}
    ></Circle>
  ));

  const onMouseEvent = () => {
    setFont("30px");
    setTranslate("2s");
  };

  return (
    <S.MainWrapper style={{ backgroundColor: "#f48fb1" }}>
      <ComeBack />
      <div className="button-wrapper">
        <i
          onClick={circleSpread}
          onMouseMove={onMouseEvent}
          style={{ fontSize: font, translate: translate }}
        >
          open
        </i>
        <i
          onClick={returnRotate}
          onMouseMove={onMouseEvent}
          style={{ fontSize: font, translate: translate }}
        >
          close
        </i>
      </div>
      {rotateApear}
    </S.MainWrapper>
  );
}

export default Dispersion;
