import styles from "./Control.module.scss";

import imageControl from "../../assets/Group 155.svg";

export const Control = () => {
  const control = imageControl.src;
  return (
    <div className={styles.control}>
      <div className={styles.question}>Управление через Telegram-бота</div>

      <div>
        <img src={control} alt="control" width="100%" />
      </div>
    </div>
  );
};
