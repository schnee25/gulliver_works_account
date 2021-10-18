import Button from "./components/CustomButtonComponent";
import React, { useEffect, useState } from "react";

function editButton() {
  return (
    <Button
      border="1px solid #e5e5e5"
      color="#afafaf"
      height="18px"
      onClick={() => console.log("clicked")}
      radius="1%"
      width="100%"
      children="編集"
    />
  );
}

export default editButton;
