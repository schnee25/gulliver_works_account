import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
const editButton = () => {
  return (
    <button onClick={() => console.log("編集する")} className={styles.edit}>
      編集する
    </button>
  );
};
export default editButton;
