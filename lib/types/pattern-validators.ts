import {
  CustomPatternValidateParams,
  RegularValidatorReturnsType,
  FormValidatorReturnsType,
} from './index';

export abstract class IFormPatternValidator {
  abstract formNumbersOnly: (value?: string) => FormValidatorReturnsType;

  abstract formCyrillicsOnly: (value?: string) => FormValidatorReturnsType;

  abstract formDecimalNumbers: (value?: string) => FormValidatorReturnsType;

  abstract formEmail: (value?: string) => FormValidatorReturnsType;

  abstract formCustomPatternValidate: (
    params: CustomPatternValidateParams,
  ) => FormValidatorReturnsType;
}

export abstract class IRegularPatternValidator {
  abstract numbersOnly: (value?: string) => RegularValidatorReturnsType;

  abstract cyrillicsOnly: (value?: string) => RegularValidatorReturnsType;

  abstract decimalNumbers: (value?: string) => RegularValidatorReturnsType;

  abstract email: (value?: string) => RegularValidatorReturnsType;

  abstract customPatternValidate: (
    params: CustomPatternValidateParams,
  ) => RegularValidatorReturnsType;
}
