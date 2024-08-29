import React from "react";
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = () => {
  const buttonNumbers = [
    "C",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "/",
    "=",
    "0",
  ];
  return (
    <>
      {buttonNumbers.map((btnNum) => (
        <button className={styles.calButton}>{btnNum}</button>
      ))}
    </>
  );
};

export default ButtonsContainer;
