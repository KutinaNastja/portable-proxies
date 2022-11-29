import styles from "./Telegram.module.scss";

import imageTelegram from "../../assets/Telegram_2019_Logo 1.svg";

export const Telegram = () => {
  const Telegram = imageTelegram.src;
  return (
    <div>
      <div className={styles.telegram}>
        <div className={styles.wrapper}>
          <div>
            <img src={Telegram} alt="Telegram" width={100} />
          </div>
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
