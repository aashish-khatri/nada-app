import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../theme';

interface RowProps {
  children: React.ReactNode;
  /** Gap between items - defaults to s3 (12px) */
  gap?: number;
  /** Alignment of items - defaults to center */
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  /** Justify content - defaults to flex-start */
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
  /** Allow items to wrap */
  wrap?: boolean;
  /** Additional container styles */
  style?: ViewStyle;
}

/**
 * Row - Horizontal layout container
 * 
 * Use cases:
 * - Inline form inputs (DD / MM / YYYY)
 * - Button groups
 * - Tag containers
 * - Stats grids
 * 
 * Children with flex: 1 will share space equally
 */
export const Row: React.FC<RowProps> = ({
  children,
  gap = spacing.s3,
  align = 'center',
  justify = 'flex-start',
  wrap = false,
  style,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          gap,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap ? 'wrap' : 'nowrap',
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
