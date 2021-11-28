import styles from "./styles.module.css";

export const Avatar = ({ src, alt, text, withText }) => {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={src} alt={alt} />
      {withText && <strong>{text}</strong>}
    </div>
  );
};
