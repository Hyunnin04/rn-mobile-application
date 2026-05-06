import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import LoginScreen from '../screens/LoginScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import ForgotPasswordScreen from '../screens/ForgotPassword/index';

export type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const ProfileBackButton = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      hitSlop={10}
      style={{ padding: 4, marginRight: 16 }}
    >
      <Text style={{ fontSize: 28, fontWeight: '300' }}>{'<'}</Text>
    </Pressable>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
