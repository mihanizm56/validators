import { MatchPatternParamsType } from '@/types';

export const getIsValueMatchPattern = ({
  pattern,
  value = '',
}: MatchPatternParamsType): boolean => Boolean(value.match(pattern));
