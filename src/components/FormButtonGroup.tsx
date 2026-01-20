import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { Button } from './Button';
import { spacing } from '../theme';

interface FormButtonGroupProps {
  /** Callback for secondary/back action */
  onSecondary?: () => void;
  /** Callback for primary/continue action */
  onPrimary: () => void;
  /** Secondary button label - defaults to "← Back" */
  secondaryLabel?: string;
  /** Primary button label - defaults to "Continue →" */
  primaryLabel?: string;
  /** Show secondary button - defaults to true if onSecondary is provided */
  showSecondary?: boolean;
  /** Loading state for primary button */
  loading?: boolean;
  /** Disable primary button */
  disabled?: boolean;
  /** Additional container styles */
  style?: ViewStyle;
}

/**
 * FormButtonGroup - Consistent button layout for form navigation
 * 
 * Layout Pattern (when both buttons shown):
 * [Secondary (50%)] [Primary (50%)]
 * 
 * Layout Pattern (single button):
 * [Primary (100%)]
 * 
 * Use cases:
 * - Onboarding flows: Back / Continue
 * - Forms: Cancel / Submit
 * - Single action: Submit only
 */
export const FormButtonGroup: React.FC<FormButtonGroupProps> = ({
  onSecondary,
  onPrimary,
  secondaryLabel = '← Back',
  primaryLabel = 'Continue →',
  showSecondary = !!onSecondary,
  loading = false,
  disabled = false,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      {showSecondary && onSecondary && (
        <Button
          title={secondaryLabel}
          variant="secondary"
          onPress={onSecondary}
          style={styles.button}
        />
      )}
      <Button
        title={primaryLabel}
        onPress={onPrimary}
        loading={loading}
        disabled={disabled}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.s3,
    marginTop: spacing.s6,
    marginBottom: spacing.s8,
  },
  button: {
    flex: 1,
  },
});
