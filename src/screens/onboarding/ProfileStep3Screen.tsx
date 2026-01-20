import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { 
  ScreenWrapper, 
  Header, 
  ProgressBar, 
  FormButtonGroup,
  Row 
} from '../../components';
import { colors, spacing, typography, radius } from '../../theme';
import { RootStackParamList } from '../../types';

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
    <ScreenWrapper edges={['top', 'bottom']}>
      <Header 
        title="Create Profile" 
        onBack={handleBack}
      />

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ProgressBar progress={75} label="Step 3 of 4 - Photos" />

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.title}>Add Your Photos</Text>
          <Text style={styles.subtitle}>At least 2 photos required</Text>
        </View>

        {/* Profile Photos Grid */}
        <Row gap={spacing.s4} style={styles.photoGrid}>
          <TouchableOpacity
            style={styles.photoBox}
            onPress={() => handleAddPhoto('main')}
            activeOpacity={0.7}
          >
            <Text style={styles.photoIcon}>📷</Text>
            <Text style={styles.photoLabel}>Main Photo</Text>
            <Text style={styles.photoHint}>Primary</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.photoBox}
            onPress={() => handleAddPhoto('additional')}
            activeOpacity={0.7}
          >
            <Text style={styles.photoIcon}>📷</Text>
            <Text style={styles.photoLabel}>Add Photo</Text>
            <Text style={styles.photoHint}>Optional</Text>
          </TouchableOpacity>
        </Row>

        {/* Family Photos Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Family Photos</Text>
          <Text style={styles.sectionSubtitle}>Optional - helps build trust</Text>
        </View>

        <Row gap={spacing.s4} style={styles.familyPhotoGrid}>
          <TouchableOpacity
            style={styles.familyPhotoBox}
            onPress={() => handleAddPhoto('family')}
            activeOpacity={0.7}
          >
            <Text style={styles.photoIcon}>👨‍👩‍👧</Text>
            <Text style={styles.photoLabel}>Family Photo</Text>
          </TouchableOpacity>
        </Row>

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
  sectionHeader: {
    marginBottom: spacing.s5,
  },
  title: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.warm[800],
    marginBottom: spacing.s2,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[800],
    marginTop: spacing.s4,
    marginBottom: spacing.s2,
  },
  sectionSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.warm[500],
  },
  photoGrid: {
    marginBottom: spacing.s6,
  },
  photoBox: {
    flex: 1,
    aspectRatio: 3 / 4,
    backgroundColor: colors.warm[100],
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.warm[300],
    borderRadius: radius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.s4,
  },
  familyPhotoGrid: {
    marginBottom: spacing.s6,
  },
  familyPhotoBox: {
    flex: 1,
    aspectRatio: 16 / 9,
    backgroundColor: colors.warm[100],
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.warm[300],
    borderRadius: radius.xl,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.s4,
  },
  photoIcon: {
    fontSize: 40,
    marginBottom: spacing.s3,
  },
  photoLabel: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.warm[700],
    marginBottom: spacing.s1,
  },
  photoHint: {
    fontSize: typography.fontSize.xs,
    color: colors.warm[500],
  },
});
