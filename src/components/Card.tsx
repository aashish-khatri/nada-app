import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, radius, shadows } from '../theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.warm.white,
    borderRadius: radius.xl,
    padding: spacing.s6,
    borderWidth: 1,
    borderColor: colors.warm[200],
    marginBottom: spacing.s5,
    ...shadows.sm,
  },
});
