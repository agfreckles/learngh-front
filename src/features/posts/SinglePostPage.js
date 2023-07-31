import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import { Link, useParams } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "../../utils/TimeAgo";
import ReactionButtons from "./ReactionButtons";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  if (!post) {
    return (
      <section>
        <h2>Post Not found</h2>
      </section>
    );
  }
  return (
    <article className="post-article blogpost">
      <Link to={-1} className="lblue">
        Back
      </Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
      <Link  to={`/post/edit/${post.id}`} className="lblue right">Edit post</Link>
    </article>
  );
};

export default SinglePostPage;
