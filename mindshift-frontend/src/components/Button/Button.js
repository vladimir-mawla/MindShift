import React from "react";

const Button = ({ className, text, onClick, id, disabled }) => {
  return (
    <button disabled={disabled} className={className} onClick={onClick} id={id}>
      {text}
    </button>
  );
};

export default Button;