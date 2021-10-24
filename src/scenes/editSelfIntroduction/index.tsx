import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { ProfileType } from "../../data/Profile";
import { HttpClient } from "../../utilities/axiosInstance";
import profileBackground from "./image/Rectangle 180.png";
import profileIcon from "./image/Rectangle 181.png";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";

const editSelfIntroduction = () => {
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
        <h1>自己紹介</h1>
      </div>
      <div className={styles.main}>
        <p>{Profiles?.biography}</p>
      </div>
    </div>
  );
};
export default editSelfIntroduction;
