# Nada - React Native App Migration Guide

## 🚀 Complete Setup Guide for First-Time React Native Users

This is a complete migration of your Nada matrimonial web prototype to React Native.

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- iOS: macOS with Xcode (for iOS development)
- Android: Android Studio with SDK

### Step 1: Initial Setup (15 minutes)

```bash
# Install Expo CLI globally
npm install -g expo-cli

# Create new project
npx create-expo-app@latest nada-app --template blank-typescript

# Navigate to project
cd nada-app

# Copy all files from this migration package into nada-app/
# Replace the default App.tsx with provided files

# Install dependencies
npm install
```

### Step 2: Install Required Packages

```bash
# Navigation
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs

# Expo dependencies for navigation
npx expo install react-native-screens react-native-safe-area-context

# UI Components
npx expo install expo-linear-gradient expo-blur expo-font @expo-google-fonts/outfit @expo-google-fonts/inter

# Form & State Management
npm install react-hook-form zustand

# Icons (optional, we'll use emojis for now)
npm install react-native-vector-icons

# Additional utilities
npx expo install expo-image-picker expo-contacts
```

### Step 3: Run the App

```bash
# Start development server
npx expo start

# Then press:
# - 'i' for iOS simulator (macOS only)
# - 'a' for Android emulator
# - Scan QR code with Expo Go app on your phone
```

### Project Structure
```
nada-app/
├── src/
│   ├── theme/              # Design system (colors, spacing, typography)
│   ├── components/         # Reusable UI components
│   ├── screens/            # All app screens
│   │   ├── auth/           # Welcome, Phone, OTP
│   │   ├── onboarding/     # Profile creation steps
│   │   └── main/           # Dashboard, Chat, Activity, Profile
│   ├── navigation/         # Navigation setup
│   ├── store/              # State management (Zustand)
│   ├── utils/              # Validation & helpers
│   └── types/              # TypeScript types
├── assets/                 # Images, fonts
├── App.tsx                 # Entry point
└── app.json                # Expo configuration
```

### Common Issues & Solutions

**Issue: Metro bundler won't start**
```bash
npx expo start -c  # Clear cache
```

**Issue: Fonts not loading**
- Make sure to wait for fonts before rendering
- See App.tsx for proper font loading

**Issue: Navigation errors**
```bash
npx expo install react-native-screens react-native-safe-area-context
```

### Development Tips

1. **Hot Reload**: Save files to see changes instantly
2. **Debug**: Shake device or press Cmd+D (iOS) / Cmd+M (Android)
3. **Console**: Use `console.log()` - visible in terminal
4. **Inspect**: Install React Native Debugger

### Next Steps After Setup

1. Run the app: `npx expo start`
2. Test all screens and navigation
3. Customize colors in `src/theme/colors.ts`
4. Add real images in `src/screens/`
5. Connect to backend API in `src/services/api.ts`

### Resources
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
