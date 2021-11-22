import React, { Children } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
}

const WorkModalForm: React.FC<Props> = ({ className }) => {
  return (
    <form className={styles.modalForm}>
      <div>
        <label className={styles.modalFormContentsTitle} htmlFor="companyName">
          企業名
        </label>
        <input
          className={styles.modalFormContents}
          type="text"
          name="companyName"
          id="companyName"
          required
        />

        <label className={styles.modalFormContentsTitle} htmlFor="position">
          部署･役職
        </label>
        <input
          className={styles.modalFormContents}
          type="text"
          name="position"
          id="position"
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
            required
          />
          <label className={styles.modalFormContentsTitle} htmlFor="leavingDate"></label>
          <input
            className={styles.modalFormContents}
            type="date"
            name="leavingDate"
            id="leavingDate"
            required
          />
        </div>

        <label className={styles.modalFormContentsTitle} htmlFor="jobSummary">
          職歴
        </label>
        <input
          className={styles.modalFormContents}
          type="text"
          name="jobSummary"
          id="jobSummary"
          required
          placeholder="　業務内容や結果"
        />
      </div>
    </form>
  );
};

export default WorkModalForm;
