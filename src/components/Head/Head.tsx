import styles from "./Head.module.scss";

export const Head = () => {
  return (
    <div className={styles.head}>
      <div>картинка</div>
      <div>
        <div className={styles.name}>PORTABLE PROXIES</div>
        <div className={styles.description}>Мобильные прокси под ключ</div>
      </div>
    </div>
  );
};
