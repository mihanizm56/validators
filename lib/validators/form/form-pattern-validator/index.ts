import { getIsValueMatchPattern } from '@/utils/get-value-is-match-pattern';
import { validationErrors } from '@/constants';
import { CustomPatternValidateParams } from '@/types';
import { IFormPatternValidator } from '@/types/pattern-validators';
import {
  simpleNumbersOnly,
  cyrrillicsOnly,
  emailPattern,
  phoneNumber,
  decimalNumbers,
} from '../../../patterns';

export class FormPatternValidator extends IFormPatternValidator {
  formNumbersOnly = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: simpleNumbersOnly,
    })
      ? ''
      : validationErrors.incorrect;

  formCyrillicsOnly = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: cyrrillicsOnly,
    })
      ? ''
      : validationErrors.incorrect;

  formDecimalNumbers = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: decimalNumbers,
    })
      ? ''
      : validationErrors.incorrect;

  formEmail = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: emailPattern,
    })
      ? ''
      : validationErrors.incorrect;

  formPhoneNumber = (value?: string) =>
    getIsValueMatchPattern({
      value,
      pattern: phoneNumber,
    })
      ? ''
      : validationErrors.incorrect;

  formCustomPatternValidate = ({
    value,
    pattern,
    errorTextValue,
  }: CustomPatternValidateParams) =>
    getIsValueMatchPattern({
      value,
      pattern,
    })
      ? ''
      : errorTextValue || validationErrors.incorrect;
}
