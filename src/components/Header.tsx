import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, spacing, typography } from '../theme';

interface HeaderProps {
  /** Screen title displayed in header */
  title: string;
  /** Callback for back button - if undefined, back button is hidden */
  onBack?: () => void;
  /** Custom back icon/text */
  backIcon?: string;
  /** Right side action element */
  rightAction?: React.ReactNode;
  /** Additional header container styles */
  style?: ViewStyle;
  /** Show border at bottom - defaults to true */
  showBorder?: boolean;
}

/**
 * Header - Consistent header component for all screens
 * 
 * Layout Pattern:
 * [Back Button] [Title] [Right Action]
 * 
 * Use cases:
 * - Main screens: title only
 * - Flow screens: title + back button
 * - Profile/Settings: title + action button
 */
export const Header: React.FC<HeaderProps> = ({
  title,
  onBack,
  backIcon = '←',
  rightAction,
  style,
  showBorder = true,
}) => {
  return (
    <View style={[styles.container, showBorder && styles.border, style]}>
      {/* Back Button or Spacer */}
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backIcon}>{backIcon}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.spacer} />
      )}

      {/* Title */}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {/* Right Action or Spacer */}
      {rightAction ? (
        <View style={styles.rightAction}>{rightAction}</View>
      ) : (
        <View style={styles.spacer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s4,
    backgroundColor: colors.warm.white,
    minHeight: 56,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: colors.warm[200],
  },
  backButton: {
    padding: spacing.s2,
    minWidth: 44,
    alignItems: 'flex-start',
  },
  backIcon: {
    fontSize: typography.fontSize['2xl'],
    color: colors.warm[600],
  },
  title: {
    flex: 1,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    textAlign: 'center',
  },
  rightAction: {
    minWidth: 44,
    alignItems: 'flex-end',
  },
  spacer: {
    minWidth: 44,
  },
});
