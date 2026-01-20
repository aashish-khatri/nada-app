import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, ActivityIndicator } from 'react-native';
import { colors, spacing, typography, radius, shadows } from '../theme';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        styles[size],
        isDisabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' ? colors.warm.white : colors.clay[600]} 
          size="small" 
        />
      ) : (
        <Text style={[styles.text, styles[`text_${variant}`]]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: 48,
    ...shadows.sm,
  },
  primary: {
    backgroundColor: colors.clay[600],
  },
  secondary: {
    backgroundColor: colors.warm.white,
    borderWidth: 2,
    borderColor: colors.warm[300],
  },
  tertiary: {
    backgroundColor: 'transparent',
    shadowOpacity: 0,
    elevation: 0,
  },
  danger: {
    backgroundColor: colors.clay[100],
    borderWidth: 2,
    borderColor: colors.clay[400],
  },
  small: {
    paddingVertical: spacing.s3,
    paddingHorizontal: spacing.s4,
    minHeight: 40,
  },
  medium: {
    paddingVertical: spacing.s4,
    paddingHorizontal: spacing.s6,
  },
  large: {
    paddingVertical: spacing.s5,
    paddingHorizontal: spacing.s8,
    minHeight: 56,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
  },
  text_primary: {
    color: colors.warm.white,
  },
  text_secondary: {
    color: colors.warm[700],
  },
  text_tertiary: {
    color: colors.clay[600],
  },
  text_danger: {
    color: colors.clay[700],
  },
});