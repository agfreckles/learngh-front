import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./posts.scss";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
// import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector((state) => state.users);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(e.target.value);

  const onSavePost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("")
    }
  };
  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  return (
    <section className="post-add-form">
      <h2>Add Post</h2>
      <form id="contact-form">
        {/* <label htmlFor="postTitle">Post Title:</label> */}
        <input
          placeholder="Title"
          type="text"
          id="postTitle"
          value={title}
          name="postTitle"
          onChange={onTitleChange}
        />
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </select>
        <textarea
          placeholder="Content"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <button type="button" onClick={onSavePost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
