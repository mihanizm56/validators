import { IFormSimpleValidator } from '@/types/simple-validators';
import { validationErrors } from '../../../constants';

export class FormSimpleValidator extends IFormSimpleValidator {
  formMinLenghtValidate = (numberOfChars: number) => (value?: string) =>
    value && value.length && value.length < numberOfChars
      ? validationErrors.minLenght
      : '';

  formMaxLenghtValidate = (numberOfChars: number) => (value?: string) =>
    value && value.length && value.length > numberOfChars
      ? validationErrors.maxLenght
      : '';

  formRequiredValidator = (value?: string) =>
    value && Boolean(value.trim()) ? '' : validationErrors.required;
}
