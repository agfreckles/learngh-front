import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIds, getPostsStatus, getPostsError,
  // selectAllPosts,
  // getPostsError,
  // getPostsStatus,
  // increaseCount,
  getCount,
  selectPostsById,
  // selectPostById,
  // fetchPosts,
} from "./postsSlice";
// import { useEffect } from "react";
import "./posts.scss";
import AddPostForm from "./AddPostForm";
import PostsExcept from "./PostsExcept";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PostsList = () => {
  // const posts = useSelector(selectAllPosts);
  // const orderedPostIds = useSelector(selectPostById);
  const postsStatus = useSelector(getPostsStatus);
  // const error = useSelector(getPostsError);
  const dispatch = useDispatch();
  const count = useSelector(getCount);

  const orderedPostIds = useSelector(selectPostsById)
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  let content;
  if (postsStatus === "pending") {
    content = <p>'Loading . . .'</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map(postId => <PostsExcept key={postId} postId={postId} />);
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <section className="posts-page-wrapper">
      <div className="posts">
        <Link to={"/post"}>
          <h3>+ New</h3>
        </Link>
        {/* <span
          className="right white "
          onClick={() => dispatch(increaseCount())}
        >
          {count}
        </span> */}
        {content}
      </div>
    </section>
  );
};
export default PostsList;
