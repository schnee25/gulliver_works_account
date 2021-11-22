import React, { Children } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface Props {
  className?: string;
  onClick: () => void;
  color?: "green" | "gray" | string;
  id?: string;
}

const CustomButton: React.FC<Props> = ({ className, onClick, color, id, children }) => {
  return (
    <button
      className={classNames(
        styles.Button,
        {
          [styles.green]: color === "green",
          [styles.gray]: color === "gray",
          [styles.red]: color === "white",
        },
        className
      )}
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

export default CustomButton;
