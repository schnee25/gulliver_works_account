import React from "react";
import styles from "../../scenes/myPage";

interface Props {
  className?: string;
  onClick: () => void;
  color: string;

  id: string;
}

const Button: React.FC<Props> = ({ className, onClick, color, id }) => {
  return (
    <button
      className={className}
      id={id}
      onClick={onClick}
      style={{
        backgroundColor: color,
      }}
    ></button>
  );
};

export default Button;
