import fs from "fs";
import { buildCommentPath, extractData } from "../../../helpers/serverApi";

const handler = (req, res) => {
  const filePath = buildCommentPath();
  const data = extractData(filePath);

  if (req.method === "POST") {
    const { eventId, email, name, text } = req.body;
    console.log(email, name, text, eventId);

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    const currentEvent = data.find((event) => event[eventId]);
    currentEvent
      ? currentEvent[eventId].push(newComment)
      : data.push({ [eventId]: [newComment] });

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json(JSON.stringify(data));
  } else {
    res.status(200).json({ comments: data });
  }
};

export default handler;
