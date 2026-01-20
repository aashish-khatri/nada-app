import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { 
  ScreenWrapper, 
  Header, 
  ProgressBar, 
  RadioGroup,
  FormButtonGroup 
} from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';

type ProfileStep4ScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileStep4'>;
};

export const ProfileStep4Screen: React.FC<ProfileStep4ScreenProps> = ({ navigation }) => {
  const [bio, setBio] = useState('');
  const [drinking, setDrinking] = useState<string | null>(null);
  const [smoking, setSmoking] = useState<string | null>(null);
  const [children, setChildren] = useState<string | null>(null);

  const maxBioLength = 250;

  const handleContinue = () => {
    navigation.navigate('ContactSync');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const drinkingOptions = [
    { value: 'never', label: 'Never' },
    { value: 'socially', label: 'Socially' },
    { value: 'regularly', label: 'Regularly' },
  ];

  const smokingOptions = [
    { value: 'never', label: 'Never' },
    { value: 'occasionally', label: 'Occasionally' },
    { value: 'regularly', label: 'Regularly' },
  ];

  const childrenOptions = [
    { value: 'want', label: 'Want' },
    { value: 'dont-want', label: "Don't Want" },
    { value: 'open', label: 'Open' },
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
        <ProgressBar progress={100} label="Step 4 of 4 - About You" />

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Tell us about yourself, your interests, values, and what you're looking for..."
            placeholderTextColor={colors.warm[400]}
            multiline
            numberOfLines={5}
            maxLength={maxBioLength}
            value={bio}
            onChangeText={setBio}
            textAlignVertical="top"
          />
          <View style={styles.charCountContainer}>
            <View style={styles.charCountBar}>
              <View 
                style={[
                  styles.charCountFill, 
                  { width: `${(bio.length / maxBioLength) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.charCount}>
              {maxBioLength - bio.length} left
            </Text>
          </View>
        </View>

        {/* Lifestyle Preferences */}
        <Text style={styles.sectionTitle}>Lifestyle</Text>

        <RadioGroup
          label="Drinking Habits"
          options={drinkingOptions}
          value={drinking}
          onChange={setDrinking}
        />

        <RadioGroup
          label="Smoking Habits"
          options={smokingOptions}
          value={smoking}
          onChange={setSmoking}
        />

        <RadioGroup
          label="Children Plans"
          options={childrenOptions}
          value={children}
          onChange={setChildren}
        />

        {/* Navigation Buttons */}
        <FormButtonGroup
          onSecondary={handleBack}
          onPrimary={handleContinue}
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
    marginBottom: spacing.s6,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[700],
    marginBottom: spacing.s3,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    marginBottom: spacing.s5,
    marginTop: spacing.s2,
  },
  textArea: {
    width: '100%',
    minHeight: 140,
    paddingVertical: spacing.s4,
    paddingHorizontal: spacing.s4,
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.lg,
    fontSize: typography.fontSize.base,
    lineHeight: typography.fontSize.base * 1.5,
    color: colors.warm[800],
    backgroundColor: colors.warm.white,
  },
  charCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.s3,
    gap: spacing.s3,
  },
  charCountBar: {
    flex: 1,
    height: 4,
    backgroundColor: colors.warm[200],
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  charCountFill: {
    height: '100%',
    backgroundColor: colors.clay[400],
    borderRadius: radius.full,
  },
  charCount: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[500],
    minWidth: 50,
    textAlign: 'right',
  },
});
