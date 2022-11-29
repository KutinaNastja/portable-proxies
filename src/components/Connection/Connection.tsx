import styles from "./Connection.module.scss";

import imageTelegram from "../../assets/Telegram_2019_Logo 1.svg";

export const Connection = () => {
  const Telegram = imageTelegram.src;

  return (
    <div className={styles.connection}>
      <div className={styles.question}>По всем вопросам пишите в телеграм</div>
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <img src={Telegram} alt="Telegram" width={40} />
        </div>
        <div className={styles.text}>@antonkb</div>
      </div>
    </div>
  );
};
