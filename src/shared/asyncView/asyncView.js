import React from "react";

import { Modal } from "../modal";

const AsyncView = ({ isLoading, isError, errorMessage, hideBackdrop }) => {
  const content = isLoading
    ? "Loading..."
    : isError
    ? errorMessage
      ? errorMessage
      : "Something went wrong, try again later."
    : null;

  return (
    <React.Fragment>
      <Modal
        header={isError ? "ERROR" : null}
        show={isLoading || isError}
        hideBackdrop={hideBackdrop}
      >
        <h3>{content}</h3>
      </Modal>
    </React.Fragment>
  );
};

export default AsyncView;
