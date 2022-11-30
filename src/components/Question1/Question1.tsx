import styles from "./Question1.module.scss";

import image3 from "../../assets/Group 53.svg";
import image6 from "../../assets/Group 57.svg";
import image5 from "../../assets/Group 64.svg";
import image4 from "../../assets/Group.svg";
import image1 from "../../assets/Group50.svg";
import image2 from "../../assets/seo.svg";

export const Question1 = () => {
  const circle1 = image1.src;
  const circle2 = image2.src;
  const circle3 = image3.src;
  const circle4 = image4.src;
  const circle5 = image5.src;
  const circle6 = image6.src;

  return (
    <div className={styles.block}>
      <div className={styles.question}>
        <div>Зачем нужны</div>
        <div className={styles.allQuestion}>&nbsp;приватные мобильные&nbsp;</div>
        <div className={styles.proxyColor}>
          прокси <div className={styles.questionColor}>?</div>
        </div>
      </div>
      <div className={styles.allCircle}>
        <div className={styles.fourСircle}>
          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <img src={circle1} alt="circle1" width={50} />
              </div>
              <div className={styles.name}>Регистрация аккаунтов</div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <img src={circle2} alt="circle2" width={70} />
              </div>
              <div className={styles.name}>SEO продвижение</div>
            </div>
          </div>

          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <img src={circle3} alt="circle3" width={60} />
              </div>
              <div className={styles.name}>Арбитраж трафика и CPA</div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <img src={circle4} alt="circle4" width={60} />
              </div>
              <div className={styles.name}>Масслайкинг и массфоловинг</div>
            </div>
          </div>
        </div>

        <div className={styles.threeCircle}>
          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <div className={styles.circle5}>
                  <img src={circle5} alt="circle5" width={60} />
                </div>
              </div>
              <div className={styles.name}>Индивидуальная рассылка</div>
            </div>

            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <img src={circle6} alt="circle6" width={60} />
              </div>
              <div className={styles.name}>Анонимность</div>
            </div>
          </div>

          <div className={styles.line}>
            <div className={styles.wrapper}>
              <div className={styles.circle}>
                <div className={styles.restApi}>{"{ REST API }"}</div>
              </div>
              <div className={styles.name}>Интеграция в софт</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
