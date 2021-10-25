import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { WorkHistoryType } from "../../data/WorkHistory";
import { HttpClient } from "../../utilities/axiosInstance";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";
import Button from "../../components/modalEditButton/CustomButtonComponent";

const editWorkHistory = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>職歴</h1>
      </div>
      <div className={styles.main}>
        <h2 className={styles.contentsTitle}>企業名</h2>
        <input className={styles.contents} type="text" name="" id="" />
        <h2 className={styles.contentsTitle}>部署･役職</h2>
        <input className={styles.contents} type="text" name="" id="" />
        <h2 className={styles.contentsTitle}>日程</h2>
        <input className={styles.contents} type="date" name="" id="" />
        <h2 className={styles.contentsTitle}>職歴</h2>
        <input className={styles.contents} type="text" name="" id="" />
      </div>
      <div className={styles.buttons}>
        <Button color="#05C757" onClick={() => console.log("cancel")} id={"delete"}>
          キャンセル
        </Button>
        <Button color="#05C757" onClick={() => console.log("update")} id={"update"}>
          更新
        </Button>
      </div>
    </div>
  );
};
export default editWorkHistory;
