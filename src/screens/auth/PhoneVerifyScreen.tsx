import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenWrapper, Header, Button, Input } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../types';
import { validatePhoneNumber } from '../../utils/validation';

type PhoneVerifyScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PhoneVerify'>;
};

export const PhoneVerifyScreen: React.FC<PhoneVerifyScreenProps> = ({ navigation }) => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!validatePhoneNumber(phone)) {
      Alert.alert('Invalid Phone', 'Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('OTPVerify', { phone });
    }, 1000);
  };

  return (
    <ScreenWrapper>
      <Header 
        title="Phone Verification" 
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        {/* Icon & Text */}
        <View style={styles.header}>
          <Text style={styles.emoji}>📱</Text>
          <Text style={styles.title}>Enter Your Phone Number</Text>
          <Text style={styles.subtitle}>
            We'll send you a verification code to confirm your identity
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Input
            label="Phone Number"
            placeholder="98765 43210"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={setPhone}
          />

          <Button
            title="Send OTP"
            onPress={handleSendOTP}
            loading={loading}
          />
        </View>

        {/* Terms */}
        <Text style={styles.terms}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: spacing.s6,
    paddingTop: spacing.s8,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.s8,
  },
  emoji: {
    fontSize: 64,
    marginBottom: spacing.s5,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    marginBottom: spacing.s3,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.warm[500],
    textAlign: 'center',
    lineHeight: typography.fontSize.base * 1.5,
    maxWidth: 280,
  },
  form: {
    width: '100%',
  },
  terms: {
    marginTop: 'auto',
    marginBottom: spacing.s8,
    fontSize: typography.fontSize.xs,
    color: colors.warm[400],
    textAlign: 'center',
    lineHeight: typography.fontSize.xs * 1.5,
    paddingHorizontal: spacing.s4,
  },
});
