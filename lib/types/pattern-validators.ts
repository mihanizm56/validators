import { CustomPatternValidateParams, ValidatorReturnsType } from './index';

export abstract class IPatternValidator {
  abstract numbersOnly: (
    errorTextValue?: string,
  ) => (value?: string) => ValidatorReturnsType;

  abstract cyrillicsOnly: (
    errorTextValue?: string,
  ) => (value?: string) => ValidatorReturnsType;

  abstract decimalNumbers: (
    errorTextValue?: string,
  ) => (value?: string) => ValidatorReturnsType;

  abstract email: (
    errorTextValue?: string,
  ) => (value?: string) => ValidatorReturnsType;

  abstract customPatternValidate: (
    params: CustomPatternValidateParams,
  ) => (value?: string) => ValidatorReturnsType;
}
