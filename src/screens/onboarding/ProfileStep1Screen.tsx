import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input, ProgressBar } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';

type ProfileStep1ScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileStep1'>;
};

export const ProfileStep1Screen: React.FC<ProfileStep1ScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState<'male' | 'female' | 'other' | null>(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  const handleContinue = () => {
    navigation.navigate('ProfileStep2');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Profile</Text>
      </View>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <ProgressBar progress={25} label="Step 1 of 4 - Basic Information" />

        <Input
          label="First Name"
          placeholder="Enter first name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <Input
          label="Last Name"
          placeholder="Enter last name"
          value={lastName}
          onChangeText={setLastName}
        />

        <View style={styles.formGroup}>
          <Text style={styles.label}>Gender</Text>
          <View style={styles.radioGroup}>
            {(['male', 'female', 'other'] as const).map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.radioOption,
                  gender === option && styles.radioOptionSelected,
                ]}
                onPress={() => setGender(option)}
              >
                <Text
                  style={[
                    styles.radioText,
                    gender === option && styles.radioTextSelected,
                  ]}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Date of Birth</Text>
          <View style={styles.inputRow}>
            <Input
              placeholder="DD"
              keyboardType="number-pad"
              maxLength={2}
              value={day}
              onChangeText={setDay}
              style={{ flex: 1 }}
            />
            <Input
              placeholder="MM"
              keyboardType="number-pad"
              maxLength={2}
              value={month}
              onChangeText={setMonth}
              style={{ flex: 1, marginLeft: spacing.s3 }}
            />
            <Input
              placeholder="YYYY"
              keyboardType="number-pad"
              maxLength={4}
              value={year}
              onChangeText={setYear}
              style={{ flex: 1, marginLeft: spacing.s3 }}
            />
          </View>
          {year && parseInt(year) > 1900 && (
            <Text style={styles.helperText}>
              Age: {new Date().getFullYear() - parseInt(year)} (auto-calculated)
            </Text>
          )}
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Height</Text>
          <View style={styles.inputRow}>
            <Input
              placeholder="5"
              keyboardType="number-pad"
              maxLength={1}
              value={feet}
              onChangeText={setFeet}
              style={{ flex: 1 }}
            />
            <Text style={styles.unitText}>ft</Text>
            <Input
              placeholder="8"
              keyboardType="number-pad"
              maxLength={2}
              value={inches}
              onChangeText={setInches}
              style={{ flex: 1, marginLeft: spacing.s3 }}
            />
            <Text style={styles.unitText}>in</Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Button
            title="Skip"
            variant="secondary"
            onPress={handleContinue}
            style={{ flex: 1, marginRight: spacing.s3 }}
          />
          <Button
            title="Continue →"
            onPress={handleContinue}
            style={{ flex: 1 }}
          />
        </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.s5,
    paddingVertical: spacing.s4,
    borderBottomWidth: 1,
    borderBottomColor: colors.warm[200],
    backgroundColor: colors.warm.white,
  },
  backButton: {
    padding: spacing.s2,
  },
  backIcon: {
    fontSize: typography.fontSize['2xl'],
    color: colors.warm[600],
  },
  headerTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginLeft: spacing.s4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.s6,
    paddingTop: spacing.s6,
    paddingBottom: spacing.s10,
  },
  formGroup: {
    marginBottom: spacing.s5,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[700],
    marginBottom: spacing.s2,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: spacing.s4,
  },
  radioOption: {
    flex: 1,
    paddingVertical: spacing.s4,
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.md,
    alignItems: 'center',
    backgroundColor: colors.warm.white,
  },
  radioOptionSelected: {
    borderColor: colors.clay[500],
    backgroundColor: colors.clay[50],
  },
  radioText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.warm[700],
  },
  radioTextSelected: {
    color: colors.clay[700],
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unitText: {
    fontSize: typography.fontSize.base,
    color: colors.warm[600],
    marginLeft: spacing.s2,
    marginRight: spacing.s2,
  },
  helperText: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
    marginTop: spacing.s2,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: spacing.s6,
    marginBottom: spacing.s4,
  },
});
