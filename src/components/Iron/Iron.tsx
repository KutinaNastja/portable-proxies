import styles from "./Iron.module.scss";

export const Iron = () => {
  return (
    <div className={styles.iron}>
      <div className={styles.question}>Какое железо потребуется дополнительно</div>
      <div className={styles.wrapper}>
        <div className={styles.image}>Картинка</div>
        <div className={styles.text}>Ноутбук</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.image}>Картинка</div>
        <div className={styles.text}>WIFI роутер</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.image}>Картинка</div>
        <div className={styles.text}>4G модемы и сим-карты</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.image}>Картинка</div>
        <div className={styles.text}>Активный хаб</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.image}>Картинка</div>
        <div className={styles.text}>Usb удлинитель под каждый модем</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.image}>Картинка</div>
        <div className={styles.text}>Умная розетка</div>
      </div>
      <div className={styles.comment}>
        *оборудование может иметь отличия от представленного на фото. Оборудование покупается дополнительно.
      </div>
    </div>
  );
};
