import { useNavigate } from "react-router";
import Button from "../components/Button.tsx";
import Description from "../components/Description.tsx";

/**
 * Renders the page shown for unknown paths, with a button that navigates back home.
 * @returns The not-found page content.
 */
export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
      <Description>
        The page you&apos;re looking for doesn&apos;t exist.
      </Description>
      <Button
        onClick={() => {
          void navigate("/");
        }}
      >
        Go back home
      </Button>
    </>
  );
}
