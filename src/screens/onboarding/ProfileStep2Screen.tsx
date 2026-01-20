import React, { useState } from 'react';
import { View, Text, StyleSheet,  ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input, ProgressBar } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { RootStackParamList } from '../../types';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Profile</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ProgressBar progress={50} label="Step 2 of 4 - Location & Career" />

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

        <View style={styles.formGroup}>
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

        <View style={styles.buttonGroup}>
          <Button
            title="← Back"
            variant="secondary"
            onPress={handleBack}
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
  content: {
    flex: 1,
    paddingHorizontal: spacing.s6,
    paddingTop: spacing.s7,
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
  pickerContainer: {
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: 12,
    backgroundColor: colors.warm.white,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: spacing.s6,
    marginBottom: spacing.s8,
  },
});
