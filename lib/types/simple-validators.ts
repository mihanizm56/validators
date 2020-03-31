import { RegularValidatorReturnsType, FormValidatorReturnsType } from './index';

export abstract class IFormSimpleValidator {
  abstract formMinLenghtValidate: (
    numberOfChars: number,
  ) => (value?: string) => FormValidatorReturnsType;

  abstract formMaxLenghtValidate: (
    numberOfChars: number,
  ) => (value?: string) => FormValidatorReturnsType;

  abstract formRequiredValidator: (value: string) => FormValidatorReturnsType;
}

export abstract class IRegularSimpleValidator {
  abstract minLenghtValidate: (
    numberOfChars: number,
  ) => (value?: string) => RegularValidatorReturnsType;

  abstract maxLenghtValidate: (
    numberOfChars: number,
  ) => (value?: string) => RegularValidatorReturnsType;

  abstract requiredValidator: (value: string) => RegularValidatorReturnsType;
}
