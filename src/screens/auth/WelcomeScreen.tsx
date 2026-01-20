import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenWrapper, Button } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <ScreenWrapper gradient gradientColors={[colors.clay[50], colors.warm[50]]}>
      <View style={styles.content}>
        {/* Logo Section */}
        <View style={styles.logoSection}>
          <Text style={styles.logo}>💍</Text>
          <Text style={styles.title}>नाडा Nada</Text>
          <Text style={styles.subtitle}>
            Find your perfect match through trusted connections. Real relationships, verified profiles, genuine bonds.
          </Text>
        </View>

        {/* Illustration */}
        <View style={styles.illustration}>
          <Text style={styles.illustrationEmoji}>🤝</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonSection}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('PhoneVerify')}
          />
          <Button
            title="Already a member? Sign In"
            variant="tertiary"
            onPress={() => navigation.navigate('PhoneVerify')}
            style={styles.secondaryButton}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.s6,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: spacing.s8,
  },
  logo: {
    fontSize: 72,
    marginBottom: spacing.s5,
  },
  title: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[900],
    marginBottom: spacing.s4,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.warm[600],
    textAlign: 'center',
    lineHeight: typography.fontSize.lg * 1.6,
    maxWidth: 320,
    paddingHorizontal: spacing.s4,
  },
  illustration: {
    width: 280,
    height: 180,
    backgroundColor: colors.clay[100],
    borderRadius: radius['2xl'],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.s8,
    borderWidth: 1,
    borderColor: colors.clay[200],
  },
  illustrationEmoji: {
    fontSize: 72,
  },
  buttonSection: {
    width: '100%',
    maxWidth: 320,
  },
  secondaryButton: {
    marginTop: spacing.s4,
  },
});
