import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ScreenWrapper, Header, Button, Row } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';

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

  const handleKeyPress = (key: string, index: number) => {
    // Handle backspace - move to previous input
    if (key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
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
    <ScreenWrapper>
      <Header 
        title="Verify OTP" 
        onBack={() => navigation.goBack()}
      />

      <View style={styles.content}>
        {/* Icon & Text */}
        <View style={styles.header}>
          <Text style={styles.emoji}>🔐</Text>
          <Text style={styles.title}>Enter Verification Code</Text>
          <Text style={styles.subtitle}>
            Sent to <Text style={styles.phoneHighlight}>+91 {phone}</Text>
          </Text>
        </View>

        {/* OTP Input Grid */}
        <Row gap={spacing.s2} justify="center" style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => { inputRefs.current[index] = ref; }}
              style={[
                styles.otpInput,
                digit && styles.otpInputFilled,
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleOTPChange(value, index)}
              onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
              selectTextOnFocus
            />
          ))}
        </Row>

        {/* Resend Link */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't receive code? </Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Resend in 30s</Text>
          </TouchableOpacity>
        </View>

        {/* Verify Button */}
        <Button
          title="Verify"
          onPress={handleVerify}
          loading={loading}
        />
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
  },
  phoneHighlight: {
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[700],
  },
  otpContainer: {
    marginBottom: spacing.s6,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.md,
    textAlign: 'center',
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    backgroundColor: colors.warm.white,
  },
  otpInputFilled: {
    borderColor: colors.clay[400],
    backgroundColor: colors.clay[50],
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.s6,
  },
  resendText: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
  },
  resendLink: {
    fontSize: typography.fontSize.sm,
    color: colors.clay[600],
    fontWeight: typography.fontWeight.semibold,
  },
});
