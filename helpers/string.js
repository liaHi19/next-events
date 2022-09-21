export const readableDate = (date) => {
  if (!date) return;
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const transformText = (text) => {
  if (!text) return;
  return text.replace(", ", "\n");
};
