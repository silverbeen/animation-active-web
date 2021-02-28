import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import * as S from "./style";

const ComeBack: React.FC<{}> = () => {
  return (
    <S.ComeBack>
      <FiChevronLeft size={30} color="balck" />
      <i>
        <Link to="/">Main Back</Link>
      </i>
    </S.ComeBack>
  );
};

export default ComeBack;
