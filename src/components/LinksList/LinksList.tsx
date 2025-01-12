import { TbChecklist } from "react-icons/tb";
import IconsLink from "../../shared/IconsLink/IconsLink";
import LinkItem from "../Link/Link";
import Icon from "../../shared/Icon/Icon";

import styles from "./LinksList.module.css";

const LinksList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <IconsLink
          link="https://docs.google.com/forms/d/e/1FAIpQLScxMfOuDroT_ZT5xYwU_YaANrEH6FuhZQFoCT9YG-UMwIA09A/viewform"
          withStyle
        >
          <TbChecklist className={styles.icon} />
          <LinkItem title="Запис" subtitle="на консультацію" />
        </IconsLink>
      </li>
      <li className={styles.listItem}>
        <IconsLink link="https://forms.gle/whQZko9yqWMk1tmeA" withStyle>
          <Icon id="icon-pregnant" fill="#E5E5E5" width="48" height="48" />
          <LinkItem title="Вагітним" subtitle="вступне заняття" />
        </IconsLink>
      </li>
      <li className={styles.listItem}>
        <IconsLink
          link="https://www.instagram.com/p/DEEkdSdNlqJ/?img_index=1"
          withStyle
        >
          <Icon id="icon-help" fill="#E5E5E5" width="48" height="48" />
          <LinkItem title="Моя допомога" subtitle="для тебе" />
        </IconsLink>
      </li>
      <li className={styles.listItem}>
        <IconsLink
          link="https://www.instagram.com/dr_iryna_holovko/p/DD6S9SuNsEp/?img_index=1"
          withStyle
        >
          <Icon id="icon-doctor" fill="#E5E5E5" width="48" height="48" />
          <LinkItem title="Мій" subtitle="професійний шлях" />
        </IconsLink>
      </li>
    </ul>
  );
};

export default LinksList;
