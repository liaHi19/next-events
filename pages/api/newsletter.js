import { closeDB, addDocument } from "../../helpers/mongodb";

const handler = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(422).json({ message: "Invalid email address" });
    return;
  }
  if (req.method === "POST") {
    try {
      const newEmail = await addDocument({ email }, "emails");
      res.status(201).json({ message: "Email added", newEmail });
      await closeDB();
    } catch (error) {
      res.status(500).json({ message: "Adding email failed" });
      return;
    }
  }
};

export default handler;
