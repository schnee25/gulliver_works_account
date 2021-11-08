import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";
import axios from "axios";
import { ProfileType } from "../../data/Profile";
import { WorkHistoryType } from "../../data/WorkHistory";
import { AcademicHistoryType } from "../../data/AcademicHistory";
import { HttpClient } from "../../utilities/axiosInstance";
import profileBackground from "./images/profileTopBackground.jpg";
import profileIcon from "./images/profIcon.png";
import { useCurrentAccount } from "../../hooks/useCurrentAccount";
import { APIHost } from "../../utilities/constants";
import CustomButton from "../../components/Button/CustomButtonComponent";
import EditBasicInfoModal from "../myPage/modals/editBasicInfoModal";
import EditSelfIntroductionModal from "./modals/editSelfIntroductionModal";
import AddAcademicHistoryModal from "./modals/addAcademicHistoryModal";
import AddWorkHistoryModal from "../myPage/modals/addWorkHistoryModal";
import EditAcademicHistoryModal from "../myPage/modals/editAcademicHistoryModal";
import EditWorkHistoryModal from "../myPage/modals/editWorkHistoryModal";
import { Modal, Button } from "antd";

const ApplicantMyPage = () => {
  const [Profiles, setProfile] = useState<ProfileType>();
  const [workHistories, setWorkHistory] = useState<WorkHistoryType[]>();
  const [academicHistories, setAcademicHistory] = useState<AcademicHistoryType[]>();
  const [open, setOpen] = React.useState(false);
  const [post, setPosts] = useState([]);
  const { account } = useCurrentAccount();

  useEffect(() => {
    HttpClient.request({
      method: "GET",
      url: `${APIHost.APP}/accounts/${account?.id}`,
      // url: "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts",
    }).then((res) => {
      setProfile(res.data.profile);
      setWorkHistory(res.data.workHistories);
      setAcademicHistory(res.data.academicHistories);
    });
  }, []);

  const [isEditBasicInfoModalVisible, setIsEditBasicInfoModalModal] = useState(false);
  const toggleIsEditBasicInfoModalModal = () => {
    setIsEditBasicInfoModalModal(!isEditBasicInfoModalVisible);
  };
  const [isEditSelfIntroductionModalVisible, setIsEditSelfIntroductionModalModal] = useState(false);
  const toggleIsEditSelfIntroductionModalModal = () => {
    setIsEditSelfIntroductionModalModal(!isEditSelfIntroductionModalVisible);
  };
  const [isAddAcademicHistoryModalVisible, setIsAddAcademicHistoryModalModal] = useState(false);
  const toggleIsAddAcademicHistoryModal = () => {
    setIsAddAcademicHistoryModalModal(!isAddAcademicHistoryModalVisible);
  };
  const [isAddWorkHistoryModalVisible, setIsAddWorkHistoryModalVisible] = useState(false);
  const toggleIsAddWorkHistoryModalVisible = () => {
    setIsAddWorkHistoryModalVisible(!isAddWorkHistoryModalVisible);
  };
  const [isAcademicHistoryModalVisible, setIsEditAcademicHistoryModalModal] = useState(false);
  const toggleIsEditAcademicHistoryModalVisible = () => {
    setIsEditAcademicHistoryModalModal(!isAcademicHistoryModalVisible);
  };
  const [isWorkHistoryModalVisible, setIsEditWorkHistoryModalVisible] = useState(false);
  const toggleIsEditWorkHistoryModalVisible = () => {
    setIsEditWorkHistoryModalVisible(!isWorkHistoryModalVisible);
  };

  return (
    <React.Fragment>
      <div className={styles.page}>
        <div className={styles.profileHeader}>
          <div className={styles.profileHeaderBackground}>
            <img src={profileBackground} alt="" className={styles.profileTopBackground} />
          </div>

          <div className={styles.profileOverview}>
            <img src={profileIcon} alt="" className={styles.profileIcon} />
            <div className={styles.contentsTop}>
              <p className={styles.name}>{Profiles?.lastName}</p>
              <p className={styles.name}>{Profiles?.firstName}</p>
              <p className={styles.subtitleTop}>住まい</p> <p>{Profiles?.address}</p>
              <p className={styles.subtitleTop}>最終学歴</p>
              {academicHistories && <p>{academicHistories[0].name}</p>}
            </div>
            <CustomButton className={styles.editButton} onClick={toggleIsEditBasicInfoModalModal}>
              プロフィールを編集
            </CustomButton>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.selfIntroduction}>
            <CustomButton
              className={styles.editButton}
              onClick={toggleIsEditSelfIntroductionModalModal}
            >
              編集
            </CustomButton>
            <h3 className={styles.subtitle}>自己紹介</h3>
            <div className={styles.contentsOverAll}>
              <div className={styles.profContents}>
                <div className={styles.contentsMain}>
                  <p>{Profiles?.biography}</p>
                </div>
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
                      <CustomButton
                        className={styles.editButton}
                        onClick={toggleIsEditWorkHistoryModalVisible}
                      >
                        編集
                      </CustomButton>
                      <div className={styles.contentsMain}>
                        <p className={styles.name}>{workHistory.name}</p>
                        <p className={styles.position}>{workHistory.position}</p>
                      </div>
                      <p className={styles.jobSummary}>{workHistory.jobSummary}</p>
                    </div>
                  </div>
                );
              })}
              <CustomButton onClick={toggleIsAddWorkHistoryModalVisible} className={styles.add}>
                職歴を追加
              </CustomButton>
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
                      <CustomButton
                        className={styles.editButton}
                        onClick={toggleIsEditAcademicHistoryModalVisible}
                      >
                        編集
                      </CustomButton>
                      <div className={styles.contentsMain}>
                        <p className={styles.name}>{academicHistory.name}</p>
                        <p className={styles.faculty}>{academicHistory.faculty}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <button onClick={toggleIsAddAcademicHistoryModal} className={styles.add}>
                学歴を追加
              </button>
            </div>
          </div>
        </div>
      </div>

      <EditBasicInfoModal
        profiles={Profiles}
        visible={isEditBasicInfoModalVisible}
        onClick={toggleIsEditBasicInfoModalModal}
      ></EditBasicInfoModal>
      <EditSelfIntroductionModal
        profiles={Profiles}
        visible={isEditSelfIntroductionModalVisible}
        onClick={toggleIsEditSelfIntroductionModalModal}
      ></EditSelfIntroductionModal>
      <AddAcademicHistoryModal
        visible={isAddAcademicHistoryModalVisible}
        onClick={toggleIsAddAcademicHistoryModal}
      ></AddAcademicHistoryModal>
      <AddWorkHistoryModal
        visible={isAddWorkHistoryModalVisible}
        onClick={toggleIsAddWorkHistoryModalVisible}
      ></AddWorkHistoryModal>
      <EditAcademicHistoryModal
        // academicHistories={}
        visible={isAcademicHistoryModalVisible}
        onClick={toggleIsEditAcademicHistoryModalVisible}
      ></EditAcademicHistoryModal>
      <EditWorkHistoryModal
        // workHistories={workHistories}
        visible={isWorkHistoryModalVisible}
        onClick={toggleIsEditWorkHistoryModalVisible}
      ></EditWorkHistoryModal>
    </React.Fragment>
  );
};
export default ApplicantMyPage;
