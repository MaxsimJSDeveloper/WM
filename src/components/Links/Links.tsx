import { TbChecklist } from "react-icons/tb";
import styles from "./Links.module.css";
import { MdFace3 } from "react-icons/md";

const Links = () => {
  return (
    <section id="links" aria-labelledby="links-title">
      <h2 id="links-title" className={styles.title}>
        Посилання
      </h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.info}>
            <TbChecklist className={styles.icon} />
            <a
              className={styles.link}
              href="https://docs.google.com/forms/d/e/1FAIpQLScxMfOuDroT_ZT5xYwU_YaANrEH6FuhZQFoCT9YG-UMwIA09A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Заповнити анкету 'Моя рука допомоги'"
            >
              <div className={styles.cardInfo}>
                Заповни анкету
                <p className={styles.text}>Моя рука допомоги</p>
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
              aria-label="Запис на безкоштовне заняття для вагітних"
            >
              <div className={styles.cardInfo}>
                ВАГІТНИМ
                <p className={styles.text}>запис на безкоштовне заняття</p>
              </div>
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Links;
