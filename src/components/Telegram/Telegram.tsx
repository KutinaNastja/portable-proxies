import styles from "./Telegram.module.scss";

export const Telegram = () => {
  return (
    <div>
      <div className={styles.Telegram}>
        <div className={styles.wrapper}>
          <div>картинка</div>
          <div className={styles.name}>Бот в Telegram для управления прокси</div>
          <ul className={styles.text}>
            <li> Смена IP вручную</li>
            <li> Смена IP по таймеру</li>
            <li> Смена OS Fingerprint (Linux/Windows/Android)</li>
            <li> Просмотр балансов</li>
            <li> Просмотр номеров телефонов</li>
            <li> Уведомление о пополнении баланса</li>
            <li> Поддержка и новые фичи</li>
          </ul>
          <div className={styles.price}>30$/мес</div>
        </div>
      </div>
      <div className={styles.comment}>
        Цены указаны за установку, настройку и использование ПО, без учета стоимости оборудования.
      </div>
    </div>
  );
};
