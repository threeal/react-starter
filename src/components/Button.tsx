import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

/**
 * Renders a styled button that never submits a form by default.
 * @param props - The attributes passed to the underlying `<button>` element.
 * @returns A button element.
 */
export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="button" className={styles.button} {...props} />;
}
