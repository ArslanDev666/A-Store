export type ParamsNamesProductType = 'color' | 'size' | 'sticker' | 'model';

export const PARAMS_TEXTS: Record<ParamsNamesProductType, string> = {
  color: 'Цвет',
  size: 'Размер',
  sticker: 'Номер стикера',
  model: 'Модель телефона',
};

export const getNameParamText = (paramName: ParamsNamesProductType): string =>
  PARAMS_TEXTS[paramName] || '';
