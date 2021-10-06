import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";
import { ProfileType } from "../../data/Profile";
import { WorkHistoryType } from "../../data/WorkHistory";
import { AcademicHistoryType } from "../../data/AcademicHistory";
import { HttpClient } from "../../utilities/axiosInstance";
import profileImg from "./images/icon.svg";

const ApplicantMyPage = () => {
  const [Profiles, setProfile] = useState<ProfileType>();
  const [workHistories, setWorkHistory] = useState<WorkHistoryType[]>();
  const [academicHistories, setAcademicHistory] = useState<AcademicHistoryType[]>();
  const [open, setOpen] = React.useState(false);
  const [post, setPosts] = useState([]);
  useEffect(() => {
    HttpClient.request({
      method: "GET",
      url: "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts",
    }).then((res) => {
      setPosts(res.data);
      const Profiles = res.data.profile;
      const workHistories = res.data.workHistories;
      const academicHistories = res.data.academicHistories;

      setProfile(res.data.profile);
      setWorkHistory(res.data.workHistories);
      setAcademicHistory(res.data.academicHistories);
    });
  }, []);
  console.log(academicHistories);

  return (
    <div className={styles.page}>
      <div className={styles.profileHeader}>
        <img src="" alt="" className={styles.profileTopBackground} />
        <div className={styles.profileOverview}>
          {/* <img src={profileImg} alt="" /> */}
          <div>
            <p className={styles.subtitleTop}>住まい</p>{" "}
            <p className={styles.subtitleTop}>最終学歴</p>
          </div>
          <div className={styles.contentsTop}>
            <p>{Profiles?.address}</p>
            {academicHistories && <p>{academicHistories[0].name}</p>}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.selfIntroduction}>
          <h3 className={styles.subtitle}>自己紹介</h3>
          <p>{Profiles?.biography}</p>
        </div>
        <div className={styles.workHistory}>
          <h3 className={styles.subtitle}>職歴</h3>
          <div className={styles.contents}>
            {workHistories?.map((workHistory) => {
              return (
                <div key={workHistory.id}>
                  <p className={styles.date}>{workHistory.sinceDate}</p>
                  <p className={styles.date}>{workHistory.untilDate}</p>
                  <p className={styles.mainContent}>{workHistory.name}</p>
                  <p className={styles.position}>{workHistory.position}</p>
                  <p className={styles.jobSummary}>{workHistory.jobSummary}</p>
                </div>
              );
            })}
            <button onClick={() => console.log("編集する")}>編集する</button>
          </div>
          <button onClick={() => console.log("職歴を追加")}>職歴を追加</button>
        </div>
        <div className={styles.academicBackground}>
          <h3 className={styles.subtitle}>学歴</h3>
          {academicHistories?.map((academicHistory) => {
            return (
              <div key={academicHistory.id}>
                <p className={styles.mainContent}>{academicHistory.name}</p>
                <p className={styles.subContent}>{academicHistory.faculty}</p>
              </div>
            );
          })}
          <div className={styles.contents}>
            <button onClick={() => console.log("編集する")}>編集する</button>
          </div>
          <button onClick={() => console.log("学歴を追加")}>学歴を追加</button>
        </div>
      </div>
    </div>
  );
};
export default ApplicantMyPage;
