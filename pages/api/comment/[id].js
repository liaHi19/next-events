import { buildCommentPath, extractData } from "../../../helpers/serverApi";

const handler = (req, res) => {
  const { id } = req.query;

  const filePath = buildCommentPath();
  const data = extractData(filePath);

  const currentEventComments = data.find((comment) => comment[id]);
  const comments = currentEventComments[id];

  res.status(200).json({ comments });
};

export default handler;
