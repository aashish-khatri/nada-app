import React from 'react';
import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

type AvatarSize = 'small' | 'medium' | 'large' | 'xlarge';

interface AvatarProps {
  /** Image URL or null for placeholder */
  source?: string | null;
  /** Size preset */
  size?: AvatarSize;
  /** User's name for placeholder initials */
  name?: string;
  /** Show verification badge */
  verified?: boolean;
  /** Show online indicator */
  online?: boolean;
  /** Degree badge (0-3) */
  degree?: number;
  /** Additional container styles */
  style?: ViewStyle;
}

const sizeMap: Record<AvatarSize, number> = {
  small: 40,
  medium: 52,
  large: 80,
  xlarge: 120,
};

const getInitials = (name: string): string => {
  const parts = name.trim().split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

const getDegreeColor = (degree: number): string => {
  const degreeColors: Record<number, string> = {
    0: colors.degree[0],
    1: colors.degree[1],
    2: colors.degree[2],
    3: colors.degree[3],
  };
  return degreeColors[degree] || colors.warm[400];
};

/**
 * Avatar - Profile image component with badges
 * 
 * Features:
 * - Image or initials fallback
 * - Size variants (small/medium/large/xlarge)
 * - Verification badge (gold checkmark)
 * - Online indicator (green dot)
 * - Degree badge (connection level)
 */
export const Avatar: React.FC<AvatarProps> = ({
  source,
  size = 'medium',
  name = '?',
  verified = false,
  online = false,
  degree,
  style,
}) => {
  const dimension = sizeMap[size];
  const fontSize = dimension * 0.4;

  return (
    <View style={[styles.container, { width: dimension, height: dimension }, style]}>
      {source ? (
        <Image
          source={{ uri: source }}
          style={[styles.image, { width: dimension, height: dimension, borderRadius: dimension / 2 }]}
        />
      ) : (
        <View style={[styles.placeholder, { width: dimension, height: dimension, borderRadius: dimension / 2 }]}>
          <Text style={[styles.initials, { fontSize }]}>{getInitials(name)}</Text>
        </View>
      )}

      {/* Verification Badge */}
      {verified && (
        <View style={[styles.verifiedBadge, size === 'small' && styles.badgeSmall]}>
          <Text style={styles.verifiedText}>✓</Text>
        </View>
      )}

      {/* Online Indicator */}
      {online && (
        <View style={[styles.onlineIndicator, size === 'small' && styles.indicatorSmall]} />
      )}

      {/* Degree Badge */}
      {degree !== undefined && (
        <View style={[styles.degreeBadge, { backgroundColor: getDegreeColor(degree) }]}>
          <Text style={styles.degreeText}>{degree}°</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    resizeMode: 'cover',
  },
  placeholder: {
    backgroundColor: colors.clay[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    color: colors.clay[600],
    fontWeight: typography.fontWeight.semibold,
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.gold[500],
    borderRadius: radius.full,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.warm.white,
  },
  badgeSmall: {
    width: 14,
    height: 14,
    borderWidth: 1,
  },
  verifiedText: {
    color: colors.warm.white,
    fontSize: 10,
    fontWeight: typography.fontWeight.bold,
  },
  onlineIndicator: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 14,
    height: 14,
    backgroundColor: colors.sage[500],
    borderRadius: radius.full,
    borderWidth: 2,
    borderColor: colors.warm.white,
  },
  indicatorSmall: {
    width: 10,
    height: 10,
    top: 0,
    right: 0,
  },
  degreeBadge: {
    position: 'absolute',
    top: -4,
    left: -4,
    paddingHorizontal: spacing.s2,
    paddingVertical: spacing.s1,
    borderRadius: radius.sm,
    minWidth: 24,
    alignItems: 'center',
  },
  degreeText: {
    color: colors.warm.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
  },
});
