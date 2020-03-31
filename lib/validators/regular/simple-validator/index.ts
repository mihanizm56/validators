import { IRegularSimpleValidator } from '@/types/simple-validators';
import { validationErrors } from '../../../constants';

export class RegularSimpleValidator extends IRegularSimpleValidator {
  minLenghtValidate = (numberOfChars: number) => (value?: string) =>
    value && value.length && value.length < numberOfChars
      ? { error: true, errorTextValue: validationErrors.minLenght }
      : { error: false };

  maxLenghtValidate = (numberOfChars: number) => (value?: string) =>
    value && value.length && value.length > numberOfChars
      ? { error: true, errorTextValue: validationErrors.maxLenght }
      : { error: false };

  requiredValidator = (value: string) =>
    Boolean(value.trim())
      ? { error: true, errorTextValue: validationErrors.required }
      : { error: false };
}
