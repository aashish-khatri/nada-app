import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Button, Card, Tag } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ProfileScreen: React.FC = () => {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Text style={styles.editIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImage}>
            <Text style={styles.profileEmoji}>👤</Text>
          </View>
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileDetails}>27 years • Mumbai</Text>

          <View style={styles.tagContainer}>
            <Tag label="✓ Verified" variant="gold" />
            <Tag label="Software Engineer" />
          </View>

          <View style={styles.completionCard}>
            <Text style={styles.completionLabel}>Profile Completion</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '85%' }]} />
            </View>
            <Text style={styles.completionText}>85% Complete</Text>
          </View>
        </View>

        {/* Menu Items */}
        <Card style={styles.menuCard}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>✏️</Text>
            <Text style={styles.menuText}>Edit Profile</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>🔒</Text>
            <Text style={styles.menuText}>Privacy Settings</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>🔔</Text>
            <Text style={styles.menuText}>Notifications</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <View style={styles.menuDivider} />

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❓</Text>
            <Text style={styles.menuText}>Help & Support</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.statsCard}>
          <Text style={styles.statsTitle}>Your Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>23</Text>
              <Text style={styles.statLabel}>Network Size</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>12</Text>
              <Text style={styles.statLabel}>Profile Views</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>567</Text>
              <Text style={styles.statLabel}>Trust Points</Text>
            </View>
          </View>
        </Card>

        <Button
          title="Logout"
          variant="danger"
          onPress={handleLogout}
          style={{ marginTop: spacing.s4, marginBottom: spacing.s8 }}
        />
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
    justifyContent: 'space-between',
    alignItems: 'center',
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
  editIcon: {
    fontSize: typography.fontSize['2xl'],
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s6,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: spacing.s6,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.clay[200],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.s4,
  },
  profileEmoji: {
    fontSize: 64,
  },
  profileName: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    marginBottom: spacing.s2,
  },
  profileDetails: {
    fontSize: typography.fontSize.base,
    color: colors.warm[600],
    marginBottom: spacing.s4,
  },
  tagContainer: {
    flexDirection: 'row',
    gap: spacing.s2,
    marginBottom: spacing.s6,
  },
  completionCard: {
    width: '100%',
    backgroundColor: colors.clay[50],
    borderRadius: radius.lg,
    padding: spacing.s4,
    borderWidth: 1,
    borderColor: colors.clay[200],
  },
  completionLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s2,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.warm[200],
    borderRadius: radius.full,
    overflow: 'hidden',
    marginBottom: spacing.s2,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.clay[500],
  },
  completionText: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[600],
    textAlign: 'center',
  },
  menuCard: {
    marginBottom: spacing.s4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s4,
  },
  menuIcon: {
    fontSize: typography.fontSize.xl,
    marginRight: spacing.s3,
  },
  menuText: {
    flex: 1,
    fontSize: typography.fontSize.base,
    color: colors.warm[800],
  },
  menuArrow: {
    fontSize: typography.fontSize['2xl'],
    color: colors.warm[400],
  },
  menuDivider: {
    height: 1,
    backgroundColor: colors.warm[200],
  },
  statsCard: {
    marginBottom: spacing.s4,
  },
  statsTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s4,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.clay[600],
    marginBottom: spacing.s1,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[600],
    textAlign: 'center',
  },
});
