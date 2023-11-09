import React from "react";
import { Btn } from "./styles/Button.styles";

const Button = ({ clickFunc, text, classes }) => {
  return (
    <Btn className={classes} onClick={clickFunc}>
      {text}
    </Btn>
  );
};

export default Button;
