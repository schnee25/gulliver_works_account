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
  visible: boolean;
  onClick: () => void;
}

const AddWorkHistoryModal: React.FC<Props> = ({ visible, onClick }) => {
  return (
    <React.Fragment>
      {/* 職歴追加 */}
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
            <CustomButton onClick={onClick} className={styles.cancel}>
              キャンセル
            </CustomButton>
            <CustomButton className={styles.update} onClick={() => console.log("update")}>
              更新
            </CustomButton>{" "}
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AddWorkHistoryModal;
