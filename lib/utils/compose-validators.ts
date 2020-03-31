import { ComposeValidatorsParams } from '@/types';

export const composeValidators = ({ validators }: ComposeValidatorsParams) => (
  value?: string | number | Record<string, any> | Array<any>,
): string =>
  validators.reduce((prevError, validator) => {
    if (!Boolean(prevError)) {
      const error = validator(value);

      if (Boolean(error)) {
        return error;
      }
    }

    return prevError;
  }, '');
