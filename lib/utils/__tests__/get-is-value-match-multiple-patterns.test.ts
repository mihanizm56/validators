import { getIsValueMatchMultiplePatterns } from '../get-is-value-match-multiple-patterns';

describe('getIsValueMatchMultiplePatterns', () => {
  test('all patterns in list are valid if allValid true', async () => {
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'v2.2.2-test',
        patterns: [/v(\d)+\.(\d)+\.(\d)-test/, /\d+/g, /test/g],
        allValid: true,
      }),
    ).toBeTruthy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'v2.2.2',
        patterns: [/v(\d)+\.(\d)+\.(\d)/, /\d+/g, /v/],
        allValid: true,
      }),
    ).toBeTruthy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'm7275.56@mail.ru',
        patterns: [/\w{5}\.\d{2}@\w+\.\w{2}/, /\d+/g, /7275/],
        allValid: true,
      }),
    ).toBeTruthy();
  });
  test('one pattern in list is invalid if allValid true', () => {
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'v2.2.2-test',
        patterns: [/v(\d)+\.(\d)+\.(\d)-test/, /\d+/g, /test1/g],
        allValid: true,
      }),
    ).toBeFalsy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'v2.2.2',
        patterns: [/v(\d)+\.(\d)+\.(\d)/, /\d+/g, /v1/],
        allValid: true,
      }),
    ).toBeFalsy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'm7275.56@mail.ru',
        patterns: [/\w{5}\.\d{2}@\w+\.\w{2}/, /\d+/g, /7276/],
        allValid: true,
      }),
    ).toBeFalsy();
  });
  test('one pattern in list valid if allValid false', () => {
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'v2.2.2-test',
        patterns: [/v(\d)+\.(\d)+\.(\d)-test/, /\d/g, /test1/g],
      }),
    ).toBeTruthy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'v2.2.2',
        patterns: [/v(\d)+\.(\d)+\.(\d)/, /\d+/g, /v1/],
      }),
    ).toBeTruthy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'm7275.56@mail.ru',
        patterns: [/\w{5}\.\d{2}@\w+\.\w{2}/, /\d+/g, /7276/],
      }),
    ).toBeTruthy();
  });
  test('all patterns in list are invalid if allValid false', () => {
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'v2.2.2-test',
        patterns: [/\s/, /test1/g],
      }),
    ).toBeFalsy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: '2.2.2',
        patterns: [/\s/, /2\.2\.1/],
      }),
    ).toBeFalsy();
    expect(
      getIsValueMatchMultiplePatterns({
        value: 'm7275.56@mail.ru',
        patterns: [/v1/, /7276/],
      }),
    ).toBeFalsy();
  });
});
