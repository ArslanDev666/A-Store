export type ParamsNamesProductType = 'color' | 'size' | 'sticker' | 'model';

const PARAM_TEXT: Record<ParamsNamesProductType, string> = {
  color: 'Цвет',
  size: 'Размер',
  sticker: 'Номер стикера',
  model: 'Модель телефона',
};

export const getNameParamText = (paramName: ParamsNamesProductType): string =>
  PARAM_TEXT[paramName] || '';
