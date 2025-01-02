import css from "./SecondVariant.module.css";

interface secondVariantProps {
  firstCard: string;
  secondCard: string;
}

const SecondVariant = ({ firstCard, secondCard }: secondVariantProps) => {
  return (
    <div className={css.secondVariant}>
      <div className={css.item}>
        <p className={css.text}>{firstCard}</p>
      </div>
      <div className={css.item}>
        <p className={css.text}>{secondCard}</p>
      </div>
    </div>
  );
};

export default SecondVariant;
