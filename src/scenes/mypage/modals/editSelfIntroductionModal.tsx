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
  profiles?: ProfileType;
  visible: boolean;
  onClick: () => void;
}

const EditSelfIntroductionModal: React.FC<Props> = ({ profiles, visible, onClick }) => {
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
          <h1>自己紹介</h1>
        </div>
        <div className={styles.modalMain}>
          <div className={styles.modalContents}>
            <p>{profiles?.biography}</p>
          </div>
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
            </CustomButton>{" "}
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default EditSelfIntroductionModal;
