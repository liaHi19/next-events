import { useState, useEffect } from "react";

import { apiBase } from "../../../api/axiosConfig";
import { useNotification } from "../../../store/NotificationContext";

import CommentList from "../commentList/CommentList";
import NewComment from "../newComment/NewComment";

import styles from "./comments.module.css";

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const { showNotification } = useNotification();

  const getComments = async () => {
    try {
      setLoadingComments(true);
      const { data } = await apiBase.get(`/comments/${eventId}`);
      setComments(data.comments);
      setLoadingComments(false);
    } catch (error) {
      setLoadingComments(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (showComments) {
      getComments();
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  async function addCommentHandler(commentData) {
    try {
      showNotification({
        title: "Sending comment ...",
        message: "Your comment is currently being stored",
        status: "pending",
      });
      await apiBase.post(`/comments/${eventId}`, commentData);
      showNotification({
        title: "Success",
        message: "Your comment was saved",
        status: "success",
      });
    } catch (error) {
      showNotification({
        title: "Error",
        message: error.message || "Something went wrong",
        status: "error",
      });
    }
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !loadingComments && <CommentList comments={comments} />}
      {showComments && loadingComments && <p>Loading...</p>}
    </section>
  );
};

export default Comments;
