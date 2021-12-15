import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../style.module.scss";
import axios from "axios";
import { ProfileType } from "../../../data/Profile";
import { WorkHistoryType } from "../../../data/WorkHistory";
import { AcademicHistoryType } from "../../../data/AcademicHistory";
import { HttpClient } from "../../../utilities/axiosInstance";
import profileBackground from "../images/profileTopBackground.jpg";
import profileIcon from "../images/profIcon.png";
import { useCurrentAccount } from "../../../hooks/useCurrentAccount";
import { APIHost } from "../../../utilities/constants";
import CustomButton from "../../../components/Button/CustomButtonComponent";
import { Modal, Button } from "antd";

interface Props {
  profiles?: ProfileType;
  visible: boolean;
  onClick: () => void;
}

const EditBasicInfoModal: React.FC<Props> = ({ profiles, visible, onClick }) => {
  const [name, setName] = useState("");
  const handleLastNameChange = (event: any) => {
    setName(event.target.value);
    const changedLastName = event.target.value;
    console.log(changedLastName);
  };
  const handleFirstNameChange = (event: any) => {
    setName(event.target.value);
    const changedFirstName = event.target.value;
    console.log(changedFirstName);
  };
  const handleAddressChange = (event: any) => {
    setName(event.target.value);
    const changedAddress = event.target.value;
    console.log(changedAddress);
  };
  const handleGenderChange = (event: any) => {
    setName(event.target.value);
    const changedGender = event.target.value;
    console.log(changedGender);
  };

  const handleSubmit = () => {
    console.log(name);
  };

  return (
    <React.Fragment>
      {/* プロフィール */}
      <Modal
        title=""
        visible={visible}
        className={styles.modal}
        footer={null}
        destroyOnClose={true}
        closable={false}
      >
        <form
          action="https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts"
          method="post"
          className={styles.modalForm}
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
            <div className={styles.modalProfileName}>
              <input
                className={styles.modalContents}
                id="lastName"
                type="text"
                defaultValue={profiles?.lastName}
                onChange={handleLastNameChange}
              />
              <input
                className={styles.modalContents}
                id="firstName"
                type="text"
                defaultValue={profiles?.firstName}
                onChange={handleFirstNameChange}
              />
            </div>
            <h2 className={styles.modalContentsTitle}>住まい</h2>
            <input
              className={styles.modalContents}
              type="text"
              defaultValue={profiles?.address}
              onChange={handleAddressChange}
            />
            <h2 className={styles.modalContentsTitle}>性別</h2>
            <input
              className={styles.modalContents}
              type="text"
              defaultValue={profiles?.gender}
              onChange={handleGenderChange}
            />
            <h2 className={styles.modalContentsTitle}>日程</h2>
            <input className={styles.modalContents} type="date" name="" id="" />
          </div>

          <div className={styles.modalButtons}>
            <div className={styles.modalButtonsLeft}></div>
            <div className={styles.modalButtonsRight}>
              <CustomButton
                //   onClick={toggleIsEditBasicInfoModalModal}
                onClick={onClick}
                className={styles.modalButton}
                color="gray"
              >
                キャンセル
              </CustomButton>
              <CustomButton
                color="green"
                className={styles.modalButton}
                // onClick={() => console.log("update")}
                onClick={handleSubmit}
              >
                更新
              </CustomButton>
            </div>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default EditBasicInfoModal;
