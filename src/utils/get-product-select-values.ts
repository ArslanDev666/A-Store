export const getProductSelectValues = (array?: string[] | number[]) => {
  if (!array) return null;

  return array.map((sticker, index) => ({
    key: index.toString(),
    content: sticker,
  }));
};
