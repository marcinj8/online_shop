import React, { useMemo } from "react";

import CartIcon from "../../../assets/cart.svg";
import {
  StyledButton,
  StyledInlineButton,
  StyledIconButton,
  StyledButtonImg,
  StyledPrimaryButton,
} from "./button.scss";

const Button = (props) => {
  const {
    template,
    clicked,
    styled,
    buttonType,
    disabled = false,
    showEnableAnimation,
  } = props;

  const Component = useMemo(() => {
    switch (buttonType) {
      case "primary":
        return StyledPrimaryButton;
      case "inline":
        return StyledInlineButton;
      case "icon":
        return StyledIconButton;
      default:
        return StyledButton;
    }
  }, [buttonType]);

  const content = useMemo(() => {
    switch (template) {
      case "cartIcon":
        return <StyledButtonImg alt="cart" src={CartIcon} />;
      default:
        return template;
    }
  }, [template]);

  return (
    <Component
      {...styled}
      showEnableAnimation={showEnableAnimation}
      disabled={disabled}
      onClick={clicked}
    >
      {content}
    </Component>
  );
};

export default Button;
