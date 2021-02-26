import React from "react";
import * as S from "./style";
import Header from "./Header";
import { BiChevronUpCircle, BiChevronDownCircle } from "react-icons/bi";

function Main() {
  return (
    <S.MainWrapper>
      <Header />
      <S.Main>
        <div className="introduce">
          <img src="/" alt="이미지" />
          <h1>ROTATION</h1>
        </div>
        <S.ButtonWrapper>
          <BiChevronUpCircle size={36} color="white" />
          <BiChevronDownCircle size={36} color="white" />
        </S.ButtonWrapper>
      </S.Main>
    </S.MainWrapper>
  );
}

export default Main;
