import styles from "./BuildDescription.module.scss";

export const BuildDescription = () => {
  return (
    <div className={styles.allBlock}>
      <div className={styles.question}>
        <div>Описание</div>
        <div className={styles.assemblyColor}>&nbsp;сборки</div>
      </div>

      <div className={styles.block}>
        <div className={styles.functions}>Функции:</div>
        <div className={styles.allLine}>
          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Смена ip по таймеру</div>
            </div>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Смена ip по клику/ссылке</div>
            </div>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Админка в Telegram-боте</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>HTTP/SOCKS5</div>
            </div>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Защита от DNS Leak</div>
            </div>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Просмотр СМС</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Смена OS Fingerprint (Linux/Windows/Android)</div>
            </div>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Просмотр балансов и номеров телефонов</div>
            </div>
            <div className={styles.wrapper}>
              <div>
                <div className={styles.dot} />
              </div>
              <div className={styles.text}>Уведомление о том, что нужно пополнить баланс</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
