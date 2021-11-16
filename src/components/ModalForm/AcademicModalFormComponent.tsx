import React, { Children } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

const AcademicModalForm: React.FC<Props> = ({ className }) => {
  return (
    <form className={styles.modalForm}>
      <div>
        <label className={styles.modalFormContentsTitle} htmlFor="schoolName">
          学校名
        </label>
        <input
          className={styles.modalFormContents}
          type="text"
          name="schoolName"
          id="schoolName"
          required
        />
        <label className={styles.modalFormContentsTitle} htmlFor="schoolFaculty">
          学部･学科
        </label>
        <input
          className={styles.modalFormContents}
          type="text"
          name="schoolFaculty"
          id="schoolFaculty"
          required
        />{" "}
        <h2 className={styles.DateTitle}>日程</h2>
        <div className={styles.modalDates}>
          <label className={styles.modalFormContentsTitle} htmlFor="admissionDate"></label>
          <input
            className={styles.modalFormContents}
            type="date"
            name="admissionDate"
            id="admissionDate"
            required
          />
          <label className={styles.modalFormContentsTitle} htmlFor="graduationDate"></label>
          <input
            className={styles.modalFormContents}
            type="date"
            name="graduationDate"
            id="graduationDate"
            required
          />
        </div>
      </div>
    </form>
  );
};

export default AcademicModalForm;
