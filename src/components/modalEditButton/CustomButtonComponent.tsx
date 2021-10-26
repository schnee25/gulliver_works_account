import React from "react";
import styles from "../../scenes/myPage";

interface Props {
  className?: string;
  onClick: () => void;
  color: string;
  children?: React.ReactNode;
  id: string;
}

const Button: React.FC<Props> = ({ className, onClick, color, children, id }) => {
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

export default Button;
