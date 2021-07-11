type ParamsType = {
  patterns: Array<RegExp>;
  value?: string;
  allValid?: boolean;
};

export const getIsValueMatchMultiplePatterns = ({
  patterns,
  value = '',
  allValid = false,
}: ParamsType): boolean =>
  patterns.reduce((acc: boolean, pattern) => {
    if ((acc && !allValid) || (!acc && allValid)) {
      return acc;
    }

    return pattern.test(value);
  }, allValid);
