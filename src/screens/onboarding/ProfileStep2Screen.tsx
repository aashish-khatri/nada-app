import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { 
  ScreenWrapper, 
  Header, 
  Input, 
  ProgressBar, 
  FormButtonGroup 
} from '../../components';
import { Picker } from '@react-native-picker/picker';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';

type ProfileStep2ScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileStep2'>;
};

export const ProfileStep2Screen: React.FC<ProfileStep2ScreenProps> = ({ navigation }) => {
  const [hometown, setHometown] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [education, setEducation] = useState('');
  const [college, setCollege] = useState('');
  const [occupation, setOccupation] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const handleContinue = () => {
    navigation.navigate('ProfileStep3');
  };

  const handleBack = () => {
    navigation.goBack();
  };

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
        <ProgressBar progress={50} label="Step 2 of 4 - Location & Career" />

        {/* Location Section */}
        <Input
          label="Hometown"
          placeholder="City, State"
          value={hometown}
          onChangeText={setHometown}
        />

        <Input
          label="Current City"
          placeholder="Where you live now"
          value={currentCity}
          onChangeText={setCurrentCity}
        />

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Education</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={education}
              onValueChange={(value) => setEducation(value)}
              style={styles.picker}
            >
              <Picker.Item label="Select education level" value="" />
              <Picker.Item label="High School" value="high-school" />
              <Picker.Item label="Bachelor's Degree" value="bachelors" />
              <Picker.Item label="B.Tech / BE" value="btech" />
              <Picker.Item label="Master's Degree" value="masters" />
              <Picker.Item label="MBA" value="mba" />
              <Picker.Item label="MBBS" value="mbbs" />
              <Picker.Item label="PhD" value="phd" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
        </View>

        <Input
          label="College/University"
          placeholder="Institution name"
          value={college}
          onChangeText={setCollege}
        />

        {/* Career Section */}
        <Input
          label="Occupation"
          placeholder="e.g., Software Engineer"
          value={occupation}
          onChangeText={setOccupation}
        />

        <Input
          label="Job Title"
          placeholder="Your current role"
          value={jobTitle}
          onChangeText={setJobTitle}
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
    marginBottom: spacing.s5,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[700],
    marginBottom: spacing.s3,
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.md,
    backgroundColor: colors.warm.white,
    overflow: 'hidden',
  },
  picker: {
    height: 52,
    marginHorizontal: spacing.s2,
  },
});
