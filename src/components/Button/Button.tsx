import styles from "./Button.module.scss";

export const Button = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background}>
        <a href="https://t.me/antonkb">ЗАКАЗАТЬ</a>
      </div>
    </div>
  );
};
