import path from "path";
import fs from "fs";

export const buildRegisterPath = () => {
  return path.join(process.cwd(), "data", "newsletter.json");
};

export const buildCommentPath = () => {
  return path.join(process.cwd(), "data", "comments.json");
};

export const extractData = (filePath) => {
  const fileData = fs.readFileSync(filePath);
  return JSON.parse(fileData);
};
