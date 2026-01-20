import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenWrapper, Header } from '../../components';
import { colors, spacing, typography, radius, shadows } from '../../theme';
import { RootStackParamList } from '../../types';

type RoleSelectScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RoleSelect'>;
};

export const RoleSelectScreen: React.FC<RoleSelectScreenProps> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <Header 
        title="Choose Role" 
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        {/* Section Header */}
        <View style={styles.header}>
          <Text style={styles.title}>How would you like to use Nada?</Text>
          <Text style={styles.subtitle}>You can change this later in settings</Text>
        </View>

        {/* Role Cards */}
        <View style={styles.cardsContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ProfileStep1')}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <Text style={styles.cardEmoji}>💕</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Looking for Partner</Text>
              <Text style={styles.cardDescription}>
                Find your life partner through your trusted network of family and friends
              </Text>
            </View>
            <Text style={styles.cardArrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, styles.cardSecondary]}
            activeOpacity={0.8}
          >
            <View style={styles.cardIcon}>
              <Text style={styles.cardEmoji}>🤝</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Broker / Matchmaker</Text>
              <Text style={styles.cardDescription}>
                Help others find their perfect match and earn rewards for successful connections
              </Text>
            </View>
            <Text style={styles.cardArrow}>→</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: spacing.s6,
    paddingTop: spacing.s8,
  },
  header: {
    marginBottom: spacing.s8,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    marginBottom: spacing.s3,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.warm[500],
  },
  cardsContainer: {
    gap: spacing.s5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.warm.white,
    borderWidth: 2,
    borderColor: colors.clay[300],
    borderRadius: radius.xl,
    padding: spacing.s5,
    ...shadows.sm,
  },
  cardSecondary: {
    borderColor: colors.warm[300],
  },
  cardIcon: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.clay[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.s4,
  },
  cardEmoji: {
    fontSize: 28,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s2,
  },
  cardDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
    lineHeight: typography.fontSize.sm * 1.5,
  },
  cardArrow: {
    fontSize: typography.fontSize['2xl'],
    color: colors.warm[400],
    marginLeft: spacing.s3,
  },
});
