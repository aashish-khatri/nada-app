
# 📂 FILE MAPPING GUIDE - WHERE TO PUT EACH FILE

## 🎯 Quick Start: Copy Files to These Exact Locations

### Step 1: Create the Project
```bash
npx create-expo-app@latest nada-app --template blank-typescript
cd nada-app
```

### Step 2: Create All Directories
```bash
mkdir -p src/theme src/components src/screens/auth src/screens/onboarding src/screens/main src/navigation src/store src/types src/utils src/services
```

### Step 3: Download & Copy Files (Exact Locations)

```
YOUR DOWNLOADS               →    WHERE TO PUT IT
=====================================================================================================

📁 ROOT LEVEL (in nada-app/ folder)
-----------------------------------------------------------------------------------------------------
app.json                     →    nada-app/app.json                    ✅ REPLACE default
package.json                 →    nada-app/package.json                ✅ REPLACE default
.gitignore                   →    nada-app/.gitignore                  ✅ CREATE new
App.tsx                      →    nada-app/App.tsx                     ✅ REPLACE default


📁 THEME (in nada-app/src/theme/)
-----------------------------------------------------------------------------------------------------
colors.ts                    →    nada-app/src/theme/colors.ts         ✅ CREATE
spacing.ts                   →    nada-app/src/theme/spacing.ts        ✅ CREATE
typography.ts                →    nada-app/src/theme/typography.ts     ✅ CREATE
shadows.ts                   →    nada-app/src/theme/shadows.ts        ✅ CREATE
index.ts (theme)             →    nada-app/src/theme/index.ts          ✅ CREATE


📁 COMPONENTS (in nada-app/src/components/)
-----------------------------------------------------------------------------------------------------
Button.tsx                   →    nada-app/src/components/Button.tsx           ✅ CREATE
Input.tsx                    →    nada-app/src/components/Input.tsx            ✅ CREATE
Card.tsx                     →    nada-app/src/components/Card.tsx             ✅ CREATE
ProgressBar.tsx              →    nada-app/src/components/ProgressBar.tsx      ✅ CREATE
Tag.tsx                      →    nada-app/src/components/Tag.tsx              ✅ CREATE
index.ts (components)        →    nada-app/src/components/index.ts             ✅ CREATE


📁 SCREENS - AUTH (in nada-app/src/screens/auth/)
-----------------------------------------------------------------------------------------------------
WelcomeScreen.tsx            →    nada-app/src/screens/auth/WelcomeScreen.tsx       ✅ CREATE
PhoneVerifyScreen.tsx        →    nada-app/src/screens/auth/PhoneVerifyScreen.tsx   ✅ CREATE
OTPVerifyScreen.tsx          →    nada-app/src/screens/auth/OTPVerifyScreen.tsx     ✅ CREATE
RoleSelectScreen.tsx         →    nada-app/src/screens/auth/RoleSelectScreen.tsx    ✅ CREATE


📁 NAVIGATION (in nada-app/src/navigation/)
-----------------------------------------------------------------------------------------------------
RootNavigator.tsx            →    nada-app/src/navigation/RootNavigator.tsx    ✅ CREATE


📁 STORE (in nada-app/src/store/)
-----------------------------------------------------------------------------------------------------
userStore.ts                 →    nada-app/src/store/userStore.ts      ✅ CREATE
matchStore.ts                →    nada-app/src/store/matchStore.ts     ✅ CREATE


📁 TYPES (in nada-app/src/types/)
-----------------------------------------------------------------------------------------------------
index.ts (types)             →    nada-app/src/types/index.ts          ✅ CREATE


📁 UTILS (in nada-app/src/utils/)
-----------------------------------------------------------------------------------------------------
validation.ts                →    nada-app/src/utils/validation.ts     ✅ CREATE
helpers.ts                   →    nada-app/src/utils/helpers.ts        ✅ CREATE


=====================================================================================================
```

## 📊 Visual Directory Tree

