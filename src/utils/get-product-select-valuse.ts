export const getProductSelectValues = (array?: string[] | number[]) => {
  if (!array) return [];

  return array.map((sticker, index) => ({
    key: index.toString(),
    content: sticker,
  }));
};
