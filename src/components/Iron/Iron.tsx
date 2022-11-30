import styles from "./Iron.module.scss";

import image1 from "../../assets/6973528640741-01-640 1.svg";
import image5 from "../../assets/image 27.svg";
import image3 from "../../assets/image 30.svg";
import image2 from "../../assets/image 37.svg";
import image4 from "../../assets/image-38 1.svg";
import image6 from "../../assets/orig 1.svg";

export const Iron = () => {
  const circle1 = image1.src;
  const circle2 = image2.src;
  const circle3 = image3.src;
  const circle4 = image4.src;
  const circle5 = image5.src;
  const circle6 = image6.src;

  return (
    <div className={styles.iron}>
      <div className={styles.question}>Какое железо потребуется дополнительно</div>
      <div className={styles.allLine}>
        <div className={styles.line}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <img src={circle1} alt="circle1" width={100} />
            </div>
            <div className={styles.text}>Ноутбук</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <img src={circle2} alt="circle2" width={100} />
            </div>
            <div className={styles.text}>WIFI роутер</div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.wrapper}>
            <div className={styles.image4G}>
              <img src={circle3} alt="circle3" width={100} />
            </div>
            <div className={styles.text}>4G модемы и сим-карты</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <img src={circle4} alt="circle4" width={100} />
            </div>
            <div className={styles.text}>Активный хаб</div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <img src={circle5} alt="circle5" width={100} />
            </div>
            <div className={styles.text}>Usb удлинитель под каждый модем</div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.image}>
              <img src={circle6} alt="circle6" width={100} />
            </div>
            <div className={styles.text}>Умная розетка</div>
          </div>
        </div>
      </div>
      <div className={styles.comment}>
        *оборудование может иметь отличия от представленного на фото. Оборудование покупается дополнительно.
      </div>
    </div>
  );
};
