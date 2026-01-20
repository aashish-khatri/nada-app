import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, spacing, typography, radius, shadows } from '../../theme';

export const ChatListScreen: React.FC = () => {
  const mockChats = [
    {
      id: '1',
      name: 'Neha Patel',
      lastMessage: 'Hey! Thanks for connecting...',
      time: 'now',
      unread: 2,
    },
    {
      id: '2',
      name: 'Priya Sharma',
      lastMessage: 'Sure, lets talk tomorrow',
      time: '2h',
      unread: 0,
    },
    {
      id: '3',
      name: 'Anjali Desai',
      lastMessage: 'Nice to meet you!',
      time: '1d',
      unread: 0,
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {mockChats.map((chat) => (
          <TouchableOpacity key={chat.id} style={styles.chatItem}>
            <View style={styles.avatar}>
              <Text style={styles.avatarEmoji}>👤</Text>
            </View>

            <View style={styles.chatContent}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatName}>{chat.name}</Text>
                <Text style={styles.chatTime}>{chat.time}</Text>
              </View>
              <View style={styles.messageRow}>
                <Text style={styles.chatMessage} numberOfLines={1}>
                  {chat.lastMessage}
                </Text>
                {chat.unread > 0 && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadText}>{chat.unread}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
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
  content: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s4,
    gap: spacing.s4,
    backgroundColor: colors.warm.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.warm[200],
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    backgroundColor: colors.clay[200],
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEmoji: {
    fontSize: 28,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.s2,
  },
  chatName: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
  },
  chatTime: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[500],
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chatMessage: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
  },
  unreadBadge: {
    backgroundColor: colors.clay[600],
    borderRadius: radius.full,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.s2,
  },
  unreadText: {
    color: colors.warm.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
  },
});
