import React from "react";

import Button from "../Button/Button";
import ErrorAlert from "../errorAlert/errorAlert";

const ErrorText = ({ text, link, linkText }) => {
  return (
    <>
      <ErrorAlert>
        <p>{text}</p>
      </ErrorAlert>
      <div className="center">
        <Button link={link}>{linkText}</Button>
      </div>
    </>
  );
};

export default ErrorText;
