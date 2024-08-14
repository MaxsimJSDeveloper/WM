import { TbChecklist } from "react-icons/tb";
import styles from "./Links.module.css";
import { MdFace3 } from "react-icons/md";

const Links = () => {
  return (
    <div id="links">
      <h2 className={styles.title}>Посилання</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.info}>
            <TbChecklist className={styles.icon} />
            <a
              className={styles.link}
              href="https://docs.google.com/forms/d/e/1FAIpQLScxMfOuDroT_ZT5xYwU_YaANrEH6FuhZQFoCT9YG-UMwIA09A/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cardInfo}>
                Заповни анкету <p className={styles.text}>Моя рука допомоги</p>
              </div>
            </a>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.info}>
            <MdFace3 className={styles.icon} />

            <a
              className={styles.link}
              href="https://forms.gle/whQZko9yqWMk1tmeA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cardInfo}>
                ВАГІТНИМ
                <p className={styles.text}>запис на безкоштовне заняття</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Links;
