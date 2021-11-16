import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../style.module.scss";
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
import WorkModalForm from "../../../components/ModalForm/WorkModalFormComponent";

interface Props {
  workHistories?: WorkHistoryType;
  visible: boolean;
  onClick: () => void;
}

const WorkHistoryModal: React.FC<Props> = ({ workHistories, visible, onClick }) => {
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
          <WorkModalForm />
        </div>
        <div className={styles.modalButtons}>
          <div className={styles.modalButtonsLeft}>
            <CustomButton
              className={styles.modalButton}
              onClick={() => console.log("delete")}
              color="white"
            >
              削除する
            </CustomButton>
          </div>
          <div className={styles.modalButtonsRight}>
            <CustomButton
              onClick={onClick}
              // onClick={toggleIsEditWorkHistoryModalVisible}
              className={styles.modalButton}
              color="gray"
            >
              キャンセル
            </CustomButton>
            <CustomButton
              color="green"
              className={styles.modalButton}
              onClick={() => console.log("update")}
            >
              更新
            </CustomButton>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default WorkHistoryModal;
