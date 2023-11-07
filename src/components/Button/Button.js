import React from "react";
import { Btn } from "./styles/Button.styles";

const Button = ({ clickFunc, text }) => {
  return <Btn onClick={clickFunc}>{text}</Btn>;
};

export default Button;
