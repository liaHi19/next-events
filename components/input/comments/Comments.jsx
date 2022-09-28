import { useState, useEffect } from "react";

import { apiBase } from "../../../api/axiosConfig";

import CommentList from "../commentList/CommentList";
import NewComment from "../newComment/NewComment";

import styles from "./comments.module.css";

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const { data } = await apiBase.get(`/comments/${eventId}`);
    setComments(data.comments);
  };

  useEffect(() => {
    if (showComments) {
      getComments();
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    apiBase.post(`/comments/${eventId}`, commentData);
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
};

export default Comments;
