import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { 
  ScreenWrapper, 
  Header, 
  Input, 
  ProgressBar, 
  RadioGroup, 
  FormButtonGroup,
  Row 
} from '../../components';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../types';

type ProfileStep1ScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileStep1'>;
};

export const ProfileStep1Screen: React.FC<ProfileStep1ScreenProps> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState<string | null>(null);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');

  const handleContinue = () => {
    navigation.navigate('ProfileStep2');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <ScreenWrapper edges={['top', 'bottom']}>
      <Header 
        title="Create Profile" 
        onBack={handleBack}
      />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <ProgressBar progress={25} label="Step 1 of 4 - Basic Information" />

        {/* Name Section */}
        <View style={styles.section}>
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
        </View>

        {/* Gender Section */}
        <RadioGroup
          label="Gender"
          options={genderOptions}
          value={gender}
          onChange={setGender}
        />

        {/* Date of Birth Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Date of Birth</Text>
          <Row gap={spacing.s3}>
            <View style={styles.flexInput}>
              <Input
                placeholder="DD"
                keyboardType="number-pad"
                maxLength={2}
                value={day}
                onChangeText={setDay}
              />
            </View>
            <View style={styles.flexInput}>
              <Input
                placeholder="MM"
                keyboardType="number-pad"
                maxLength={2}
                value={month}
                onChangeText={setMonth}
              />
            </View>
            <View style={styles.flexInput}>
              <Input
                placeholder="YYYY"
                keyboardType="number-pad"
                maxLength={4}
                value={year}
                onChangeText={setYear}
              />
            </View>
          </Row>
          {year && parseInt(year) > 1900 && (
            <Text style={styles.helperText}>
              Age: {new Date().getFullYear() - parseInt(year)} (auto-calculated)
            </Text>
          )}
        </View>

        {/* Height Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Height</Text>
          <Row gap={spacing.s3} align="center">
            <View style={styles.flexInput}>
              <Input
                placeholder="5"
                keyboardType="number-pad"
                maxLength={1}
                value={feet}
                onChangeText={setFeet}
              />
            </View>
            <Text style={styles.unitText}>ft</Text>
            <View style={styles.flexInput}>
              <Input
                placeholder="8"
                keyboardType="number-pad"
                maxLength={2}
                value={inches}
                onChangeText={setInches}
              />
            </View>
            <Text style={styles.unitText}>in</Text>
          </Row>
        </View>

        {/* Navigation Buttons */}
        <FormButtonGroup
          onSecondary={handleBack}
          secondaryLabel="Skip"
          onPrimary={handleContinue}
          primaryLabel="Continue →"
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.s6,
    paddingTop: spacing.s6,
    paddingBottom: spacing.s10,
  },
  section: {
    marginBottom: spacing.s2,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[700],
    marginBottom: spacing.s3,
  },
  flexInput: {
    flex: 1,
  },
  unitText: {
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    color: colors.warm[600],
    minWidth: 24,
    textAlign: 'center',
  },
  helperText: {
    fontSize: typography.fontSize.sm,
    color: colors.sage[600],
    marginTop: spacing.s1,
  },
});
