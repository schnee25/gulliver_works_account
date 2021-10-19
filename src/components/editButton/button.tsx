import Button from "./CustomButtonComponent";
import React from "react";

function EditButton() {
  return <Button onClick={() => console.log("clicked")} children="編集する" />;
}

export default EditButton;
