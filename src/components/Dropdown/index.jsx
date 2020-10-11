import React from "react";
import SelectSearch from "react-select-search";
import "./dropdown.css";
import styles from "./styles.module.scss";

const Dropdown = ({ options, name, placeholder, onChange }) => {
  console.log(options);
  return (
    <div className={styles.overrides}>
      <SelectSearch
        options={options}
        name={name}
        placeholder={placeholder}
        search={true}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Dropdown;
