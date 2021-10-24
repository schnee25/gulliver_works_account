import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { WorkHistoryType } from "../../data/WorkHistory";
import { HttpClient } from "../../utilities/axiosInstance";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";

const editWorkHistory = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>職歴</h1>
      </div>
      <div className={styles.main}>
        <h2 className={styles.contentsTitle}>企業名</h2>
        {/* <p className={styles.contents}>{workHistories.name}</p> */}
        <h2 className={styles.contentsTitle}>部署･役職</h2>
        {/* <p className={styles.contents}>{workHistories.name}</p> */}
        <h2 className={styles.contentsTitle}>日程</h2>
        {/* <p className={styles.contents}>{workHistories.name}</p> */}
        <h2 className={styles.contentsTitle}>職歴</h2>
        {/* <p className={styles.contents}>{workHistories.name}</p> */}
      </div>
      <div className={styles.buttons}>
        <button id="delete">キャンセル</button>
        <button id="update">更新</button>
      </div>
    </div>
  );
};
export default editWorkHistory;
