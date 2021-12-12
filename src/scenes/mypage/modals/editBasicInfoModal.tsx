import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
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
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const EditBasicInfoModal: React.FC<Props> = ({ profiles, visible, onClick }) => {
  // const test = () => {
  //   console.log("changed");
  // };

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const test = (e: any) => {
    const defaultValue = e.target.value;
    console.log(defaultValue);
  }; // e: any ??

  const [Profiles, setProfile] = useState<ProfileType>();
  const { handleSubmit } = useForm();

  const handleSubmitBiography = async (data: ProfileType) => {
    console.log("update");
    if (!profiles) return;
    const res = await HttpClient.request({
      method: "PUT",
      url: `${APIHost.APP}/accounts/${profiles?.id}`,
      // url: "https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/accounts",
      data: {
        id: profiles.id,
        firstName: profiles.firstName,
        lastName: profiles.lastName,
        gender: profiles.gender,
        phone: profiles.phone,
        postalCode: profiles.postalCode,
        address: profiles.address,
        dateOfBirth: profiles.dateOfBirth,
        biography: profiles.biography,
      },
    });
    alert("プロフィールを編集しました。");
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
        <div className={styles.modalHeader}>
          <h1>プロフィール</h1>
          <div className={styles.modalProfileTopImages}>
            <img src={profileBackground} alt="" className={styles.modalProfileBackground} />
            <img src={profileIcon} alt="" className={styles.modalProfileIcon} />
          </div>
        </div>

        <form
          className={styles.modalForm}
          // onSubmit={handleSubmitBiography}
        >
          <div>
            <label className={styles.modalFormContentsTitleName} htmlFor="Name">
              名前
            </label>

            <div className={styles.modalProfileName}>
              <input
                className={styles.modalFormContentsName}
                type="text"
                name="Name"
                id="lastName"
                defaultValue={profiles?.lastName}
                onChange={test}
                required
              />
              <input
                className={styles.modalFormContentsName}
                name="Name"
                id="firstName"
                type="text"
                onChange={test}
                defaultValue={profiles?.firstName}
              />
            </div>
            <label className={styles.modalFormContentsTitle} htmlFor="address">
              住まい
            </label>
            <input
              className={styles.modalFormContents}
              type="text"
              name="address"
              id="address"
              defaultValue={profiles?.address}
              onChange={test}
              required
            />

            <label className={styles.modalFormContentsTitle} htmlFor="gender">
              性別
            </label>
            <input
              className={styles.modalFormContents}
              type="text"
              name="gender"
              id="gender"
              defaultValue={profiles?.gender}
              onChange={test}
              required
            />

            <h2 className={styles.DateTitle}>日程</h2>
            <div className={styles.modalDates}>
              <label className={styles.modalFormContentsTitle} htmlFor="hireDate"></label>
              <input
                className={styles.modalFormContents}
                type="date"
                name="hireDate"
                id="hireDate"
                onChange={test}
                required
              />
              <label className={styles.modalFormContentsTitle} htmlFor="leavingDate"></label>
              <input
                className={styles.modalFormContents}
                type="date"
                name="leavingDate"
                id="leavingDate"
                onChange={test}
                required
              />
            </div>
          </div>
        </form>

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
            {/* <CustomButton
              color="green"
              className={styles.modalButton}
              type="submit"
              onClick={() => handleSubmitBiography}
            >
              更新
            </CustomButton> */}
            <button
              className={styles.modalButton}
              type="submit"
              // onClick={handleSubmitBiography}
            >
              更新
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default EditBasicInfoModal;
