// Migrated from CSS :root variables
export const colors = {
  // Clay - Primary brand color
  clay: {
    50: '#FDF6F3',
    100: '#F9E8E0',
    200: '#F4D4C8',
    300: '#E8B8A3',
    400: '#D89A7E',
    500: '#C97D5D',
    600: '#B56746',
    700: '#8F4E33',
    800: '#6B3A25',
    900: '#4A2818',
  },

  // Gold - Accent color
  gold: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#D9A12B',
    600: '#B8821F',
    700: '#8F6719',
    800: '#6B4E13',
  },

  // Sage - Success states
  sage: {
    100: '#E8EDE0',
    200: '#D4DEC8',
    400: '#8FA671',
    500: '#6B8A4F',
    600: '#5A7741',
  },

  // Indigo - Info states
  indigo: {
    100: '#E3E5F0',
    400: '#7380B0',
    500: '#4F5E8F',
  },

  // Warm - Neutral colors
  warm: {
    white: '#FDFCFB',
    50: '#FAF9F7',
    100: '#F5F3F0',
    200: '#E8E4DF',
    300: '#D4CFC7',
    400: '#B5ADA3',
    500: '#8A7F71',
    600: '#6B6159',
    700: '#4D453E',
    800: '#342E28',
    900: '#1F1A16',
  },

  // Degree badges
  degree: {
    0: '#4CAF50', // Direct contact
    1: '#2196F3', // 1st connection
    2: '#9C27B0', // 2nd connection
    3: '#FF9800', // 3rd connection
  },

  // Semantic colors
  error: '#C45847',
  success: '#6B8A4F',
  warning: '#D9A12B',
  info: '#4F5E8F',
};

export type ColorName = keyof typeof colors;
