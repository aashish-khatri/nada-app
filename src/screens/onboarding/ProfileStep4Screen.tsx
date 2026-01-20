import React, { useState } from 'react';
import { View, Text, StyleSheet,  ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, ProgressBar } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

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

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Create Profile</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <ProgressBar progress={100} label="Step 4 of 4 - About You" />

        <View style={styles.formGroup}>
          <Text style={styles.label}>Bio</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Tell us about yourself..."
            placeholderTextColor={colors.warm[400]}
            multiline
            numberOfLines={4}
            maxLength={maxBioLength}
            value={bio}
            onChangeText={setBio}
          />
          <Text style={styles.charCount}>
            {maxBioLength - bio.length} characters remaining
          </Text>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Drinking Habits</Text>
          <View style={styles.radioGroup}>
            {[
              { value: 'never', label: 'Never' },
              { value: 'socially', label: 'Socially' },
              { value: 'regularly', label: 'Regularly' },
            ].map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.radioOption,
                  drinking === option.value && styles.radioOptionSelected,
                ]}
                onPress={() => setDrinking(option.value)}
              >
                <Text
                  style={[
                    styles.radioText,
                    drinking === option.value && styles.radioTextSelected,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Smoking Habits</Text>
          <View style={styles.radioGroup}>
            {[
              { value: 'never', label: 'Never' },
              { value: 'occasionally', label: 'Occasionally' },
              { value: 'regularly', label: 'Regularly' },
            ].map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.radioOption,
                  smoking === option.value && styles.radioOptionSelected,
                ]}
                onPress={() => setSmoking(option.value)}
              >
                <Text
                  style={[
                    styles.radioText,
                    smoking === option.value && styles.radioTextSelected,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Children Plans</Text>
          <View style={styles.radioGroup}>
            {[
              { value: 'want', label: 'Want' },
              { value: 'dont-want', label: "Don't Want" },
              { value: 'open', label: 'Open' },
            ].map((option) => (
              <TouchableOpacity
                key={option.value}
                style={[
                  styles.radioOption,
                  children === option.value && styles.radioOptionSelected,
                ]}
                onPress={() => setChildren(option.value)}
              >
                <Text
                  style={[
                    styles.radioText,
                    children === option.value && styles.radioTextSelected,
                  ]}
                >
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

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
  textArea: {
    width: '100%',
    minHeight: 120,
    paddingVertical: spacing.s4,
    paddingHorizontal: spacing.s4,
    borderWidth: 2,
    borderColor: colors.warm[300],
    borderRadius: radius.md,
    fontSize: typography.fontSize.base,
    color: colors.warm[800],
    backgroundColor: colors.warm.white,
    textAlignVertical: 'top',
  },
  charCount: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
    marginTop: spacing.s2,
  },
  radioGroup: {
    flexDirection: 'row',
    gap: spacing.s4,
    flexWrap: 'wrap',
  },
  radioOption: {
    flex: 1,
    minWidth: 100,
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
  buttonGroup: {
    flexDirection: 'row',
    marginTop: spacing.s6,
    marginBottom: spacing.s8,
  },
});
