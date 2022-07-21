import React from "react";
import axios from "axios";
import Button from "./Button";
import { useRef } from "react";
const AddOptions = () => {
  const input = useRef(0);

  function submit() {
    const question_id = localStorage.getItem("question_id");
    axios
      .post("http://127.0.0.1:8000/api/v1/question_options/add_option", {
        question_id: question_id,
        option: input.current.value,
      })

      .then((response) => {
        input.current.value = "";
      });
  }
  return (
    <div>
      <input ref={input} type="text"></input>
      <Button
        text={"Submit"}
        className={"submit"}
        onClick={() => {
          submit();
        }}
      />
    </div>
  );
};
export default AddOptions;