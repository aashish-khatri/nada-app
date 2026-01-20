import React from 'react';
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, spacing, typography, radius, shadows } from '../../theme';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type RoleSelectScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'RoleSelect'>;
};

export const RoleSelectScreen: React.FC<RoleSelectScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Choose Your Role</Text>
          <Text style={styles.subtitle}>How would you like to use Nada?</Text>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ProfileStep1')}
          activeOpacity={0.7}
        >
          <Text style={styles.cardIcon}>👥</Text>
          <Text style={styles.cardTitle}>Looking for Partner</Text>
          <Text style={styles.cardDescription}>
            Find your life partner through your trusted network
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          activeOpacity={0.7}
        >
          <Text style={styles.cardIcon}>🤝</Text>
          <Text style={styles.cardTitle}>Broker</Text>
          <Text style={styles.cardDescription}>
            Help others connect and earn rewards
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.warm[50],
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.s6,
    paddingTop: spacing.s8,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.s8,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s4,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.warm[500],
  },
  card: {
    backgroundColor: colors.warm.white,
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.xl,
    padding: spacing.s7,
    alignItems: 'center',
    marginBottom: spacing.s5,
    ...shadows.md,
  },
  cardIcon: {
    fontSize: 48,
    marginBottom: spacing.s4,
  },
  cardTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s2,
  },
  cardDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
    textAlign: 'center',
  },
});
