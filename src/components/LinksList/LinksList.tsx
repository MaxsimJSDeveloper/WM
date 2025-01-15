import { TbChecklist } from "react-icons/tb";
import IconsLink from "../../shared/IconsLink/IconsLink";
import LinkItem from "../Link/Link";
import Icon from "../../shared/Icon/Icon";

const LinksList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-[16px] max-w-[350px]">
      <li className="flex flex-col justify-center items-center transition-all duration-300 shadow-md w-[150px] h-[150px] rounded-[12px] bg-card hover:scale-110 hover:shadow-lg">
        <IconsLink
          link="https://docs.google.com/forms/d/e/1FAIpQLScxMfOuDroT_ZT5xYwU_YaANrEH6FuhZQFoCT9YG-UMwIA09A/viewform"
          withStyle
        >
          <TbChecklist className="w-[48px] h-[48px] transition-transform duration-300 hover:text-white hover:scale-110" />
          <LinkItem title="Запис" subtitle="на консультацію" />
        </IconsLink>
      </li>
      <li className="flex flex-col justify-center items-center transition-all duration-300 shadow-md w-[150px] h-[150px] rounded-[12px] bg-card hover:scale-110 hover:shadow-lg">
        <IconsLink link="https://forms.gle/whQZko9yqWMk1tmeA" withStyle>
          <Icon id="icon-pregnant" fill="#E5E5E5" width="48" height="48" />
          <LinkItem title="Вагітним" subtitle="вступне заняття" />
        </IconsLink>
      </li>
      <li className="flex flex-col justify-center items-center transition-all duration-300 shadow-md w-[150px] h-[150px] rounded-[12px] bg-card hover:scale-110 hover:shadow-lg">
        <IconsLink
          link="https://www.instagram.com/p/DEEkdSdNlqJ/?img_index=1"
          withStyle
        >
          <Icon id="icon-help" fill="#E5E5E5" width="48" height="48" />
          <LinkItem title="Моя допомога" subtitle="для тебе" />
        </IconsLink>
      </li>
      <li className="flex flex-col justify-center items-center transition-all duration-300 shadow-md w-[150px] h-[150px] rounded-[12px] bg-card hover:scale-110 hover:shadow-lg">
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
