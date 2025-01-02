import styles from "./Link.module.css";

interface linkProps {
  title: string;
  subtitle: string;
}

const LinkItem = ({ title, subtitle }: linkProps) => {
  return (
    <div
      className={styles.link}
      rel="noopener noreferrer"
      aria-label={`${title} ${subtitle}`}
    >
      <div className={styles.cardInfo}>
        {title}
        <p className={styles.text}>{subtitle}</p>
      </div>
    </div>
  );
};

export default LinkItem;
