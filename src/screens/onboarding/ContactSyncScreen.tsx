import React from 'react';
import { View, Text, StyleSheet,  ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Card } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type ContactSyncScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ContactSync'>;
};

export const ContactSyncScreen: React.FC<ContactSyncScreenProps> = ({ navigation }) => {
  const handleAllowAccess = () => {
    // TODO: Request contacts permission
    navigation.navigate('MainTabs');
  };

  const handleSkip = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <SafeAreaView style={styles.container}  edges={['top', 'bottom']}>
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>📱</Text>
        </View>

        <Text style={styles.title}>Build Your Trusted Network</Text>

        <Text style={styles.subtitle}>
          Nada finds matches through your trusted contacts. Your network becomes your strength.
        </Text>

        <Card style={styles.featureCard}>
          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✓</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Completely Secure</Text>
              <Text style={styles.featureText}>
                Your contacts are encrypted and safe
              </Text>
            </View>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✓</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>We Only See Registered Users</Text>
              <Text style={styles.featureText}>
                Your full contact list stays private
              </Text>
            </View>
          </View>

          <View style={styles.feature}>
            <Text style={styles.featureIcon}>✓</Text>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>No Spam</Text>
              <Text style={styles.featureText}>
                Your contacts won't be notified
              </Text>
            </View>
          </View>
        </Card>

        <Button
          title="Allow Contact Access"
          onPress={handleAllowAccess}
          style={{ marginBottom: spacing.s4 }}
        />

        <Button
          title="Skip for Now"
          variant="tertiary"
          onPress={handleSkip}
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
  content: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.s6,
    paddingVertical: spacing.s7,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: spacing.s6,
  },
  icon: {
    fontSize: 80,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    textAlign: 'center',
    marginBottom: spacing.s4,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.warm[600],
    textAlign: 'center',
    lineHeight: typography.lineHeight.relaxed * typography.fontSize.base,
    marginBottom: spacing.s8,
    maxWidth: 400,
    alignSelf: 'center',
  },
  featureCard: {
    marginBottom: spacing.s8,
    maxWidth: 400,
    alignSelf: 'stretch',
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.s3,
  },
  featureIcon: {
    fontSize: typography.fontSize['2xl'],
    color: colors.sage[500],
    marginRight: spacing.s3,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s1,
  },
  featureText: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
  },
});