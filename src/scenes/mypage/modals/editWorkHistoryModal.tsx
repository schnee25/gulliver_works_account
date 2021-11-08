import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../../myPage/style.module.scss";
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
  workHistories?: WorkHistoryType;
  visible: boolean;
  onClick: () => void;
}

const EditWorkHistoryModal: React.FC<Props> = ({ workHistories, visible, onClick }) => {
  return (
    <React.Fragment>
      ;{/* 職歴 */}
      <Modal
        title=""
        visible={visible}
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
            <CustomButton className={styles.delete} onClick={() => console.log("delete")}>
              削除する
            </CustomButton>
          </div>
          <div className={styles.modalButtonsRight}>
            <CustomButton
              onClick={onClick}
              // onClick={toggleIsEditWorkHistoryModalVisible}
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

export default EditWorkHistoryModal;
