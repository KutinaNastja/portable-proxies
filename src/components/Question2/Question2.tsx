import styles from "./Question2.module.scss";

export const Question2 = () => {
  return (
    <div className={styles.block}>
      <div className={styles.question}>
        <div>Для чего нужна</div>
        <div className={styles.assemblyColor}>
          &nbsp;сборка <div className={styles.questionColor}>&nbsp;прокси?</div>
        </div>
      </div>
      <div>
        <div className={styles.wrapperLine}>
          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div className={styles.header}>Приватность</div>
              <div className={styles.text}>
                Вашими серверами никто не сможет воспользоваться, все оборудование и данные находятся непосредственно у
                вас
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.header}>Логи</div>
              <div className={styles.text}> Возможность отключать логи для анонимности клиентов</div>
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div className={styles.header}>Независимость от сторонних сервисов</div>
              <div className={styles.text}>
                Возможность самому выбирать место установки прокси для разнообразия пулов ip-адресов
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.header}>Экономия</div>
              <div className={styles.text}>
                Со своим оборудованием вам больше не придется платить арендную плату сервисам прокси
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
