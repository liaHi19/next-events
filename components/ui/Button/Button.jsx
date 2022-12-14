import React from "react";
import Link from "next/link";

import styles from "./button.module.css";

const Button = ({ link, children, onClick }) => {
  return (
    <>
      {link ? (
        <Link href={link}>
          <a className={styles.btn}>{children}</a>
        </Link>
      ) : (
        <button className={styles.btn} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
