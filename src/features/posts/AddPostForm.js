import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./posts.scss";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
import { Link, useNavigate } from "react-router-dom";
// import { nanoid } from "@reduxjs/toolkit";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const users = useSelector((state) => state.users);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);
  const onAuthorChange = (e) => setUserId(Number(e.target.value));

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle"; //Boolean(title) && Boolean(content) && Boolean(userId);
  const onSavePost = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId }));
        setTitle("");
        setContent("");
        setUserId("");
        navigate("/posts"); 
      } catch (err) {
        console.error("Failed to save post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section className="post-add-form">
      <Link to='/posts' className="lblue">
       <h2>Back</h2>
        </Link>
      {/* <h2>Add Post</h2> */}
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
