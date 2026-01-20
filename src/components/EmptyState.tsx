import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, spacing, typography, radius } from '../theme';

interface EmptyStateProps {
  /** Emoji or icon to display */
  icon?: string;
  /** Main title text */
  title: string;
  /** Description text */
  description?: string;
  /** Action button (optional) */
  action?: React.ReactNode;
  /** Additional container styles */
  style?: ViewStyle;
}

/**
 * EmptyState - Placeholder for empty lists and screens
 * 
 * Use cases:
 * - No matches found
 * - No messages yet
 * - No activity yet
 * - Search with no results
 */
export const EmptyState: React.FC<EmptyStateProps> = ({
  icon = '📭',
  title,
  description,
  action,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      {action && <View style={styles.action}>{action}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.s8,
    paddingVertical: spacing.s10,
  },
  icon: {
    fontSize: 64,
    marginBottom: spacing.s5,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    textAlign: 'center',
    marginBottom: spacing.s3,
  },
  description: {
    fontSize: typography.fontSize.base,
    color: colors.warm[500],
    textAlign: 'center',
    lineHeight: typography.fontSize.base * 1.5,
    maxWidth: 280,
    marginBottom: spacing.s5,
  },
  action: {
    marginTop: spacing.s4,
  },
});
