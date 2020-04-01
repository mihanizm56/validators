import { CustomPatternValidateParams, ValidatorReturnsType } from './index';

export abstract class IPatternValidator {
  abstract numbersOnly: (value?: string) => ValidatorReturnsType;

  abstract cyrillicsOnly: (value?: string) => ValidatorReturnsType;

  abstract decimalNumbers: (value?: string) => ValidatorReturnsType;

  abstract email: (value?: string) => ValidatorReturnsType;

  abstract customPatternValidate: (
    params: CustomPatternValidateParams,
  ) => (value?: string) => ValidatorReturnsType;
}
