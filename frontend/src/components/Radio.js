import React from "react";

const Radio = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <>
          <label>{option.option}</label>
          <input type="radio" name={option.question_id} />
        </>
      ))}
    </>
  );
};

export default Radio;