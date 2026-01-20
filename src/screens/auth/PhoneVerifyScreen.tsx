import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../types';
import { validatePhoneNumber } from '../../utils/validation';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>📱</Text>
          <Text style={styles.title}>Enter Your Phone Number</Text>
          <Text style={styles.subtitle}>We'll send you a verification code</Text>
        </View>

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
  form: {
    width: '100%',
  },
});
