import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '../../components';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={[colors.clay[50], colors.warm[50]]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.content}>
          <Text style={styles.logo}>💍</Text>

          <Text style={styles.title}>नाडा Nada</Text>

          <Text style={styles.subtitle}>
            Find your perfect match through trusted connections. Real relationships, verified profiles, genuine bonds.
          </Text>

          <View style={styles.illustration}>
            <Text style={styles.illustrationEmoji}>🤝</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Get Started"
              onPress={() => navigation.navigate('PhoneVerify')}
            />

            <Button
              title="Already a member? Sign In"
              variant="tertiary"
              onPress={() => navigation.navigate('PhoneVerify')}
              style={{ marginTop: spacing.s4 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.s6,
  },
  logo: {
    fontSize: 64,
    marginBottom: spacing.s6,
  },
  title: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[900],
    marginBottom: spacing.s4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.warm[600],
    textAlign: 'center',
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.lg,
    marginBottom: spacing.s8,
    maxWidth: 400,
  },
  illustration: {
    width: 300,
    height: 200,
    backgroundColor: colors.clay[200],
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.s8,
  },
  illustrationEmoji: {
    fontSize: 80,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
});
