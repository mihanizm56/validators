import { Validator, ValidatorReturnsType } from '@/types';

export const composeValidators = (validators: Array<Validator>) => (
  value?: string | number | Record<string, any> | Array<any>,
) =>
  validators.reduce((prevError, validator) => {
    if (!Boolean(prevError)) {
      const { error, errorTextValue }: ValidatorReturnsType = validator(value);

      if (error) {
        return errorTextValue;
      }
    }

    return prevError;
  }, '');
