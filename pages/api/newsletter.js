const handler = (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes("@")) {
    res.status(422).json({ message: "Invalid email address" });
    return;
  }
  if (req.method === "POST") {
    const newEmail = {
      id: new Date().toISOString(),
      email,
    };
    console.log(newEmail);
    res.status(201).json({ message: "Email added", email: newEmail });
  }
};

export default handler;
