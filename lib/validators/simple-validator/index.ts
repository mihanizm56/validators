import { ISimpleValidator } from '@/types/simple-validators';
import { validationErrors } from '@/constants';

export class SimpleValidator extends ISimpleValidator {
  minLenghtValidate = (numberOfChars: number, errorTextValue?: string) => (
    value?: string,
  ) =>
    value && value.length && value.length < numberOfChars
      ? {
          error: true,
          errorTextValue: errorTextValue || validationErrors.minLenght,
        }
      : { error: false, errorTextValue: '' };

  maxLenghtValidate = (numberOfChars: number, errorTextValue?: string) => (
    value?: string,
  ) =>
    value && value.length && value.length > numberOfChars
      ? {
          error: true,
          errorTextValue: errorTextValue || validationErrors.maxLenght,
        }
      : { error: false, errorTextValue: '' };

  requiredValidator = (errorTextValue?: string) => (
    value?: string | Array<any>,
  ) => {
    if (value) {
      // if string is empty
      if (typeof value === 'string' && !Boolean(value.trim())) {
        return {
          error: true,
          errorTextValue: errorTextValue || validationErrors.required,
        };
      }

      // if array in empty
      if (value instanceof Array && value.length === 0) {
        return {
          error: true,
          errorTextValue: errorTextValue || validationErrors.required,
        };
      }

      // success ending
      return { error: false, errorTextValue: '' };
    }

    // if value is not valid
    return {
      error: true,
      errorTextValue: errorTextValue || validationErrors.required,
    };
  };

  // for backup compatibility
  requiredValidate = this.requiredValidator;

  rangeValidate = ({
    minValue,
    maxValue,
    errorTextValue,
    isStrict,
  }: {
    minValue: number;
    maxValue: number;
    errorTextValue?: string;
    isStrict?: boolean;
  }) => (value?: string) => {
    const numberValue = Number(value);

    const isValid = isStrict
      ? numberValue > minValue && numberValue < maxValue
      : numberValue >= minValue && numberValue <= maxValue;

    if (isValid) {
      return { error: false, errorTextValue: '' };
    }

    return {
      error: true,
      errorTextValue: errorTextValue || validationErrors.incorrect,
    };
  };
}
