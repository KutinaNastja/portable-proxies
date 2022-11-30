import styles from "./Head.module.scss";

import imageLogo from "../../assets/Group 139.svg";
import imageTelegram from "../../assets/Telegram_2019_Logo 1.svg";

export const Head = () => {
  const logo = imageLogo.src;
  const Telegram = imageTelegram.src;

  return (
    <div className={styles.head}>
      <div className={styles.wrapperLogo}>
        <div>
          <img src={logo} alt="logo" width={75} />
        </div>
        <div>
          <div className={styles.name}>PORTABLE PROXIES</div>
          <div className={styles.description}>Мобильные прокси под ключ</div>
        </div>
      </div>
      <div className={styles.wrapperTelegram}>
        <div className={styles.image}>
          <img src={Telegram} alt="Telegram" width={40} />
        </div>
        <div className={styles.text}>@antonkb</div>
      </div>
    </div>
  );
};
