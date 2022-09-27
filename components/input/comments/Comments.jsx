import { useState } from "react";

import { apiBase } from "../../../api/axiosConfig";

import CommentList from "../commentList/CommentList";
import NewComment from "../newComment/NewComment";
import { getEventComments } from "../../../api/comments";

import styles from "./comments.module.css";

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    apiBase.post("/comment", { eventId, ...commentData });
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList eventId={eventId} />}
    </section>
  );
};

export default Comments;
