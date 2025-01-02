import { ReactNode } from "react";
import css from "./Title.module.css";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <>
      <h2 className={css.title}>{children}</h2>
    </>
  );
};

export default Title;
