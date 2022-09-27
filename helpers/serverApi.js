import path from "path";
import fs from "fs";

export const buildRegisterPath = () => {
  return path.join(process.cwd(), "data", "register.json");
};

export const buildCommentPath = () => {
  return path.join(process.cwd(), "data", "comment.json");
};

export const extractData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
};
