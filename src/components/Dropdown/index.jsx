import React from "react";
import SelectSearch from "react-select-search";
import "./dropdown.css";
import styles from "./styles.module.scss";

const Dropdown = ({ options, name, placeholder, onChange, value }) => {
  return (
    <div className={styles.overrides}>
      <SelectSearch
        options={options}
        name={name}
        placeholder={placeholder}
        search={true}
        onChange={(e) => onChange(e)}
        value={value}
      />
    </div>
  );
};

export default Dropdown;
