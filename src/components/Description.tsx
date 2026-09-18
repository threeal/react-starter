import type { ReactNode } from "react";
import styles from "./Description.module.css";

export default function Description({ children }: { children: ReactNode }) {
  return <p className={styles.description}>{children}</p>;
}
