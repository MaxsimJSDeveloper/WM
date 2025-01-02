import sprite from "../../img/symbol-defs.svg";
import css from "./Icon.module.css";

export interface IconProps {
  id: string;
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

const Icon = ({
  id,
  width = "32px",
  height = "32px",
  fill = "",
  stroke = "",
}: IconProps) => {
  return (
    <svg
      className={css.hover}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
