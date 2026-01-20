import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

interface TagProps {
  label: string;
  variant?: 'default' | 'gold' | 'sage';
}

export const Tag: React.FC<TagProps> = ({ label, variant = 'default' }) => {
  const containerStyle = [styles.container];
  const textStyle = [styles.text];

  if (variant === 'gold') {
    containerStyle.push(styles.goldContainer);
    textStyle.push(styles.goldText);
  } else if (variant === 'sage') {
    containerStyle.push(styles.sageContainer);
    textStyle.push(styles.sageText);
  }

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s4,
    backgroundColor: colors.clay[100],
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.clay[200],
  },
  text: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.clay[800],
  },
  goldContainer: {
    backgroundColor: colors.gold[100],
    borderColor: colors.gold[200],
  },
  goldText: {
    color: colors.gold[800],
  },
  sageContainer: {
    backgroundColor: colors.sage[100],
    borderColor: colors.sage[200],
  },
  sageText: {
    color: colors.sage[500],
  },
});
