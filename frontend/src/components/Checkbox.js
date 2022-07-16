import React from "react";

const Checkbox = ({ options }) => {
  return (
    <>
      {options.map((option) => (
        <div>
          <input type="checkbox" name={option.question_id} />{option.option}
        </div>
      ))}
    </>
  );
};

export default Checkbox;