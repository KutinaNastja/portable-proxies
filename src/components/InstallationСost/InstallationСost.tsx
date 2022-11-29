import styles from "./InstallationСost.module.scss";

import { Button } from "../Button/Button";

export const InstallationСost = () => {
  return (
    <div className={styles.installationСost}>
      <div className={styles.question}>Стоимость установки и настройки ПО</div>

      <div className={styles.line}>
        <div className={styles.wrapper}>
          <div className={styles.name}>Настройка до 10 модемов</div>
          <div>картинка</div>
          <div className={styles.price}>150$</div>
          <div className={styles.text}>Единоразовый платеж</div>
          <Button />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.name}>Настройка 10-100 модемов</div>
          <div>картинка</div>
          <div className={styles.price}>250$</div>
          <div className={styles.text}>Единоразовый платеж</div>
          <Button />
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.wrapper}>
          <div className={styles.name}>Настройка до 100-200 модемов</div>
          <div>картинка</div>
          <div className={styles.price}>300$</div>
          <div className={styles.text}>Единоразовый платеж</div>
          <Button />
        </div>
        <div className={styles.wrapper}>
          <div className={styles.name}>Настройка 200+ модемов</div>
          <div>картинка</div>
          <div className={styles.price}>по запросу</div>
          <div className={styles.text}>Единоразовый платеж</div>
          <Button />
        </div>
      </div>
    </div>
  );
};
