import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { ProfileType } from "../../data/Profile";
import { HttpClient } from "../../utilities/axiosInstance";
import profileBackground from "../../scenes/myPage/images/profileTopBackground.jpg";
import profileIcon from "../../scenes/myPage/images/profIcon.png";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";

const EditBasicInfo = () => {
  const [Profiles, setProfile] = useState<ProfileType>();
  const [open, setOpen] = React.useState(false);
  const [post, setPosts] = useState([]);
  const { account } = useCurrentAccount();

  console.log("hoge");

  useEffect(() => {
    HttpClient.request({
      method: "GET",
      url: `${APIHost.APP}/accounts/${account?.id}`,
      // url: "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts",
    }).then((res) => {
      setProfile(res.data.profile);
    });
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>プロフィール</h1>
        <div className={styles.profileTopImages}>
          <img src={profileBackground} alt="" className={styles.profileBackground} />
          <img src={profileIcon} alt="" className={styles.profileIcon} />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.images}></div>
        <div className={styles.container}>
          <h2 className={styles.contentsTitle}>名前</h2>
          <p className={styles.contents}>
            {Profiles?.lastName}
            {Profiles?.firstName}
          </p>
          <h2 className={styles.contentsTitle}>住まい</h2>
          <p className={styles.contents}>{Profiles?.address}</p>
          <h2 className={styles.contentsTitle}>性別</h2>
          <p className={styles.contents}></p>
          <h2 className={styles.contentsTitle}>日程</h2>
        </div>
      </div>
    </div>
  );
};
export default EditBasicInfo;
