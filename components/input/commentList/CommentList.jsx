import styles from "./comment-list.module.css";

const CommentList = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.length > 0 &&
        comments.map((comment) => (
          <li key={comment._id}>
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
