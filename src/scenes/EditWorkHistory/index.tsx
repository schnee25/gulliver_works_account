import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { WorkHistoryType } from "../../data/WorkHistory";
import { HttpClient } from "../../utilities/axiosInstance";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";

const EditWorkHistory = () => {
  const [workHistories, setWorkHistory] = useState<WorkHistoryType[]>();
  const [open, setOpen] = React.useState(false);
  const [post, setPosts] = useState([]);
  const { account } = useCurrentAccount();
  useEffect(() => {
    HttpClient.request({
      method: "GET",
      url: `${APIHost.APP}/accounts/${account?.id}`,
      // url: "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts",
    }).then((res) => {
      setWorkHistory(res.data.workHistories);
    });
  }, []);
  console.log(workHistories);
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
        <button id="delete">削除する</button>
        <button id="delete">キャンセル</button>
        <button id="update">更新</button>
      </div>
    </div>
  );
};
export default EditWorkHistory;
