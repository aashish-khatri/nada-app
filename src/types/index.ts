import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  // Auth Flow
  Welcome: undefined;
  PhoneVerify: undefined;
  OTPVerify: { phoneNumber: string };
  RoleSelect: undefined;

  // Onboarding Flow
  ProfileStep1: undefined;
  ProfileStep2: undefined;
  ProfileStep3: undefined;
  ProfileStep4: undefined;
  ContactSync: undefined;

  // Main App
  MainTabs: undefined;
};

export type MainTabParamList = {
  Discover: undefined;
  Activity: undefined;
  Chat: undefined;
  Profile: undefined;
};

export type User = {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  location: string;
  occupation: string;
  degree: number;
  verified: boolean;
};

export type Match = User & {
  matchScore: number;
  commonConnections: string[];
};

export type ChatMessage = {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
};
