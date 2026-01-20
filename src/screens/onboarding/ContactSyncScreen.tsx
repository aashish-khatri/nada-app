import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Animated, Easing } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as Contacts from 'expo-contacts';
import { ScreenWrapper, Header, Button } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';

type ContactSyncScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ContactSync'>;
};

export const ContactSyncScreen: React.FC<ContactSyncScreenProps> = ({ navigation }) => {
  const [status, setStatus] = useState<'initial' | 'requesting' | 'syncing' | 'complete' | 'denied'>('initial');
  const [syncProgress, setSyncProgress] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  
  // Animation for the sync icon
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    if (status === 'syncing') {
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    }
  }, [status]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const requestPermission = async () => {
    setStatus('requesting');
    
    try {
      const { status: permStatus } = await Contacts.requestPermissionsAsync();
      
      if (permStatus === 'granted') {
        await syncContacts();
      } else {
        setStatus('denied');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to request contacts permission');
      setStatus('initial');
    }
  };

  const syncContacts = async () => {
    setStatus('syncing');
    
    try {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
      });

      // Simulate sync progress
      const totalContacts = data.length;
      setContactCount(totalContacts);

      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, 100));
        setSyncProgress(i);
      }

      // In production, send contacts to backend here
      // await syncContactsToBackend(data);

      setStatus('complete');
    } catch (error) {
      Alert.alert('Error', 'Failed to sync contacts');
      setStatus('initial');
    }
  };

  const handleContinue = () => {
    navigation.navigate('MainTabs');
  };

  const handleSkip = () => {
    Alert.alert(
      'Skip Contact Sync?',
      'Your network will be limited without contacts. You can sync later in settings.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Skip', onPress: () => navigation.navigate('MainTabs') },
      ]
    );
  };

  const renderContent = () => {
    switch (status) {
      case 'initial':
        return (
          <>
            <Text style={styles.icon}>📱</Text>
            <Text style={styles.title}>Build Your Network</Text>
            <Text style={styles.description}>
              Nada uses your contacts to find people you know and build your trusted network. 
              We'll never contact anyone without your permission.
            </Text>
            
            <View style={styles.benefits}>
              <View style={styles.benefitItem}>
                <Text style={styles.benefitIcon}>🔒</Text>
                <Text style={styles.benefitText}>Your contacts stay private</Text>
              </View>
              <View style={styles.benefitItem}>
                <Text style={styles.benefitIcon}>🤝</Text>
                <Text style={styles.benefitText}>Connect with trusted people</Text>
              </View>
              <View style={styles.benefitItem}>
                <Text style={styles.benefitIcon}>💍</Text>
                <Text style={styles.benefitText}>Better matches through connections</Text>
              </View>
            </View>

            <View style={styles.buttonGroup}>
              <Button
                title="Allow Access"
                onPress={requestPermission}
              />
              <Button
                title="Skip for Now"
                variant="tertiary"
                onPress={handleSkip}
                style={styles.skipButton}
              />
            </View>
          </>
        );

      case 'requesting':
        return (
          <>
            <Text style={styles.icon}>🔐</Text>
            <Text style={styles.title}>Requesting Permission</Text>
            <Text style={styles.description}>
              Please allow access in the system dialog...
            </Text>
          </>
        );

      case 'syncing':
        return (
          <>
            <Animated.Text style={[styles.icon, { transform: [{ rotate: spin }] }]}>
              ⚙️
            </Animated.Text>
            <Text style={styles.title}>Syncing Contacts</Text>
            <Text style={styles.description}>
              Found {contactCount} contacts. Building your network...
            </Text>
            
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${syncProgress}%` }]} />
              </View>
              <Text style={styles.progressText}>{syncProgress}%</Text>
            </View>
          </>
        );

      case 'complete':
        return (
          <>
            <Text style={styles.icon}>✅</Text>
            <Text style={styles.title}>Network Ready!</Text>
            <Text style={styles.description}>
              We found {contactCount} contacts. Your network is set up and ready to discover matches.
            </Text>
            
            <Button
              title="Start Exploring"
              onPress={handleContinue}
              style={styles.continueButton}
            />
          </>
        );

      case 'denied':
        return (
          <>
            <Text style={styles.icon}>😔</Text>
            <Text style={styles.title}>Permission Denied</Text>
            <Text style={styles.description}>
              Without contacts, your network will be limited. You can enable this later in your phone's settings.
            </Text>
            
            <View style={styles.buttonGroup}>
              <Button
                title="Try Again"
                onPress={requestPermission}
              />
              <Button
                title="Continue Without Contacts"
                variant="secondary"
                onPress={handleContinue}
                style={styles.skipButton}
              />
            </View>
          </>
        );
    }
  };

  return (
    <ScreenWrapper gradient gradientColors={[colors.clay[50], colors.warm[50]]}>
      <Header 
        title="Contact Sync" 
        onBack={() => navigation.goBack()}
        showBorder={false}
      />
      
      <View style={styles.content}>
        {renderContent()}
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.s6,
  },
  icon: {
    fontSize: 72,
    marginBottom: spacing.s6,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    textAlign: 'center',
    marginBottom: spacing.s4,
  },
  description: {
    fontSize: typography.fontSize.base,
    color: colors.warm[600],
    textAlign: 'center',
    lineHeight: typography.fontSize.base * 1.6,
    maxWidth: 320,
    marginBottom: spacing.s6,
  },
  benefits: {
    width: '100%',
    maxWidth: 300,
    marginBottom: spacing.s8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.s4,
  },
  benefitIcon: {
    fontSize: 24,
    marginRight: spacing.s4,
  },
  benefitText: {
    fontSize: typography.fontSize.base,
    color: colors.warm[700],
  },
  buttonGroup: {
    width: '100%',
    maxWidth: 320,
  },
  skipButton: {
    marginTop: spacing.s4,
  },
  progressContainer: {
    width: '100%',
    maxWidth: 280,
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
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
  progressText: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
    fontWeight: typography.fontWeight.semibold,
  },
  continueButton: {
    minWidth: 200,
  },
});