import PostAuthor from "./PostAuthor";
import TimeAgo from "../../utils/TimeAgo";
import ReactionButtons from "./ReactionButtons";
import React from "react";
import { Link } from "react-router-dom";

const PostsExcept = ({ post }) => {
  return (
    <article className="post-article blogpost">
      <h3>{post.title}</h3>
      <p>
        {post.body.substring(0, 200)} . . . 
        <Link to={`/post/${post.id}`} className="lblue">See more</Link>
      </p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostsExcept;
