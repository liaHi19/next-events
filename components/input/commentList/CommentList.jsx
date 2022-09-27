import { useEffect, useState } from "react";

import { getEventComments } from "../../../api/comments";

import styles from "./comment-list.module.css";

const CommentList = ({ eventId }) => {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const data = await getEventComments(eventId);
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, [eventId]);

  return (
    <ul className={styles.comments}>
      {comments.length > 0 &&
        comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.name}</address>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CommentList;
