import { Link } from "react-router";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <>
      <p className={styles.description}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link to="/" className={styles.link}>
        Go back home
      </Link>
    </>
  );
}
