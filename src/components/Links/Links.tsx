import { TbChecklist } from "react-icons/tb";
import styles from "./Links.module.css";
import { MdFace3 } from "react-icons/md";
import Link from "../Link/Link";

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
            <Link
              link="https://docs.google.com/forms/d/e/1FAIpQLScxMfOuDroT_ZT5xYwU_YaANrEH6FuhZQFoCT9YG-UMwIA09A/viewform"
              title="Заповни анкету"
              subtitle="Моя рука допомоги"
            />
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.info}>
            <MdFace3 className={styles.icon} />
            <Link
              link="https://forms.gle/whQZko9yqWMk1tmeA"
              title="ВАГІТНИМ"
              subtitle="запис на безкоштовне заняття"
            />
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.info}>
            <MdFace3 className={styles.icon} />
            <Link
              link="https://radiologycenter.eu/doctors/golovkoirinaivanivna"
              title="Про мене"
              subtitle="Досвід роботи та освіта"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Links;
