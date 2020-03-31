import { Validator } from '@/types';

export const composeValidators = (validators: Array<Validator>) => (
  value?: string | number | Record<string, any> | Array<any>,
): string =>
  validators.reduce((prevError, validator) => {
    if (!Boolean(prevError)) {
      const { error, errorTextValue } = validator(value);

      if (error) {
        return errorTextValue;
      }
    }

    return prevError;
  }, '');
