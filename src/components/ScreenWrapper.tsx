import React from 'react';
import { View, StyleSheet, ViewStyle, StatusBar } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme';

interface ScreenWrapperProps {
  children: React.ReactNode;
  /** SafeArea edges to apply - defaults to ['top', 'bottom'] */
  edges?: Edge[];
  /** Use gradient background instead of solid color */
  gradient?: boolean;
  /** Custom gradient colors [start, end] */
  gradientColors?: [string, string];
  /** Background color when not using gradient */
  backgroundColor?: string;
  /** Additional container styles */
  style?: ViewStyle;
}

/**
 * ScreenWrapper - Foundation container for all screens
 * 
 * Provides:
 * - SafeAreaView handling
 * - Optional gradient or solid background
 * - Consistent flex layout
 * 
 * Layout Hierarchy:
 * ScreenWrapper (container)
 *   └── Header (optional, passed as child)
 *   └── Content area (ScrollView or View)
 */
export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  edges = ['top', 'bottom'],
  gradient = false,
  gradientColors = [colors.clay[50], colors.warm[50]],
  backgroundColor = colors.warm[50],
  style,
}) => {
  const content = (
    <SafeAreaView style={[styles.safeArea, style]} edges={edges}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );

  if (gradient) {
    return (
      <LinearGradient colors={gradientColors} style={styles.container}>
        {content}
      </LinearGradient>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});
