import React from "react";
import { ButtonItem } from "./style";

function Button ({ children, ...rest }) {
  return <ButtonItem {...rest}>{children}</ButtonItem>;
}

export default Button;
