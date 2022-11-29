import styles from "./Head.module.scss";

import imageLogo from "../../assets/Group 139.svg";

export const Head = () => {
  const logo = imageLogo.src;

  return (
    <div className={styles.head}>
      <div>
        <img src={logo} alt="logo" width={75} />
      </div>
      <div>
        <div className={styles.name}>PORTABLE PROXIES</div>
        <div className={styles.description}>Мобильные прокси под ключ</div>
      </div>
    </div>
  );
};
