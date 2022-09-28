import { closeDB, addEmail } from "../../helpers/mongodb";

const handler = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(422).json({ message: "Invalid email address" });
    return;
  }
  if (req.method === "POST") {
    await addEmail(email);
    res.status(201).json({ message: "Email added", email });
    closeDB();
  }
};

export default handler;
