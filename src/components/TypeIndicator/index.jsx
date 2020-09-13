import React from "react";

import cardio from "../../content/images/cardio.svg";
import flexibility from "../../content/images/flexibility.svg";
import sport from "../../content/images/sport.svg";
import strength from "../../content/images/strength.svg";

import styles from "./styles.module.scss";

const TypeIndicator = ({ type }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case "strength":
        return strength;
      case "cardio":
        return cardio;
      case "sport":
        return sport;
      case "flexibility":
        return flexibility;
      default:
        return null;
    }
  };
  return (
    <div className={`${styles.typeIndicator} ${styles[type]}`}>
      <img src={getTypeIcon(type)} alt={type} />
    </div>
  );
};

export default TypeIndicator;
