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
import EditButton from "../../components/editButton/mypageEdditButtonComponent";
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

  // EditWorkHistoryModalModalコンポーネントの表示の状態を定義する
  const [isWorkHistoryModalVisible, setIsEditWorkHistoryModalVisible] = useState(false);
  const toggleIsEditWorkHistoryModalVisible = () => {
    setIsEditWorkHistoryModalVisible(!isWorkHistoryModalVisible);
  };
  const [isAddWorkHistoryModalVisible, setIsAddWorkHistoryModalVisible] = useState(false);
  const toggleIsAddWorkHistoryModalVisible = () => {
    setIsAddWorkHistoryModalVisible(!isAddWorkHistoryModalVisible);
  };

  const [isEditBasicInfoModalVisible, setIsEditBasicInfoModalModal] = useState(false);
  const toggleIsEditBasicInfoModalModal = () => {
    setIsEditBasicInfoModalModal(!isEditBasicInfoModalVisible);
  };

  const [isAcademicHistoryModalVisible, setIsEditAcademicHistoryModalModal] = useState(false);
  const toggleIsEditAcademicHistoryModalVisible = () => {
    setIsEditAcademicHistoryModalModal(!isAcademicHistoryModalVisible);
  };
  const [isAddAcademicHistoryModalVisible, setIsAddAcademicHistoryModalModal] = useState(false);
  const toggleIsAddAcademicHistoryModal = () => {
    setIsAddAcademicHistoryModalModal(!isAcademicHistoryModalVisible);
  };

  //

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
              <p className={styles.subtitleTop}>最終学歴</p>{" "}
              {academicHistories && <p>{academicHistories[0].name}</p>}
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.selfIntroduction}>
            <EditButton onClick={toggleIsEditBasicInfoModalModal}>編集</EditButton>
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
                      <EditButton onClick={toggleIsEditWorkHistoryModalVisible}>編集</EditButton>

                      <div className={styles.contentsMain}>
                        <p className={styles.name}>{workHistory.name}</p>
                        <p className={styles.position}>{workHistory.position}</p>
                      </div>
                      <p className={styles.jobSummary}>{workHistory.jobSummary}</p>
                    </div>
                  </div>
                );
              })}
              <button onClick={toggleIsAddWorkHistoryModalVisible} className={styles.add}>
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
                      <EditButton onClick={toggleIsEditAcademicHistoryModalVisible}>
                        編集
                      </EditButton>
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
      {/* モーダル */}
      {/* 編集 */}
      {/* プロフィール */}
      <Modal
        title=""
        visible={isEditBasicInfoModalVisible}
        className={styles.modal}
        footer={null}
        destroyOnClose={true}
        closable={false}
      >
        <div className={styles.modalHeader}>
          <h1>プロフィール</h1>
          <div className={styles.modalProfileTopImages}>
            <img src={profileBackground} alt="" className={styles.modalProfileBackground} />
            <img src={profileIcon} alt="" className={styles.modalProfileIcon} />
          </div>
        </div>
        <div className={styles.modalMain}>
          <h2 className={styles.modalContentsTitle}>名前</h2>
          <p className={styles.modalContents}>
            {Profiles?.lastName}
            {Profiles?.firstName}
          </p>
          <h2 className={styles.modalContentsTitle}>住まい</h2>
          <p className={styles.modalContents}>{Profiles?.address}</p>
          <h2 className={styles.modalContentsTitle}>性別</h2>
          <p className={styles.modalContents}></p>
          <h2 className={styles.modalContentsTitle}>日程</h2>
          <input className={styles.modalContents} type="date" name="" id="" />
        </div>

        <div className={styles.modalButtons}>
          <div className={styles.modalButtonsLeft}></div>
          <div className={styles.modalButtonsRight}>
            <Button color="#05C757" onClick={toggleIsEditBasicInfoModalModal} id={"cancel"}>
              キャンセル
            </Button>
            <Button color="#05C757" className={styles.update} onClick={() => console.log("update")}>
              更新
            </Button>{" "}
          </div>
        </div>
      </Modal>
      ;{/* 職歴 */}
      <Modal
        title=""
        visible={isWorkHistoryModalVisible}
        className={styles.modal}
        footer={null}
        destroyOnClose={true}
        closable={false}
      >
        <div className={styles.modalHeader}>
          <h1>職歴</h1>
        </div>
        <div className={styles.modalMain}>
          <h2 className={styles.modalContentsTitle}>企業名</h2>
          <div className={styles.modalContents}></div>
          <h2 className={styles.modalContentsTitle}>部署･役職</h2>
          <div className={styles.modalContents}></div>
          <h2 className={styles.modalContentsTitle}>日程</h2>
          <div className={styles.modalDates}>
            <input className={styles.modalContents} type="date" name="" id="" />
            <input className={styles.modalContents} type="date" name="" id="" />
          </div>
          <h2 className={styles.modalContentsTitle}>職歴</h2>
          <div className={styles.modalContents}></div>
        </div>
        <div className={styles.modalButtons}>
          <div className={styles.modalButtonsLeft}>
            <Button color="#05C757" className={styles.delete} onClick={() => console.log("delete")}>
              削除する
            </Button>
          </div>
          <div className={styles.modalButtonsRight}>
            <Button color="#05C757" onClick={toggleIsEditWorkHistoryModalVisible} id={"cancel"}>
              キャンセル
            </Button>
            <Button color="#05C757" className={styles.update} onClick={() => console.log("update")}>
              更新
            </Button>{" "}
          </div>
        </div>
      </Modal>
      ;{/* 学歴 */}
      <Modal
        title=""
        visible={isAcademicHistoryModalVisible}
        className={styles.modal}
        footer={null}
        destroyOnClose={true}
        closable={false}
      >
        <div className={styles.modalHeader}>
          <h1>学歴</h1>
        </div>
        <div className={styles.modalMain}>
          <h2 className={styles.modalContentsTitle}>学校名</h2>
          <div className={styles.modalContents}></div>
          <h2 className={styles.modalContentsTitle}>学部･学科</h2>
          <div className={styles.modalContents}></div>
          <h2 className={styles.modalContentsTitle}>日程</h2>
          <div className={styles.modalDates}>
            <input className={styles.modalContents} type="date" name="" id="" />
            <input className={styles.modalContents} type="date" name="" id="" />
          </div>
        </div>
        <div className={styles.modalButtons}>
          <div className={styles.modalButtonsLeft}>
            <Button color="#05C757" className={styles.delete} onClick={() => console.log("delete")}>
              削除する
            </Button>
          </div>
          <div className={styles.modalButtonsRight}>
            <Button color="#05C757" onClick={toggleIsAddAcademicHistoryModal} id={"cancel"}>
              キャンセル
            </Button>
            <Button color="#05C757" className={styles.update} onClick={() => console.log("update")}>
              更新
            </Button>{" "}
          </div>
        </div>
      </Modal>
      ;{/* 追加ここから */}
      {/* 職歴追加 */}
      <Modal
        title=""
        visible={isAddWorkHistoryModalVisible}
        className={styles.modal}
        footer={null}
        destroyOnClose={true}
        closable={false}
      >
        <div className={styles.modalHeader}>
          <h1>職歴</h1>
        </div>
        <div className={styles.modalMain}>
          <h2 className={styles.modalContentsTitle}>企業名</h2>
          <input className={styles.modalContents} type="text" name="" id="" />
          <h2 className={styles.modalContentsTitle}>部署･役職</h2>
          <input className={styles.modalContents} type="text" name="" id="" />
          <h2 className={styles.modalContentsTitle}>日程</h2>
          <div className={styles.modalDates}>
            <input className={styles.modalContents} type="date" name="" id="" />
            <input className={styles.modalContents} type="date" name="" id="" />
          </div>
          <h2 className={styles.modalContentsTitle}>職歴</h2>
          <input
            className={styles.modalContents}
            type="text"
            name=""
            id=""
            placeholder="　業務内容や結果"
          />
        </div>
        <div className={styles.modalButtons}>
          <div className={styles.modalButtonsLeft}></div>
          <div className={styles.modalButtonsRight}>
            <Button color="#05C757" onClick={toggleIsEditAcademicHistoryModalVisible} id={"cancel"}>
              キャンセル
            </Button>
            <Button color="#05C757" className={styles.update} onClick={() => console.log("update")}>
              更新
            </Button>{" "}
          </div>
        </div>
      </Modal>
      {/* 学歴追加 */}
      <Modal
        title=""
        visible={isAddAcademicHistoryModalVisible}
        className={styles.modal}
        footer={null}
        destroyOnClose={true}
        closable={false}
      >
        <div className={styles.modalHeader}>
          <h1>学歴</h1>
        </div>
        <div className={styles.modalMain}>
          <h2 className={styles.modalContentsTitle}>学校名</h2>
          <input className={styles.modalContents} type="text" name="" id="" />
          <h2 className={styles.modalContentsTitle}>学部･学科</h2>
          <input className={styles.modalContents} type="text" name="" id="" />
          <h2 className={styles.modalContentsTitle}>日程</h2>
          <div className={styles.modalDates}>
            <input className={styles.modalContents} type="date" name="" id="" />
            <input className={styles.modalContents} type="date" name="" id="" />
          </div>
        </div>
        <div className={styles.modalButtons}>
          <div className={styles.modalButtonsLeft}></div>
          <div className={styles.modalButtonsRight}>
            <Button color="#05C757" onClick={toggleIsAddWorkHistoryModalVisible} id={"cancel"}>
              キャンセル
            </Button>
            <Button color="#05C757" className={styles.update} onClick={() => console.log("update")}>
              更新
            </Button>{" "}
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};
export default ApplicantMyPage;
