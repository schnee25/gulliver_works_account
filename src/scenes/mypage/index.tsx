import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import axios from "axios";
import { ProfileType } from "../../data/Profile";
import { WorkHistoryType } from "../../data/WorkHistory";
import { AcademicHistoryType } from "../../data/AcademicHistory";
import { HttpClient } from "../../utilities/axiosInstance";
import profileBackground from "./images/profileTopBackground.jpg";
import profileIcon from "./images/profIcon.png";
import editButton from "./button";

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
      setProfile(res.data.profile);
      setWorkHistory(res.data.workHistories);
      setAcademicHistory(res.data.academicHistories);
    });
  }, []);

  // test
  return (
    <div className={styles.page}>
      <div className={styles.profileHeader}>
        <div className={styles.profileHeaderBackground}>
          <img src={profileBackground} alt="" className={styles.profileTopBackground} />
        </div>
        <div className={styles.profileOverview}>
          <img src={profileIcon} alt="" className={styles.profileTopBackground} />

          <div className={styles.contentsTop}>
            <p className={styles.name}>{Profiles?.lastName}</p>
            <p className={styles.name}>{Profiles?.firstName}</p>
            <p className={styles.subtitleTop}>住まい</p> <p>{Profiles?.address}</p>
            <p className={styles.subtitleTop}>最終学歴</p>{" "}
            {academicHistories && <p>{academicHistories[0].name}</p>}
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.selfIntroduction}>
          <h3 className={styles.subtitle}>自己紹介</h3>
          <div className={styles.contentsOverAll}>
            <div className={styles.profContents}>
              <div className={styles.contentsMain}>
                <p>{Profiles?.biography}</p>
              </div>
              {editButton}
            </div>
          </div>
        </div>
        <div className={styles.workHistories}>
          <h3 className={styles.subtitle}>職歴</h3>
          <div className={styles.contentsOverAll}>
            {workHistories?.map((workHistory) => {
              return (
                <div key={workHistory.id} className={styles.workHistory}>
                  <div className={styles.dates}>
                    <p className={styles.date}>{workHistory.sinceDate}-</p>
                    <p className={styles.date}>{workHistory.untilDate}</p>
                  </div>
                  <div className={styles.contents}>
                    <div className={styles.contentsMain}>
                      <p className={styles.name}>{workHistory.name}</p>
                      <p className={styles.position}>{workHistory.position}</p>
                    </div>
                    {editButton}
                    <p className={styles.jobSummary}>{workHistory.jobSummary}</p>
                  </div>
                </div>
              );
            })}
            <button onClick={() => console.log("職歴を追加")} className={styles.add}>
              職歴を追加
            </button>
          </div>
        </div>
        <div className={styles.academicBackgrounds}>
          <h3 className={styles.subtitle}>学歴</h3>
          <div className={styles.contentsOverAll}>
            {academicHistories?.map((academicHistory) => {
              return (
                <div key={academicHistory.id} className={styles.academicBackground}>
                  <div className={styles.dates}>
                    <p className={styles.date}>{academicHistory.sinceDate}-</p>
                    <p className={styles.date}>{academicHistory.untilDate}</p>
                  </div>
                  <div className={styles.contents}>
                    <div className={styles.contentsMain}>
                      <p className={styles.name}>{academicHistory.name}</p>
                      <p className={styles.faculty}>{academicHistory.faculty}</p>
                    </div>
                    {editButton}
                  </div>
                </div>
              );
            })}
            <button onClick={() => console.log("学歴を追加")} className={styles.add}>
              学歴を追加
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApplicantMyPage;
