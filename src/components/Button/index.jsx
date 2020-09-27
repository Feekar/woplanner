import React from "react";
import styles from "./styles.module.scss";

const Button = ({ text, type = "primary", onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${
        type === "primary" ? styles.primary : styles.secondary
      }`}
      onClick={onClick}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
