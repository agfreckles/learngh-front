import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

import React from "react";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  //   Number was introduced becos the user.id is strictly a number while userId is number in a string
  const author = users.find((user) => user.id === Number(userId));
  return <span>by {author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthor;
