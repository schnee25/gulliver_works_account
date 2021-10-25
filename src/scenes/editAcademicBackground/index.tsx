import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { AcademicBackgroundType } from "../../data/AcademicBackground";
import { HttpClient } from "../../utilities/axiosInstance";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";
import Button from "../../components/modalEditButton/CustomButtonComponent";

const editAcademicBackground = () => {
  const [academicHistories, setAcademicBackground] = useState<AcademicBackgroundType[]>();
  const [open, setOpen] = React.useState(false);
  const [post, setPosts] = useState([]);
  const { account } = useCurrentAccount();
  useEffect(() => {
    HttpClient.request({
      method: "GET",
      url: `${APIHost.APP}/accounts/${account?.id}`,
      // url: "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts",
    }).then((res) => {
      setAcademicBackground(res.data.academicHistories);
    });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>職歴</h1>
      </div>
      <div className={styles.main}>
        <h2 className={styles.contentsTitle}>学校名</h2>
        <div className={styles.contents}></div>
        <h2 className={styles.contentsTitle}>学部･学科</h2>
        <div className={styles.contents}></div>
        <h2 className={styles.contentsTitle}>日程</h2>
        <div className={styles.contents}></div>
      </div>
      <div className={styles.buttons}>
        <Button color="#05C757" onClick={() => console.log("cancel")} id={"cancel"}>
          キャンセル
        </Button>
        <Button color="#05C757" onClick={() => console.log("update")} id={"update"}>
          更新
        </Button>
      </div>
    </div>
  );
};
export default editAcademicBackground;
