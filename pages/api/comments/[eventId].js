import { addDocument, getAllDocuments } from "../../../helpers/mongodb";

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

    const result = await addDocument(newComment, "comments");
    try {
      newComment.id = result.insertedId;
      res.status(201).json({ message: "Comment added", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Adding comment failed" });
    }
  }

  if (req.method === "GET") {
    try {
      const comments = await getAllDocuments(
        "comments",
        { _id: -1 },
        { eventId }
      );
      res.status(200).json({ comments });
    } catch (error) {
      res.status(500).json({ message: "Getting comments failed" });
    }
  }
};

export default handler;
