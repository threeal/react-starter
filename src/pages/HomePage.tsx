import { useState } from "react";
import Button from "../components/Button.tsx";
import Description from "../components/Description.tsx";

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
