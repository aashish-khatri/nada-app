import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet,  TextInput, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Button } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type OTPVerifyScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OTPVerify'>;
  route: RouteProp<RootStackParamList, 'OTPVerify'>;
};

export const OTPVerifyScreen: React.FC<OTPVerifyScreenProps> = ({ navigation, route }) => {
  const { phone } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOTPChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');

    if (otpCode.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter the complete 6-digit code');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('RoleSelect');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>🔐</Text>
          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>Sent to +91 {phone}</Text>
        </View>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={styles.otpInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOTPChange(value, index)}
            />
          ))}
        </View>

        <Text style={styles.resendText}>
          Didn't receive code?{' '}
          <Text style={styles.resendLink}>Resend in 30s</Text>
        </Text>

        <Button
          title="Verify"
          onPress={handleVerify}
          loading={loading}
        />
      </View>
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
    paddingHorizontal: spacing.s6,
    paddingTop: spacing.s8,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.s8,
  },
  emoji: {
    fontSize: 64,
    marginBottom: spacing.s4,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s4,
  },
  subtitle: {
    fontSize: typography.fontSize.base,
    color: colors.warm[500],
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.s3,
    marginBottom: spacing.s6,
  },
  otpInput: {
    width: 50,
    height: 56,
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.md,
    textAlign: 'center',
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    backgroundColor: colors.warm.white,
  },
  resendText: {
    textAlign: 'center',
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
    marginBottom: spacing.s6,
  },
  resendLink: {
    color: colors.clay[600],
    fontWeight: typography.fontWeight.semibold,
  },
});
