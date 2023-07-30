import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
import "./posts.scss";
const reactionEmoji = {
  thumpsUp: "👍🏽",
  wow: "🤩",
  rocket: "🚀",
  heart: "❤️",
  coffee: "☕️",
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <span className="reaction-button"
        key={name}
        type="button"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </span>
    );
  });
  return <div className="reaction-button-wrapper">{reactionButtons}</div>;
};

export default ReactionButtons;
