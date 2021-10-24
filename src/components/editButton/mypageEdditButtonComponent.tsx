import React from "react";
import styles from "./style.module.scss";

interface Props {
  onClick: () => void;
  children?: React.ReactNode;
}

const EditButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick} className={styles.editButton}>
        {children}
      </button>
    </div>
  );
};

export default EditButton;