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

  requiredValidator = (errorTextValue?: string) => (value?: string) => {
    if (value) {
      if (typeof value === 'string') {
        return Boolean(value.trim())
          ? { error: false, errorTextValue: '' }
          : {
              error: true,
              errorTextValue: errorTextValue || validationErrors.required,
            };
      }

      return { error: false, errorTextValue: '' };
    }

    return {
      error: true,
      errorTextValue: errorTextValue || validationErrors.required,
    };
  };
}
