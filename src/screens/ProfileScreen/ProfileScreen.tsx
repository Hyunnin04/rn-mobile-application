import React from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from './hooks/useProfile';
import { PersonalInfo } from './components/PersonalInfo';
import { GenderSelector } from './components/GenderSelector';
import { styles, COLORS } from './styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { user, isLoading, error } = useProfile();

  const handleGenderChange = (gender: 'male' | 'female') => {
    // TODO: Update user gender via API
    console.log('Gender changed to:', gender);
  };

  if (isLoading) {
    return (
      <SafeAreaView
        style={[styles.container, { flex: 1, backgroundColor: '#fff' }]}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            hitSlop={10}
          >
            <Text style={{ fontSize: 28, fontWeight: '300' }}>{'<'}</Text>
          </Pressable>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView
        style={[styles.container, { flex: 1, backgroundColor: '#fff' }]}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            hitSlop={10}
          >
            <Text style={{ fontSize: 28, fontWeight: '300' }}>{'<'}</Text>
          </Pressable>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Failed to load profile</Text>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!user) {
    return (
      <SafeAreaView
        style={[styles.container, { flex: 1, backgroundColor: '#fff' }]}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
            hitSlop={10}
          >
            <Text style={{ fontSize: 28, fontWeight: '300' }}>{'<'}</Text>
          </Pressable>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>No user data available</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={[styles.container, { flex: 1, backgroundColor: '#fff' }]}
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          hitSlop={10}
        >
          <Text style={{ fontSize: 28, fontWeight: '300' }}>{'<'}</Text>
        </Pressable>
        <Text style={styles.title}>Profile</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentWrapper}>
          <PersonalInfo
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
          />
          <GenderSelector
            selectedGender={user.gender}
            onGenderChange={handleGenderChange}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
