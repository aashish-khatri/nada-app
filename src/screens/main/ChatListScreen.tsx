import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenWrapper, Header, Row } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';

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
    <ScreenWrapper edges={['top']}>
      <Header title="Messages" showBorder />

      <ScrollView 
        style={styles.content} 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {mockChats.map((chat) => (
          <TouchableOpacity 
            key={chat.id} 
            style={styles.chatItem}
            activeOpacity={0.7}
          >
            <Row gap={spacing.s4} align="center">
              {/* Avatar */}
              <View style={styles.avatar}>
                <Text style={styles.avatarEmoji}>👤</Text>
              </View>

              {/* Chat Content */}
              <View style={styles.chatContent}>
                <Row justify="space-between" align="center" style={styles.chatHeader}>
                  <Text style={styles.chatName} numberOfLines={1}>{chat.name}</Text>
                  <Text style={[styles.chatTime, chat.unread > 0 && styles.chatTimeUnread]}>
                    {chat.time}
                  </Text>
                </Row>
                <Row justify="space-between" align="center">
                  <Text style={styles.chatMessage} numberOfLines={1}>
                    {chat.lastMessage}
                  </Text>
                  {chat.unread > 0 && (
                    <View style={styles.unreadBadge}>
                      <Text style={styles.unreadText}>{chat.unread}</Text>
                    </View>
                  )}
                </Row>
              </View>
            </Row>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: spacing.s2,
  },
  chatItem: {
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s4,
    backgroundColor: colors.warm.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.warm[100],
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: radius.lg,
    backgroundColor: colors.clay[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarEmoji: {
    fontSize: 24,
  },
  chatContent: {
    flex: 1,
  },
  chatHeader: {
    marginBottom: spacing.s1,
  },
  chatName: {
    flex: 1,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginRight: spacing.s2,
  },
  chatTime: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[400],
  },
  chatTimeUnread: {
    color: colors.clay[600],
    fontWeight: typography.fontWeight.semibold,
  },
  chatMessage: {
    flex: 1,
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
    marginRight: spacing.s2,
  },
  unreadBadge: {
    backgroundColor: colors.clay[600],
    borderRadius: radius.full,
    minWidth: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.s2,
  },
  unreadText: {
    color: colors.warm.white,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
  },
});
