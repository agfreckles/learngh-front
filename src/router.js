import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./features/error/error-page";
import LearnHome from "./features/learngh/LearnHome";
import LandingPage from "./features/landing_page/LandingPage";
// import UserList from "./features/users/Users";
import TopicDetail from "./features/learngh/TopicDetail";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import AddPostForm from "./features/posts/AddPostForm";
import EditPostForm from "./features/posts/EditPostForm";
// import AddPostForm from "./features/posts/AddPostForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "/learn", element: <LearnHome /> },
      { path: "/learn/:id", element: <TopicDetail /> },
      { path: "/count", element: <Counter /> },
      {
        path: "/post",
        children: [
          { index: true, element: <AddPostForm /> },
          { path: ":postId", element: <SinglePostPage /> },
          { path: "edit/:postId", element: <EditPostForm  /> },
        ],
      },
      { path: "/posts", element: <PostsList /> },
    ],
  },
]);

export default router;
