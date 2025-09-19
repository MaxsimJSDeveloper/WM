import Icon from "../../shared/Icon/Icon";
import IconsLink from "../../shared/IconsLink/IconsLink";
import { icons } from "./ContactsListData";

const ContactsList = () => {
  return (
    <div className="flex gap-4 justify-center items-center">
      {icons.map(({ id, link, alt }) => (
        <IconsLink key={id} link={link} alt={alt}>
          <Icon id={id} fill="#E5E5E5" />
        </IconsLink>
      ))}
    </div>
  );
};

export default ContactsList;
