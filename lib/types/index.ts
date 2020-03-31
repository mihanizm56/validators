export type CustomPatternValidateParams = {
  value: string;
  pattern: RegExp;
  errorTextValue?: string;
};

export type Validator = (
  value?: string | number | Record<string, any> | Array<any>,
) => string;

export type ComposeValidatorsParams = {
  validators: Array<Validator>;
};

export type MatchPatternParamsType = {
  pattern: RegExp;
  value?: string;
};

export type FormValidatorReturnsType = string;

export type RegularValidatorReturnsType = {
  error: boolean;
  errorTextValue?: string;
};
