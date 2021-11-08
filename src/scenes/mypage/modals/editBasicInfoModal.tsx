import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../myPage/style.module.scss";
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
            {profiles?.lastName}
            {profiles?.firstName}
          </p>
          <h2 className={styles.modalContentsTitle}>住まい</h2>
          <p className={styles.modalContents}>{profiles?.address}</p>
          <h2 className={styles.modalContentsTitle}>性別</h2>
          <p className={styles.modalContents}>
            <p className={styles.gender}>{profiles?.gender}</p>
          </p>
          <h2 className={styles.modalContentsTitle}>日程</h2>
          <input className={styles.modalContents} type="date" name="" id="" />
        </div>

        <div className={styles.modalButtons}>
          <div className={styles.modalButtonsLeft}></div>
          <div className={styles.modalButtonsRight}>
            <CustomButton
              //   onClick={toggleIsEditBasicInfoModalModal}
              onClick={onClick}
              className={styles.cancel}
            >
              キャンセル
            </CustomButton>
            <CustomButton className={styles.update} onClick={() => console.log("update")}>
              更新
            </CustomButton>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default EditBasicInfoModal;
