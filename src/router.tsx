import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "*", Component: NotFoundPage },
]);
