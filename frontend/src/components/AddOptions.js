import React from "react";
import axios from "axios";
import Button from "./Button";
import { useRef } from "react";
const AddOptions = () => {

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