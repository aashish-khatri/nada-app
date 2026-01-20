import { ViewStyle } from 'react-native';
import { colors } from './colors';

// Migrated from CSS shadow variables
export const shadows = {
  sm: {
    shadowColor: colors.clay[900],
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  } as ViewStyle,

  md: {
    shadowColor: colors.clay[900],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  } as ViewStyle,

  lg: {
    shadowColor: colors.clay[900],
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.1,
    shadowRadius: 24,
    elevation: 8,
  } as ViewStyle,

  xl: {
    shadowColor: colors.clay[900],
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.12,
    shadowRadius: 40,
    elevation: 12,
  } as ViewStyle,
};
