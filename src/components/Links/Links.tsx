import { TbChecklist } from "react-icons/tb";
import styles from "./Links.module.css";
import { MdFace3 } from "react-icons/md";

const Links = () => {
  return (
    <div id="links">
      <h2 className={styles.title}>Links</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.info}>
            <TbChecklist className={styles.icon} />
            <a
              className={styles.link}
              href="https://docs.google.com/forms/d/e/1FAIpQLSfS8DqULzI5u-vVY3-N4H8u23-nlPEa-hJLfOwXD6P7E3dyxg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.cardInfo}>
                Заповни анкету <p className={styles.text}>Список у пологовий</p>
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
