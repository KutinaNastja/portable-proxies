import styles from "./Connection.module.scss";

export const Connection = () => {
  return (
    <div className={styles.connection}>
      <div className={styles.question}>По всем вопросам пишите в телеграм</div>
      <div className={styles.wrapper}>
        <div className={styles.image}>Картинка</div>
        <div className={styles.text}>@antonkb</div>
      </div>
    </div>
  );
};
