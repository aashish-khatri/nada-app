import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { colors, spacing, typography, radius } from '../theme';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  /** Label displayed above the radio group */
  label?: string;
  /** Array of options to display */
  options: RadioOption[];
  /** Currently selected value */
  value: string | null;
  /** Callback when selection changes */
  onChange: (value: string) => void;
  /** Number of columns - defaults to options.length (all in one row) */
  columns?: number;
  /** Additional container styles */
  style?: ViewStyle;
}

/**
 * RadioGroup - Consistent selectable option group
 * 
 * Layout Pattern:
 * [Label]
 * [Option 1] [Option 2] [Option 3]
 * 
 * Use cases:
 * - Gender selection (Male / Female / Other)
 * - Lifestyle preferences (Never / Socially / Regularly)
 * - Binary choices (Yes / No)
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  columns,
  style,
}) => {
  const numColumns = columns ?? options.length;

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.optionsContainer, { flexWrap: numColumns < options.length ? 'wrap' : 'nowrap' }]}>
        {options.map((option) => {
          const isSelected = value === option.value;
          return (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.option,
                isSelected && styles.optionSelected,
                { flexBasis: numColumns ? `${100 / numColumns - 2}%` : undefined },
              ]}
              onPress={() => onChange(option.value)}
              activeOpacity={0.7}
            >
              <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.s5,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[700],
    marginBottom: spacing.s2,
  },
  optionsContainer: {
    flexDirection: 'row',
    gap: spacing.s3,
  },
  option: {
    flex: 1,
    minWidth: 80,
    paddingVertical: spacing.s4,
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.md,
    alignItems: 'center',
    backgroundColor: colors.warm.white,
  },
  optionSelected: {
    borderColor: colors.clay[500],
    backgroundColor: colors.clay[50],
  },
  optionText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.warm[700],
  },
  optionTextSelected: {
    color: colors.clay[700],
  },
});
