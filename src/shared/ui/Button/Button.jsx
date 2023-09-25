import React from "react";
import cls from "./Button.module.css";

const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      type="button"
      className={cls.button}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
