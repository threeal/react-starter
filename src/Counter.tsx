import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => {
        setCount((count) => count + 1);
      }}
    >
      count is {count}
    </button>
  );
}
