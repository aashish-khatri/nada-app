import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

interface TagProps {
  label: string;
  variant?: 'default' | 'gold' | 'sage';
  style?: ViewStyle;
}

export const Tag: React.FC<TagProps> = ({ label, variant = 'default', style }) => {
  const getContainerStyle = (): ViewStyle[] => {
    const baseStyle = styles.container;
    switch (variant) {
      case 'gold':
        return [baseStyle, styles.goldContainer];
      case 'sage':
        return [baseStyle, styles.sageContainer];
      default:
        return [baseStyle];
    }
  };

  const getTextStyle = (): TextStyle[] => {
    const baseStyle = styles.text;
    switch (variant) {
      case 'gold':
        return [baseStyle, styles.goldText];
      case 'sage':
        return [baseStyle, styles.sageText];
      default:
        return [baseStyle];
    }
  };

  return (
    <View style={[...getContainerStyle(), style]}>
      <Text style={getTextStyle()}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.s1,
    paddingHorizontal: spacing.s3,
    backgroundColor: colors.clay[100],
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.clay[200],
  },
  text: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.clay[700],
  },
  goldContainer: {
    backgroundColor: colors.gold[100],
    borderColor: colors.gold[200],
  },
  goldText: {
    color: colors.gold[700],
  },
  sageContainer: {
    backgroundColor: colors.sage[100],
    borderColor: colors.sage[200],
  },
  sageText: {
    color: colors.sage[500],
  },
});
