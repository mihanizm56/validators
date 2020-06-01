import { ValidatorReturnsType } from './index';

export abstract class ISimpleValidator {
  abstract minLenghtValidate: (
    numberOfChars: number,
    errorTextValue?: string,
  ) => (value?: string) => ValidatorReturnsType;

  abstract maxLenghtValidate: (
    numberOfChars: number,
    errorTextValue?: string,
  ) => (value?: string) => ValidatorReturnsType;

  abstract requiredValidator: (
    errorTextValue?: string,
  ) => (value: string) => ValidatorReturnsType;
}
