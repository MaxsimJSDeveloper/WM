import IconsLink from "../../shared/IconsLink/IconsLink";
import LinkItem from "../Link/Link";
import Icon from "../../shared/Icon/Icon";
import { links } from "./LinksListData";

const LinksList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-[16px] max-w-[350px]">
      {links.map(({ iconId, url, title, subtitle }) => (
        <li className="flex flex-col justify-center items-center transition-all duration-300 shadow-md w-[150px] h-[150px] rounded-[12px] bg-card hover:scale-110 hover:shadow-lg">
          <IconsLink link={url} withStyle>
            <Icon id={iconId} fill="#E5E5E5" width="48" height="48" />
            <LinkItem title={title} subtitle={subtitle} />
          </IconsLink>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;
