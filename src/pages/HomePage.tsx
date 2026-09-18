import { useState } from "react";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p className={styles.description}>
        Click the button to increase the counter.
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count is {count}
      </button>
    </>
  );
}
