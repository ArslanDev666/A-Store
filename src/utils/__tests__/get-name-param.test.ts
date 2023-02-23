import { getNameParamText, PARAMS_TEXTS, ParamsNamesProductType } from './../get-name-param';

describe('ggetNameParamText tests', () => {
  it('should get color name', () => {
    expect(getNameParamText('color')).toEqual(PARAMS_TEXTS.color);
  });

  it('should get empty string', () => {
    expect(getNameParamText('color12312' as ParamsNamesProductType)).toEqual('');
  });
});
