import { ReactNode } from "react";
import css from "./FirstVariant.module.css";

interface firstVariantProps {
  children: ReactNode;
}

const FirstVariant = ({ children }: firstVariantProps) => {
  return (
    <div className={css.firstVariant}>
      <p className={css.text}>{children}</p>
    </div>
  );
};

export default FirstVariant;
