import styles from "./InstallationСost.module.scss";

import image from "../../assets/Group 145.svg";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";

export const InstallationСost = () => {
  const imageCard = image.src;

  return (
    <div className={styles.installationСost}>
      <div className={styles.question}>Стоимость установки и настройки ПО</div>
      <div className={styles.wrapperLine}>
        <div className={styles.line}>
          <div className={styles.wrapper}>
            <div className={styles.name}>Настройка до 10 модемов</div>
            <div>
              <img src={imageCard} alt="imageCard" width={50} />
            </div>
            <div className={styles.price}>150$</div>
            <div className={styles.text}>Единоразовый платеж</div>
            <ButtonSmall />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.name}>Настройка 10-100 модемов</div>
            <div>
              <img src={imageCard} alt="imageCard" width={50} />
            </div>
            <div className={styles.price}>250$</div>
            <div className={styles.text}>Единоразовый платеж</div>
            <ButtonSmall />
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.wrapper}>
            <div className={styles.name}>Настройка до 100-200 модемов</div>
            <div>
              <img src={imageCard} alt="imageCard" width={50} />
            </div>
            <div className={styles.price}>300$</div>
            <div className={styles.text}>Единоразовый платеж</div>
            <ButtonSmall />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.name}>
              Настройка 200+
              <br />
              модемов
            </div>
            <div>
              <img src={imageCard} alt="imageCard" width={50} />
            </div>
            <div className={styles.price}>по запросу</div>
            <div className={styles.text}>Единоразовый платеж</div>
            <ButtonSmall />
          </div>
        </div>
      </div>
    </div>
  );
};
