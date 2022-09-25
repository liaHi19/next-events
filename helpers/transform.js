export const transformData = (data) => {
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    const transformedData = [];

    for (let key in data) {
      transformedData.push({
        id: key,
        title: data[key].title,
        description: data[key].description,
        location: data[key].location,
        date: data[key].date,
        image: data[key].image,
        isFeatured: data[key].isFeatured,
      });
    }

    return transformedData;
  }
};
