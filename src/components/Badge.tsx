import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'gold';

interface BadgeProps {
  /** Badge label text */
  label: string;
  /** Visual variant */
  variant?: BadgeVariant;
  /** Show icon before label */
  icon?: string;
  /** Size - small for inline, medium for standalone */
  size?: 'small' | 'medium';
  /** Additional styles */
  style?: ViewStyle;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string; border: string }> = {
  default: {
    bg: colors.warm[100],
    text: colors.warm[700],
    border: colors.warm[200],
  },
  success: {
    bg: colors.sage[100],
    text: colors.sage[600],
    border: colors.sage[200],
  },
  warning: {
    bg: colors.gold[100],
    text: colors.gold[700],
    border: colors.gold[200],
  },
  error: {
    bg: '#FEE2E2',
    text: colors.error,
    border: '#FECACA',
  },
  info: {
    bg: colors.indigo[100],
    text: colors.indigo[500],
    border: colors.indigo[100],
  },
  gold: {
    bg: colors.gold[100],
    text: colors.gold[700],
    border: colors.gold[200],
  },
};

/**
 * Badge - Status indicator component
 * 
 * Use cases:
 * - Verification status (✓ Verified)
 * - Request status (Pending, Approved, Rejected)
 * - Connection degree (1st°, 2nd°)
 * - Feature tags (Premium, New)
 */
export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'default',
  icon,
  size = 'small',
  style,
}) => {
  const variantStyle = variantStyles[variant];

  return (
    <View
      style={[
        styles.container,
        size === 'medium' && styles.containerMedium,
        {
          backgroundColor: variantStyle.bg,
          borderColor: variantStyle.border,
        },
        style,
      ]}
    >
      {icon && <Text style={[styles.icon, size === 'medium' && styles.iconMedium]}>{icon}</Text>}
      <Text
        style={[
          styles.label,
          size === 'medium' && styles.labelMedium,
          { color: variantStyle.text },
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s1,
    paddingHorizontal: spacing.s2,
    borderRadius: radius.sm,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  containerMedium: {
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s3,
    borderRadius: radius.md,
  },
  icon: {
    fontSize: 10,
    marginRight: spacing.s1,
  },
  iconMedium: {
    fontSize: 14,
    marginRight: spacing.s2,
  },
  label: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
  },
  labelMedium: {
    fontSize: typography.fontSize.sm,
  },
});
