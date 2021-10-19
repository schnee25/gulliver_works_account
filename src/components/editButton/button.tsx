import Button from "./CustomButtonComponent";
import React from "react";

function editButton() {
  return <Button onClick={() => console.log("clicked")} children="編集" />;
}

export default editButton;
