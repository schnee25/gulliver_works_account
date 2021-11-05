import React, { Children } from "react";
import styles from "../../scenes/myPage";

interface Props {
  className?: string;
  onClick: () => void;
  color?: string;
  id?: string;
}

const CustomButton: React.FC<Props> = ({ className, onClick, color, id, children }) => {
  return (
    <button
      className={className}
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
