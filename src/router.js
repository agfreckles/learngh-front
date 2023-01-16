import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./features/error/error-page";
import LearnHome from "./features/learngh/LearnHome";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },

  { path: "/learn", element: <LearnHome /> },
]);

export default router;
