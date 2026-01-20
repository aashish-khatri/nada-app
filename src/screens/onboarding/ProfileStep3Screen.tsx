import React, { useState } from 'react';
import { View, Text, StyleSheet,  ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, ProgressBar } from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

type ProfileStep3ScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfileStep3'>;
};

export const ProfileStep3Screen: React.FC<ProfileStep3ScreenProps> = ({ navigation }) => {
  const [mainPhoto, setMainPhoto] = useState<string | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);

  const handleAddPhoto = (type: 'main' | 'additional' | 'family') => {
    Alert.alert('Photo Upload', 'In production, this would open image picker');
  };

  const handleContinue = () => {
    navigation.navigate('ProfileStep4');
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
        <ProgressBar progress={75} label="Step 3 of 4 - Photos" />

        <Text style={styles.title}>Add Your Photos</Text>
        <Text style={styles.subtitle}>At least 2 photos required</Text>

        <View style={styles.photoGrid}>
          <TouchableOpacity
            style={styles.photoBox}
            onPress={() => handleAddPhoto('main')}
          >
            <Text style={styles.photoIcon}>📷</Text>
            <Text style={styles.photoLabel}>Main Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.photoBox}
            onPress={() => handleAddPhoto('additional')}
          >
            <Text style={styles.photoIcon}>📷</Text>
            <Text style={styles.photoLabel}>Add Photo</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Family Photos (Optional)</Text>

        <View style={styles.familyPhotoGrid}>
          <TouchableOpacity
            style={styles.familyPhotoBox}
            onPress={() => handleAddPhoto('family')}
          >
            <Text style={styles.photoIcon}>📷</Text>
            <Text style={styles.photoLabel}>Add Photo</Text>
          </TouchableOpacity>
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
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginBottom: spacing.s2,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
    marginBottom: spacing.s6,
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginTop: spacing.s6,
    marginBottom: spacing.s4,
  },
  photoGrid: {
    flexDirection: 'row',
    gap: spacing.s4,
    marginBottom: spacing.s6,
  },
  photoBox: {
    flex: 1,
    aspectRatio: 3 / 4,
    backgroundColor: colors.warm[200],
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.warm[400],
    borderRadius: radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  familyPhotoGrid: {
    flexDirection: 'row',
    gap: spacing.s4,
    marginBottom: spacing.s8,
  },
  familyPhotoBox: {
    flex: 1,
    aspectRatio: 4 / 3,
    backgroundColor: colors.warm[200],
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.warm[400],
    borderRadius: radius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoIcon: {
    fontSize: 32,
    marginBottom: spacing.s2,
  },
  photoLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[600],
  },
  buttonGroup: {
    flexDirection: 'row',
    marginTop: spacing.s6,
    marginBottom: spacing.s8,
  },
});
