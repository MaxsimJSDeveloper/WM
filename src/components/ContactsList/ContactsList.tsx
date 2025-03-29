import Icon from "../../shared/Icon/Icon";
import IconsLink from "../../shared/IconsLink/IconsLink";

const ContactsList = () => {
  const icons = [
    {
      id: "icon-instagram",
      link: "https://www.instagram.com",
      alt: "Instagram",
    },
    {
      id: "icon-telegram",
      link: "https://t.me/+oKBOKPanjRM0YTJi",
      alt: "Telegram",
    },
    {
      id: "icon-youtube",
      link: "https://www.youtube.com/channel/UC7AHTcnBk-MZ5B7tTq81KpQ",
      alt: "YouTube",
    },
    {
      id: "icon-facebook",
      link: "https://www.facebook.com/IrynaIvanivnaHolovko",
      alt: "Facebook",
    },
    {
      id: "icon-linkedin",
      link: "https://www.linkedin.com/in/iryna-holovko-b5434b32a",
      alt: "linkedin",
    },
    {
      id: "icon-website",
      link: "https://radiologycenter.eu/doctors/golovkoirinaivanivna",
      alt: "мого сайту",
    },
  ];

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
