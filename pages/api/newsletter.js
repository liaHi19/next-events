import {
  closeDB,
  addDocument,
  checkExistingDocument,
} from "../../helpers/mongodb";

const handler = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(422).json({ message: "Invalid email address" });
    return;
  }

  const existingDoc = await checkExistingDocument({ email }, "emails");
  if (req.method === "POST") {
    if (!existingDoc) {
      try {
        const newEmail = await addDocument({ email }, "emails");
        res.status(201).json({ message: "Email added", newEmail });
        await closeDB();
      } catch (error) {
        res.status(500).json({ message: "Adding email failed" });
        return;
      }
    } else {
      res.status(400).json({ message: "You've already registered" });
    }
  }
};

export default handler;
