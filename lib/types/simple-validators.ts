import { ValidatorReturnsType } from './index';

export abstract class ISimpleValidator {
  abstract minLenghtValidate: (
    numberOfChars: number,
  ) => (value?: string) => ValidatorReturnsType;

  abstract maxLenghtValidate: (
    numberOfChars: number,
  ) => (value?: string) => ValidatorReturnsType;
}
