import { NextPage } from "next";

import styles from "./HomePage.module.scss";

import { BuildDescription } from "../BuildDescription/BuildDescription";
import { Button } from "../Button/Button";
import { Connection } from "../Connection/Connection";
import { Control } from "../Control/Control";
import { Head } from "../Head/Head";
import { InstallationСost } from "../InstallationСost/InstallationСost";
import { Iron } from "../Iron/Iron";
import { Question1 } from "../Question1/Question1";
import { Question2 } from "../Question2/Question2";
import { Telegram } from "../Telegram/Telegram";

export const HomePage: NextPage = () => {
  return (
    <div className={styles.allWrapper}>
      <Head />
      <Button />
      <Question1 />
      <Question2 />
      <InstallationСost />
      <Telegram />
      <BuildDescription />
      <Control />
      <Iron />
      <Connection />
    </div>
  );
};
