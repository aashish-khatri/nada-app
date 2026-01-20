import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from '../../components';
import { colors, spacing, typography, radius, shadows } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const ActivityScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sent' | 'received'>('received');

  const mockRequests = [
    {
      id: '1',
      name: 'Kavya Reddy',
      age: 25,
      location: 'Bangalore',
      status: 'pending',
      time: '2h ago',
    },
    {
      id: '2',
      name: 'Meera Shah',
      age: 27,
      location: 'Delhi',
      status: 'approved',
      time: '5h ago',
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Activity</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'received' && styles.tabActive]}
          onPress={() => setActiveTab('received')}
        >
          <Text style={[styles.tabText, activeTab === 'received' && styles.tabTextActive]}>
            Received (3)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'sent' && styles.tabActive]}
          onPress={() => setActiveTab('sent')}
        >
          <Text style={[styles.tabText, activeTab === 'sent' && styles.tabTextActive]}>
            Sent (5)
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {mockRequests.map((request) => (
          <Card key={request.id} style={styles.activityCard}>
            <View style={styles.activityItem}>
              <View style={styles.avatar}>
                <Text style={styles.avatarEmoji}>👤</Text>
              </View>

              <View style={styles.activityContent}>
                <View style={styles.activityHeader}>
                  <View>
                    <Text style={styles.activityName}>{request.name}</Text>
                    <Text style={styles.activityDetails}>
                      {request.location} • {request.age} years
                    </Text>
                  </View>
                  <Text style={styles.activityTime}>{request.time}</Text>
                </View>

                <View
                  style={[
                    styles.statusBadge,
                    request.status === 'pending'
                      ? styles.statusPending
                      : styles.statusApproved,
                  ]}
                >
                  <Text style={styles.statusText}>
                    {request.status === 'pending' ? '⏳ Pending' : '✓ Approved'}
                  </Text>
                </View>

                {request.status === 'pending' && activeTab === 'received' && (
                  <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.approveButton}>
                      <Text style={styles.approveButtonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rejectButton}>
                      <Text style={styles.rejectButtonText}>Decline</Text>
                    </TouchableOpacity>
                  </View>
                )}
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.warm[100],
    margin: spacing.s5,
    borderRadius: radius.lg,
    padding: spacing.s2,
    gap: spacing.s2,
  },
  tab: {
    flex: 1,
    paddingVertical: spacing.s3,
    alignItems: 'center',
    borderRadius: radius.md,
  },
  tabActive: {
    backgroundColor: colors.clay[500],
    ...shadows.sm,
  },
  tabText: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[600],
  },
  tabTextActive: {
    color: colors.warm.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.s5,
  },
  activityCard: {
    marginBottom: spacing.s4,
  },
  activityItem: {
    flexDirection: 'row',
    gap: spacing.s4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: radius.lg,
    backgroundColor: colors.clay[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEmoji: {
    fontSize: 32,
  },
  activityContent: {
    flex: 1,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.s2,
  },
  activityName: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s1,
  },
  activityDetails: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
  },
  activityTime: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[500],
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingVertical: spacing.s1,
    paddingHorizontal: spacing.s3,
    borderRadius: radius.sm,
    marginBottom: spacing.s3,
  },
  statusPending: {
    backgroundColor: colors.gold[100],
  },
  statusApproved: {
    backgroundColor: colors.sage[100],
  },
  statusText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
  },
  actionButtons: {
    flexDirection: 'row',
    gap: spacing.s2,
  },
  approveButton: {
    flex: 1,
    backgroundColor: colors.sage[500],
    paddingVertical: spacing.s3,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  approveButtonText: {
    color: colors.warm.white,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
  rejectButton: {
    flex: 1,
    backgroundColor: colors.warm[200],
    paddingVertical: spacing.s3,
    borderRadius: radius.md,
    alignItems: 'center',
  },
  rejectButtonText: {
    color: colors.warm[700],
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
  },
});
