import styles from "./ButtonSmall.module.scss";

export const ButtonSmall = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <a href="https://t.me/@antonkb">ЗАКАЗАТЬ</a>
      </div>
    </div>
  );
};
