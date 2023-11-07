import React from "react";
import noDataImg from "../../assets/undraw_void_-3-ggu.svg";
import { NoDataWrapper } from "./styles/NoData.styles";

const NoData = () => {
  return (
    <NoDataWrapper>
      <img src={noDataImg} alt="no search" />
      <p>No search made</p>
    </NoDataWrapper>
  );
};

export default NoData;
