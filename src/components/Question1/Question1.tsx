import styles from "./Question1.module.scss";

export const Question1 = () => {
  return (
    <div>
      <div className={styles.question}>
        <div>Зачем нужны</div>
        <div className={styles.proxyColor}>
          прокси <div className={styles.questionColor}>?</div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.wrapper}>
          <div className={styles.circle}>круг</div>
          <div className={styles.name}>Регистрация аккаунтов</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.circle}>круг</div>
          <div className={styles.name}>SEO продвижение</div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.wrapper}>
          <div className={styles.circle}>круг</div>
          <div className={styles.name}>Арбитраж трафика и CPA</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.circle}>круг</div>
          <div className={styles.name}>Масслайкинг и массфоловинг</div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.wrapper}>
          <div className={styles.circle}>круг</div>
          <div className={styles.name}>Индивидуальная рассылка</div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.circle}>круг</div>
          <div className={styles.name}>Анонимность</div>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.wrapper}>
          <div className={styles.restApi}>{"{ REST API }"}</div>
          <div className={styles.name}>Интеграция в софт</div>
        </div>
      </div>
    </div>
  );
};