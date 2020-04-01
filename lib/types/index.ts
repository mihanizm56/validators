export type CustomPatternValidateParams = {
  pattern: RegExp;
  errorTextValue?: string;
};

export type ValidatorReturnsType = {
  error: boolean;
  errorTextValue: string;
};

export type Validator = (
  value?: string | number | Record<string, any> | Array<any>,
) => ValidatorReturnsType;

export type MatchPatternParamsType = {
  pattern: RegExp;
  value?: string;
};

export type FormValidatorReturnsType = string;
