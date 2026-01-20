import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ScreenWrapper, Header, Button, Card, Tag, Row } from '../../components';
import { colors, spacing, typography, radius, shadows } from '../../theme';

export const ProfileScreen: React.FC = () => {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <ScreenWrapper edges={['top']}>
      <Header 
        title="Profile" 
        rightAction={
          <TouchableOpacity style={styles.settingsButton}>
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        }
        showBorder 
      />

      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileImage}>
            <Text style={styles.profileEmoji}>👤</Text>
          </View>
          <Text style={styles.profileName}>Your Name</Text>
          <Text style={styles.profileDetails}>27 years • Mumbai</Text>

          <Row gap={spacing.s2} justify="center" style={styles.tagContainer}>
            <Tag label="✓ Verified" variant="gold" />
            <Tag label="Software Engineer" />
          </Row>

          {/* Completion Card */}
          <View style={styles.completionCard}>
            <Row justify="space-between" align="center" style={styles.completionHeader}>
              <Text style={styles.completionLabel}>Profile Completion</Text>
              <Text style={styles.completionPercent}>85%</Text>
            </Row>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '85%' }]} />
            </View>
            <Text style={styles.completionHint}>Add 2 more photos to complete</Text>
          </View>
        </View>

        {/* Menu Items */}
        <Card style={styles.menuCard}>
          {[
            { icon: '✏️', label: 'Edit Profile' },
            { icon: '🔒', label: 'Privacy Settings' },
            { icon: '🔔', label: 'Notifications' },
            { icon: '❓', label: 'Help & Support' },
          ].map((item, index, arr) => (
            <React.Fragment key={item.label}>
              <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuText}>{item.label}</Text>
                <Text style={styles.menuArrow}>›</Text>
              </TouchableOpacity>
              {index < arr.length - 1 && <View style={styles.menuDivider} />}
            </React.Fragment>
          ))}
        </Card>

        {/* Stats Card */}
        <Card style={styles.statsCard}>
          <Text style={styles.statsTitle}>Your Statistics</Text>
          <Row justify="space-around">
            {[
              { value: '23', label: 'Network' },
              { value: '12', label: 'Views' },
              { value: '567', label: 'Trust Points' },
            ].map((stat) => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </Row>
        </Card>

        {/* Logout Button */}
        <Button
          title="Logout"
          variant="danger"
          onPress={handleLogout}
          style={styles.logoutButton}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: spacing.s5,
    paddingTop: spacing.s6,
    paddingBottom: spacing.s10,
  },
  settingsButton: {
    padding: spacing.s1,
  },
  settingsIcon: {
    fontSize: typography.fontSize.xl,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: spacing.s6,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.clay[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.s4,
    ...shadows.sm,
  },
  profileEmoji: {
    fontSize: 48,
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
    marginBottom: spacing.s5,
  },
  completionCard: {
    width: '100%',
    backgroundColor: colors.clay[50],
    borderRadius: radius.xl,
    padding: spacing.s5,
    borderWidth: 1,
    borderColor: colors.clay[200],
  },
  completionHeader: {
    marginBottom: spacing.s3,
  },
  completionLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
  },
  completionPercent: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.clay[600],
  },
  progressBar: {
    height: 8,
    backgroundColor: colors.warm[200],
    borderRadius: radius.full,
    overflow: 'hidden',
    marginBottom: spacing.s3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.clay[500],
    borderRadius: radius.full,
  },
  completionHint: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[500],
    textAlign: 'center',
  },
  menuCard: {
    marginBottom: spacing.s4,
    padding: spacing.s2,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.s4,
    paddingHorizontal: spacing.s3,
  },
  menuIcon: {
    fontSize: typography.fontSize.xl,
    marginRight: spacing.s4,
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
    backgroundColor: colors.warm[100],
    marginHorizontal: spacing.s3,
  },
  statsCard: {
    marginBottom: spacing.s4,
  },
  statsTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s5,
    textAlign: 'center',
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
  },
  logoutButton: {
    marginTop: spacing.s2,
  },
});
