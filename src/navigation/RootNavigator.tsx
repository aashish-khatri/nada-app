import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

// Auth Screens
import { WelcomeScreen } from '../screens/auth/WelcomeScreen';
import { PhoneVerifyScreen } from '../screens/auth/PhoneVerifyScreen';
import { OTPVerifyScreen } from '../screens/auth/OTPVerifyScreen';
import { RoleSelectScreen } from '../screens/auth/RoleSelectScreen';

// Onboarding Screens
import { ProfileStep1Screen } from '../screens/onboarding/ProfileStep1Screen';
import { ProfileStep2Screen } from '../screens/onboarding/ProfileStep2Screen';
import { ProfileStep3Screen } from '../screens/onboarding/ProfileStep3Screen';
import { ProfileStep4Screen } from '../screens/onboarding/ProfileStep4Screen';
import { ContactSyncScreen } from '../screens/onboarding/ContactSyncScreen';

// Main App
import { MainTabNavigator } from '../screens/main/MainTabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false,
          animation: 'slide_from_right',
        }}
        initialRouteName="Welcome"
      >
        {/* Auth Flow */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PhoneVerify" component={PhoneVerifyScreen} />
        <Stack.Screen name="OTPVerify" component={OTPVerifyScreen} />
        <Stack.Screen name="RoleSelect" component={RoleSelectScreen} />

        {/* Onboarding Flow */}
        <Stack.Screen name="ProfileStep1" component={ProfileStep1Screen} />
        <Stack.Screen name="ProfileStep2" component={ProfileStep2Screen} />
        <Stack.Screen name="ProfileStep3" component={ProfileStep3Screen} />
        <Stack.Screen name="ProfileStep4" component={ProfileStep4Screen} />
        <Stack.Screen name="ContactSync" component={ContactSyncScreen} />

        {/* Main App */}
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};