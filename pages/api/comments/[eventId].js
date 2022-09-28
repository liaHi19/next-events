import { closeDB, addComment, getAllComments } from "../../../helpers/mongodb";

const handler = async (req, res) => {
  const { eventId } = req.query;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const result = await addComment(newComment);
    newComment.id = result.insertedId;
    res.status(201).json({ message: "Comment added", comment: newComment });
  }

  if (req.method === "GET") {
    const comments = await getAllComments({ eventId });

    res.status(200).json({ comments });
  }
  await closeDB();
};

export default handler;
