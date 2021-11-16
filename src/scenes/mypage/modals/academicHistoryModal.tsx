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
import AcademicModalForm from "../../../components/ModalForm/AcademicModalFormComponent";

interface Props {
  academicHistories?: AcademicHistoryType;
  visible: boolean;
  onClick: () => void;
}

const AcademicHistoryModal: React.FC<Props> = ({ academicHistories, visible, onClick }) => {
  return (
    <React.Fragment>
      ;{/* 学歴 */}
      <Modal
        title=""
        visible={visible}
        className={styles.modal}
        footer={null}
        destroyOnClose={true}
        closable={false}
      >
        <div className={styles.modalHeader}>
          <h1>学歴</h1>
        </div>
        <div className={styles.modalMain}>
          <AcademicModalForm />
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
              // onClick={toggleIsEditAcademicHistoryModalVisible}
              onClick={onClick}
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

export default AcademicHistoryModal;
