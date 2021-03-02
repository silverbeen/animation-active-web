import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "../style";
import { earth, palne } from "../../assets/index";
import { BiChevronUpCircle, BiChevronDownCircle } from "react-icons/bi";
import ComeBack from "../ComeBack";

function Rotation() {
  const [speedVal, SetSpeedVal] = useState(1);

  //let speedVal = 1;
  const speedIncrese = () => {
    if (speedVal === 10) {
      SetSpeedVal(0);
    }
    SetSpeedVal((speedVal) => speedVal + 1);
    console.log(speedVal);
  };

  const speedDecrese = () => {
    if (speedVal === 1) {
      SetSpeedVal(10);
    }
    SetSpeedVal((speedVal) => speedVal - 1);
  };

  const speedStyle = {
    animationDuration: 10000 / speedVal + "s",
  };

  return (
    <>
      <S.MainWrapper>
        <ComeBack />
        <div
          className="button-wrapper"
          style={{
            position: "absolute",
            right: "0",
            width: "100px",
            height: "250px",
            flexDirection: "column",
            top: "308px",
          }}
        >
          <BiChevronUpCircle onClick={speedIncrese} size={36} color="white" />
          <span>{speedVal}</span>
          <BiChevronDownCircle onClick={speedDecrese} size={36} color="white" />
        </div>

        <img src={palne} id="plane" style={speedStyle} />
        <img src={earth} id="earth" />
      </S.MainWrapper>
    </>
  );
}

export default Rotation;
