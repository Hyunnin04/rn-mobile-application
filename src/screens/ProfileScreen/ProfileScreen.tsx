import React from 'react';
import { View, ScrollView } from 'react-native';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useProfile } from './hooks/useProfile';
import { ProfileHeader } from './components/ProfileHeader';
import { PersonalInfo } from './components/PersonalInfo';
import { GenderSelector } from './components/GenderSelector';
import { styles, COLORS } from './styles';

const ProfileScreen = () => {
  const { user, isLoading, error } = useProfile();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ProfileHeader />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <ProfileHeader />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load profile</Text>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <ProfileHeader />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>No user data available</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <PersonalInfo
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
        />
        <GenderSelector selectedGender={user.gender} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
