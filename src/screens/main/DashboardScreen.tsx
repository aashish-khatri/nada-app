import React from 'react';
import { View, Text, StyleSheet,  ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, Tag, Button } from '../../components';
import { colors, spacing, typography, radius, shadows } from '../../theme';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type DashboardScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;
};

export const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const mockMatches = [
    {
      id: '1',
      name: 'Priya Sharma',
      age: 27,
      location: 'Mumbai',
      occupation: 'Software Engineer',
      degree: 0,
      verified: true,
    },
    {
      id: '2',
      name: 'Anjali Desai',
      age: 26,
      location: 'Ahmedabad',
      occupation: 'Doctor',
      degree: 1,
      verified: true,
    },
    {
      id: '3',
      name: 'Neha Patel',
      age: 28,
      location: 'Pune',
      occupation: 'Designer',
      degree: 2,
      verified: false,
    },
  ];

  const getDegreeColor = (degree: number) => {
    const colors_map: any = {
      0: colors.degree[0],
      1: colors.degree[1],
      2: colors.degree[2],
      3: colors.degree[3],
    };
    return colors_map[degree] || colors.degree[3];
  };

  const getDegreeLabel = (degree: number) => {
    const labels: any = {
      0: 'Direct Contact',
      1: '1 Connection',
      2: '2 Connections',
      3: '3 Connections',
    };
    return labels[degree] || '3+ Connections';
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconButtonText}>🔔</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>23</Text>
            <Text style={styles.statLabel}>Network</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNumber, { color: colors.gold[500] }]}>5</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNumber, { color: colors.sage[500] }]}>2</Text>
            <Text style={styles.statLabel}>Messages</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={[styles.statNumber, { color: colors.indigo[500] }]}>567</Text>
            <Text style={styles.statLabel}>Points</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recommended Matches</Text>

        {/* Profile Cards */}
        {mockMatches.map((match) => (
          <Card key={match.id} style={styles.profileCard}>
            <View style={styles.profileImagePlaceholder}>
              <Text style={styles.profileEmoji}>👤</Text>
              <View
                style={[
                  styles.degreeBadge,
                  { backgroundColor: getDegreeColor(match.degree) },
                ]}
              >
                <Text style={styles.degreeBadgeText}>
                  {getDegreeLabel(match.degree)}
                </Text>
              </View>
            </View>

            <View style={styles.profileContent}>
              <Text style={styles.profileName}>
                {match.name}, {match.age}
              </Text>
              <View style={styles.profileDetails}>
                <Text style={styles.profileDetailText}>{match.location}</Text>
                <Text style={styles.profileDetailText}> • </Text>
                <Text style={styles.profileDetailText}>{match.occupation}</Text>
              </View>

              <View style={styles.tagContainer}>
                <Tag label="Family-Oriented" variant="sage" />
                {match.verified && <Tag label="✓ Verified" variant="gold" />}
              </View>

              <View style={styles.buttonGroup}>
                <Button
                  title="Send Interest"
                  size="small"
                  onPress={() => {}}
                  style={{ flex: 1, marginRight: spacing.s2 }}
                />
                <Button
                  title="View Profile"
                  variant="secondary"
                  size="small"
                  onPress={() => {}}
                  style={{ flex: 1 }}
                />
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.warm[50],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s4,
    backgroundColor: colors.warm.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.warm[200],
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
  },
  headerActions: {
    flexDirection: 'row',
    gap: spacing.s3,
  },
  iconButton: {
    padding: spacing.s2,
    position: 'relative',
  },
  iconButtonText: {
    fontSize: typography.fontSize['2xl'],
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: colors.clay[600],
    borderRadius: radius.full,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.warm.white,
    fontSize: 10,
    fontWeight: typography.fontWeight.semibold,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s5,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: spacing.s3,
    marginBottom: spacing.s7,
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.warm.white,
    borderRadius: radius.xl,
    padding: spacing.s4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.warm[200],
    ...shadows.sm,
  },
  statNumber: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.clay[600],
    marginBottom: spacing.s1,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[600],
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s4,
  },
  profileCard: {
    padding: 0,
    marginBottom: spacing.s6,
    overflow: 'hidden',
  },
  profileImagePlaceholder: {
    width: '100%',
    aspectRatio: 3 / 4,
    backgroundColor: colors.clay[200],
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  profileEmoji: {
    fontSize: 80,
    opacity: 0.5,
  },
  degreeBadge: {
    position: 'absolute',
    top: spacing.s4,
    right: spacing.s4,
    paddingVertical: spacing.s2,
    paddingHorizontal: spacing.s4,
    borderRadius: radius.full,
    ...shadows.md,
  },
  degreeBadgeText: {
    color: colors.warm.white,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
  },
  profileContent: {
    padding: spacing.s5,
  },
  profileName: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    marginBottom: spacing.s2,
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.s4,
  },
  profileDetailText: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.s2,
    marginBottom: spacing.s4,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: spacing.s2,
  },
});
