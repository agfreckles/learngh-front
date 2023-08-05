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
        <h2>Loaind . . . </h2>
      </section>
    );
  }
  return (
    <article className="post-article blogpost">
      <Link to="/posts" className="lblue">
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </Link>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timestamp={post.date} />
      <ReactionButtons post={post} />
      <Link to={`/post/edit/${post.id}`} className="white">
        <span className="material-symbols-outlined">edit</span>
      </Link>
    </article>
  );
};

export default SinglePostPage;