```
nada-app/
│
├── 📄 App.tsx                           ← Main entry (REPLACE default)
├── 📄 app.json                          ← Config (REPLACE default)
├── 📄 package.json                      ← Dependencies (REPLACE default)
├── 📄 .gitignore                        ← Git rules (CREATE new)
│
├── 📁 assets/                           ← Images (Auto-created by Expo)
│
└── 📁 src/                              ← All your code goes here
    │
    ├── 📁 theme/                        ← 5 files
    │   ├── colors.ts
    │   ├── spacing.ts
    │   ├── typography.ts
    │   ├── shadows.ts
    │   └── index.ts
    │
    ├── 📁 components/                   ← 6 files
    │   ├── Button.tsx
    │   ├── Input.tsx
    │   ├── Card.tsx
    │   ├── ProgressBar.tsx
    │   ├── Tag.tsx
    │   └── index.ts
    │
    ├── 📁 screens/
    │   ├── 📁 auth/                     ← 4 files
    │   │   ├── WelcomeScreen.tsx
    │   │   ├── PhoneVerifyScreen.tsx
    │   │   ├── OTPVerifyScreen.tsx
    │   │   └── RoleSelectScreen.tsx
    │   │
    │   ├── 📁 onboarding/               ← CREATE THESE LATER
    │   │   └── (5 screens to add)
    │   │
    │   └── 📁 main/                     ← CREATE THESE LATER
    │       └── (6 screens to add)
    │
    ├── 📁 navigation/                   ← 1 file (2 total later)
    │   └── RootNavigator.tsx
    │
    ├── 📁 store/                        ← 2 files
    │   ├── userStore.ts
    │   └── matchStore.ts
    │
    ├── 📁 types/                        ← 1 file
    │   └── index.ts
    │
    └── 📁 utils/                        ← 2 files
        ├── validation.ts
        └── helpers.ts
```

## ✅ Checklist: Files to Copy (23 files)

**Root Level (4 files):**
- [ ] App.tsx
- [ ] app.json
- [ ] package.json
- [ ] .gitignore

**Theme (5 files):**
- [ ] src/theme/colors.ts
- [ ] src/theme/spacing.ts
- [ ] src/theme/typography.ts
- [ ] src/theme/shadows.ts
- [ ] src/theme/index.ts

**Components (6 files):**
- [ ] src/components/Button.tsx
- [ ] src/components/Input.tsx
- [ ] src/components/Card.tsx
- [ ] src/components/ProgressBar.tsx
- [ ] src/components/Tag.tsx
- [ ] src/components/index.ts

**Auth Screens (4 files):**
- [ ] src/screens/auth/WelcomeScreen.tsx
- [ ] src/screens/auth/PhoneVerifyScreen.tsx
- [ ] src/screens/auth/OTPVerifyScreen.tsx
- [ ] src/screens/auth/RoleSelectScreen.tsx

**Navigation (1 file):**
- [ ] src/navigation/RootNavigator.tsx

**Store (2 files):**
- [ ] src/store/userStore.ts
- [ ] src/store/matchStore.ts

**Types (1 file):**
- [ ] src/types/index.ts

**Utils (2 files):**
- [ ] src/utils/validation.ts
- [ ] src/utils/helpers.ts

## 🚀 After Copying Files

### Step 4: Install Dependencies
```bash
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs zustand

npx expo install react-native-screens react-native-safe-area-context expo-linear-gradient expo-font @expo-google-fonts/outfit @expo-google-fonts/inter
```

### Step 5: Run the App
```bash
npx expo start
```

Then press:
- **'i'** for iOS simulator (macOS only)
- **'a'** for Android emulator
- **Scan QR code** with Expo Go app on your phone

## 🎯 What You'll See

After setup, your app will show:
1. ✅ Welcome screen with "Get Started" button
2. ✅ Phone verification screen
3. ✅ OTP entry screen
4. ✅ Role selection screen

## ⚠️ Common Mistakes to Avoid

1. ❌ **Don't** put files in random folders
2. ❌ **Don't** skip creating the `src/` directory structure
3. ❌ **Don't** forget to replace default `App.tsx`
4. ✅ **Do** follow the exact folder structure above
5. ✅ **Do** run `npm install` after copying files
6. ✅ **Do** test with `npx expo start` after setup

## 💡 Pro Tip

**Use this command to verify your structure:**
```bash
cd nada-app
ls -R src/
```

You should see all the folders and files listed.
