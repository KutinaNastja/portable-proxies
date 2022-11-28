import { NextPage } from "next";

import styles from "./HomePage.module.scss";

import { Button } from "../Button/Button";
import { Head } from "../Head/Head";
import { Question } from "../Question/Question";

export const HomePage: NextPage = () => {
  return (
    <div className={styles.allWrapper}>
      <Head />
      <Button />
      <Question />
    </div>
  );
};
