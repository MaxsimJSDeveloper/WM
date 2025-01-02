import { ReactNode } from "react";
import css from "./IconsLink.module.css";

interface Props {
  children: ReactNode;
  link: string;
  alt?: string;
  withStyle?: boolean;
}

const IconsLink = ({ children, link, alt, withStyle }: Props) => {
  return (
    <a
      className={`${withStyle && css.info}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      {children}
    </a>
  );
};

export default IconsLink;
