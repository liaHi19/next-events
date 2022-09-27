import fs from "fs";
import { buildRegisterPath, extractData } from "../../helpers/serverApi";

const handler = (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;

    const newEmail = {
      id: new Date().toISOString(),
      email,
    };

    //storing
    const filePath = buildRegisterPath();
    const data = extractData(filePath);

    data.push(newEmail);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "ok", email: data });
  }
};

export default handler;
