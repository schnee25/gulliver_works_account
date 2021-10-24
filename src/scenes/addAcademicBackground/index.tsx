import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { AcademicBackgroundType } from "../../data/AcademicBackground";
import { HttpClient } from "../../utilities/axiosInstance";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";

const addAcademicBackground = () => {
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
      <div></div>
    </div>
  );
};
export default addAcademicBackground;
