import React, { useEffect, useRef, useMemo } from "react";

import { Backdrop } from ".";

import {
  StyledModal,
  StyledModalHeader,
  StyledModalChildren,
  StyledModalFooter,
  StyledModalDefaultButton,
  StyledModalSticky,
} from "./modal.scss";

import { OnShowAnimations, OnHideAnimations } from "../animations";

const Modal = ({
  show,
  header,
  children,
  defaultCloseButton,
  close,
  footer,
  zIndex,
  hideBackdrop,
  modalType,
  showAnimatonStyle = {
    type: "none",
    side: null,
    duration: 0.2,
  },
  hideAnimatonStyle = {
    type: "none",
    side: null,
    duration: 0.2,
  },
}) => {
  const modalRef = useRef(null);

  const Component = useMemo(() => {
    switch (modalType) {
      case "sticky":
        return StyledModalSticky;
      default:
        return StyledModal;
    }
  }, [modalType]);

  useEffect(() => {
    if (show) {
      OnShowAnimations[showAnimatonStyle.type](
        modalRef.current,
        showAnimatonStyle.side,
        showAnimatonStyle.duration
      );
    } else {
      OnHideAnimations[hideAnimatonStyle.type](
        modalRef.current,
        hideAnimatonStyle.side,
        hideAnimatonStyle.duration
      );
    }
  }, [
    show,
    showAnimatonStyle.type,
    showAnimatonStyle.side,
    showAnimatonStyle.duration,
    hideAnimatonStyle.type,
    hideAnimatonStyle.side,
    hideAnimatonStyle.duration,
  ]);

  return (
    <React.Fragment>
      <Backdrop show={show && !hideBackdrop} close={close} zIndex={zIndex} />
      <Component zIndex={zIndex} ref={modalRef}>
        {header && (
          <StyledModalHeader>
            <h3>{header}</h3>
          </StyledModalHeader>
        )}
        <StyledModalChildren>{children}</StyledModalChildren>
        {defaultCloseButton && (
          <StyledModalDefaultButton onClick={close}>
            close
          </StyledModalDefaultButton>
        )}
        {footer && <StyledModalFooter>{footer}</StyledModalFooter>}
      </Component>
    </React.Fragment>
  );
};

export default Modal;
