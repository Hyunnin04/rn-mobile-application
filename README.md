# ReactNative-Mobile-Auth

A mobile application built with React Native that allows users to log in with their email or phone number and view their profile information.

---

## What This App Does

- User can log in using **email and password** or **phone number and password**
- After login, the app **saves the token securely** on the device
- User can view their **profile information** fetched from the server
- App handles **errors** and shows friendly messages to the user

---

## Tech Stack

| Technology | What it is used for |
|------------|-------------------|
| React Native 0.80 | Building the mobile app |
| Axios | Making API requests |
| TanStack Query | Fetching and caching data |
| React Native Paper | UI components and styling |
| AsyncStorage | Saving JWT token on device |

---

## Prerequisites

Before running this app, make sure you have these installed on your computer:

- [Node.js](https://nodejs.org) version 18 or higher
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Android Studio](https://developer.android.com/studio) for Android
- [Xcode](https://developer.apple.com/xcode/) for iOS (Mac only)

---

## Installation

**1. Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/ReactNative-Mobile-Auth.git
```

**2. Go into the project folder**
```bash
cd ReactNative-Mobile-Auth
```

**3. Install dependencies**
```bash
npm install
```

**4. Install iOS pods (Mac only)**
```bash
cd ios && pod install && cd ..
```

---

## How to Run

**Run on Android:**
```bash
npx react-native run-android
```

**Run on iOS (Mac only):**
```bash
npx react-native run-ios
```

---

## Screenshots

| Login (Email) | Login (Phone) | Profile |
|--------------|--------------|---------|
| coming soon | coming soon | coming soon |

---

## Test Credentials

| Field | Value |
|-------|-------|
| Email | dummy@gmail.com |
| Phone | 010333444 |
| Country Code | 855 |
| Password | Pwd@#124! |

---

## Author

Built as a React Native technical assessment project.