export const transformData = (data) => {
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    const transformedData = [];

    for (let key in data) {
      transformedData.push({
        id: key,
        ...data[key],
      });
    }

    return transformedData;
  }
};

export const findById = (array, id) => {
  if (!array.length) {
    return;
  }
  return array.find((item) => item.id === id);
};
