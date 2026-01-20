import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenWrapper, Header, Card, Row } from '../../components';
import { colors, spacing, typography, radius, shadows } from '../../theme';

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
    <ScreenWrapper edges={['top']}>
      <Header title="Activity" showBorder />

      {/* Tab Bar */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'received' && styles.tabActive]}
          onPress={() => setActiveTab('received')}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabText, activeTab === 'received' && styles.tabTextActive]}>
            Received (3)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'sent' && styles.tabActive]}
          onPress={() => setActiveTab('sent')}
          activeOpacity={0.8}
        >
          <Text style={[styles.tabText, activeTab === 'sent' && styles.tabTextActive]}>
            Sent (5)
          </Text>
        </TouchableOpacity>
      </View>

      {/* Activity List */}
      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {mockRequests.map((request) => (
          <Card key={request.id} style={styles.activityCard}>
            <Row gap={spacing.s4} align="flex-start">
              {/* Avatar */}
              <View style={styles.avatar}>
                <Text style={styles.avatarEmoji}>👤</Text>
              </View>

              {/* Content */}
              <View style={styles.activityContent}>
                <Row justify="space-between" align="flex-start" style={styles.activityHeader}>
                  <View style={styles.nameContainer}>
                    <Text style={styles.activityName}>{request.name}</Text>
                    <Text style={styles.activityDetails}>
                      {request.location} • {request.age} years
                    </Text>
                  </View>
                  <Text style={styles.activityTime}>{request.time}</Text>
                </Row>

                {/* Status Badge */}
                <View style={[
                  styles.statusBadge,
                  request.status === 'pending' ? styles.statusPending : styles.statusApproved,
                ]}>
                  <Text style={styles.statusText}>
                    {request.status === 'pending' ? '⏳ Pending' : '✓ Approved'}
                  </Text>
                </View>

                {/* Action Buttons */}
                {request.status === 'pending' && activeTab === 'received' && (
                  <Row gap={spacing.s3} style={styles.actionButtons}>
                    <TouchableOpacity style={styles.approveButton}>
                      <Text style={styles.approveButtonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rejectButton}>
                      <Text style={styles.rejectButtonText}>Decline</Text>
                    </TouchableOpacity>
                  </Row>
                )}
              </View>
            </Row>
          </Card>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: colors.warm[100],
    marginHorizontal: spacing.s5,
    marginTop: spacing.s5,
    marginBottom: spacing.s4,
    borderRadius: radius.lg,
    padding: spacing.s1,
    gap: spacing.s1,
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
  },
  contentContainer: {
    paddingHorizontal: spacing.s5,
    paddingBottom: spacing.s8,
  },
  activityCard: {
    marginBottom: spacing.s4,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.clay[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEmoji: {
    fontSize: 28,
  },
  activityContent: {
    flex: 1,
  },
  activityHeader: {
    marginBottom: spacing.s3,
  },
  nameContainer: {
    flex: 1,
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
    marginLeft: spacing.s2,
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
    marginTop: spacing.s1,
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
