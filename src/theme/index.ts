// Central theme export
export * from './colors';
export * from './spacing';
export * from './typography';
export * from './shadows';

import { colors } from './colors';
import { spacing, radius } from './spacing';
import { typography } from './typography';
import { shadows } from './shadows';

export const theme = {
  colors,
  spacing,
  radius,
  typography,
  shadows,
};

export type Theme = typeof theme;
