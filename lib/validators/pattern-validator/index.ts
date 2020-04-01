import { getIsValueMatchPattern } from '@/utils/get-value-is-match-pattern';
import { validationErrors } from '@/constants';
import { CustomPatternValidateParams } from '@/types';
import { IPatternValidator } from '@/types/pattern-validators';
import {
  simpleNumbersOnly,
  cyrrillicsOnly,
  emailPattern,
  phoneNumber,
  decimalNumbers,
  datePattern,
} from '@/patterns';

export class PatternValidator extends IPatternValidator {
  numbersOnly = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: simpleNumbersOnly,
    })
      ? { error: false, errorTextValue: '' }
      : { error: true, errorTextValue: validationErrors.incorrect };

  cyrillicsOnly = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: cyrrillicsOnly,
    })
      ? { error: false, errorTextValue: '' }
      : { error: true, errorTextValue: validationErrors.incorrect };

  decimalNumbers = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: decimalNumbers,
    })
      ? { error: false, errorTextValue: '' }
      : { error: true, errorTextValue: validationErrors.incorrect };

  email = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: emailPattern,
    })
      ? { error: false, errorTextValue: '' }
      : { error: true, errorTextValue: validationErrors.incorrect };

  phoneNumber = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: phoneNumber,
    })
      ? { error: false, errorTextValue: '' }
      : { error: true, errorTextValue: validationErrors.incorrect };

  dateOnly = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: datePattern,
    })
      ? { error: false, errorTextValue: '' }
      : { error: true, errorTextValue: validationErrors.incorrect };

  customPatternValidate = ({
    pattern,
    errorTextValue,
  }: CustomPatternValidateParams) => (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern,
    })
      ? { error: false, errorTextValue: '' }
      : {
          error: true,
          errorTextValue: errorTextValue || validationErrors.incorrect,
        };
}
