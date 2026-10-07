import { useState } from "react";
import Button from "../components/Button.tsx";
import Description from "../components/Description.tsx";

/**
 * Renders the home page, with a button that counts how many times it's clicked.
 * @returns The home page content.
 */
export default function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Description>Click the button to increase the counter.</Description>
      <Button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count is {count}
      </Button>
    </>
  );
}
