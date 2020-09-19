import React from "react";
import styles from "./styles.module.scss";

const Button = ({ text, type = "primary", onClick }) => {
  return (
    <button
      className={`${styles.button} ${
        type === "primary" ? styles.primary : styles.secondary
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
