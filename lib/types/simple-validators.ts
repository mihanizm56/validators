import { ValidatorReturnsType } from './index';

export abstract class ISimpleValidator {
  abstract minLenghtValidate: (
    errorTextValue?: string,
  ) => (numberOfChars: number) => (value?: string) => ValidatorReturnsType;

  abstract maxLenghtValidate: (
    errorTextValue?: string,
  ) => (numberOfChars: number) => (value?: string) => ValidatorReturnsType;

  abstract requiredValidator: (
    errorTextValue?: string,
  ) => (value: string) => ValidatorReturnsType;
}
