import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
  alt?: string;
  withStyle?: boolean;
}

const IconsLink = ({ children, link, alt, withStyle }: Props) => {
  return (
    <a
      className={`${withStyle && "flex flex-col items-center justify-center"}`}
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
