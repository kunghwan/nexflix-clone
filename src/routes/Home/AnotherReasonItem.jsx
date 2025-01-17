import React from "react";
import styles from "./anotherReason.css";

const AnotherReasonItem = ({ title, desc, Icon }) => {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <p>{desc}</p>
      <Icon />
    </div>
  );
};

export default AnotherReasonItem;
