import React from "react";

const Radio = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <div>
          <input type="radio" name={option.question_id} />{option.option}
        </div>
      ))}
    </>
  );
};

export default Radio;