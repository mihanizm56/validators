import { getIsValueMatchPattern } from '@/utils/get-value-is-match-pattern';
import { validationErrors } from '@/constants';
import { CustomPatternValidateParams } from '@/types';
import { IRegularPatternValidator } from '@/types/pattern-validators';
import {
  simpleNumbersOnly,
  cyrrillicsOnly,
  emailPattern,
  phoneNumber,
  decimalNumbers,
} from '../../../patterns';

export class RegularPatternValidator implements IRegularPatternValidator {
  numbersOnly = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: simpleNumbersOnly,
    })
      ? { error: true, errorTextValue: validationErrors.incorrect }
      : { error: false };

  cyrillicsOnly = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: cyrrillicsOnly,
    })
      ? { error: true, errorTextValue: validationErrors.incorrect }
      : { error: false };

  decimalNumbers = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: decimalNumbers,
    })
      ? { error: true, errorTextValue: validationErrors.incorrect }
      : { error: false };

  email = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: emailPattern,
    })
      ? { error: true, errorTextValue: validationErrors.incorrect }
      : { error: false };

  phoneNumber = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: phoneNumber,
    })
      ? { error: true, errorTextValue: validationErrors.incorrect }
      : { error: false };

  customPatternValidate = ({
    value,
    pattern,
    errorTextValue,
  }: CustomPatternValidateParams) =>
    getIsValueMatchPattern({
      value,
      pattern,
    })
      ? {
          error: true,
          errorTextValue: errorTextValue || validationErrors.incorrect,
        }
      : { error: false };
}
