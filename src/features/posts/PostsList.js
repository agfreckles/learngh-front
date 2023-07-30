import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import "./posts.scss";
import AddPostForm from "./AddPostForm";
import PostsExcept from "./PostsExcept";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if ((postsStatus === "idle")) {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "pending") {
    content = <p>'Loading . . .'</p>;
  } else if (postsStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post,i) => {
      // console.log(post.id)
      return <PostsExcept key={post.id} post={post} />
  });
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section className="posts-page-wrapper">
      <div className="posts">
      <AddPostForm />
        <h2>POSTS</h2>
        {content}
      </div>
    </section>
  );
};
export default PostsList;
