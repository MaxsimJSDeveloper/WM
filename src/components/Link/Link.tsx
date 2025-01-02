import styles from "./Link.module.css";

interface linkProps {
  link: string;
  title: string;
  subtitle: string;
}

const Link = ({ link, title, subtitle }: linkProps) => {
  return (
    <a
      className={styles.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} ${subtitle}`}
    >
      <div className={styles.cardInfo}>
        {title}
        <p className={styles.text}>{subtitle}</p>
      </div>
    </a>
  );
};

export default Link;
