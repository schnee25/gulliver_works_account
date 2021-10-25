import React from "react";
import styles from "./style.module.scss";

interface Props {
  onClick: () => void;
  color: string;
  children?: React.ReactNode;
  id: string;
}

const Button: React.FC<Props> = ({ onClick, color, children, id }) => {
  return (
    <button
      className={styles.button}
      id={id}
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
