import { createBrowserRouter } from "react-router-dom";
import { Counter } from "../features/counter/Counter";
import ErrorPage from "../features/error/error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "../features/contacts/Contact";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "../features/contacts/Root";
import EditContact, {
  action as editAction,
} from "../features/contacts/EditContact";
import { action as destroyAction } from "../features/contacts/DestroyContact";
import Index from "../features/contacts/Index";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <ErrorPage /> },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,

    children: [
      { index: true, element: <Index /> },
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "/contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "/contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>OOPS !!! Error</div>,
      },
      { path: "/contacts", element: <Counter /> },
    ],
  },
]);

export default router;
