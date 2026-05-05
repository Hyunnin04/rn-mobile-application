import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import { loginWithEmail, loginWithPhone } from '../api/auth';
import { saveToken } from '../store/authStore';

type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
};

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [tabIndex, setTabIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailMutation = useMutation({
    mutationFn: () => loginWithEmail(email, password),
    onSuccess: (token: string) => {
      saveToken(token);
      setErrorMessage('');
      navigation.navigate('Profile');
    },
    onError: (error: any) => {
      setErrorMessage('Login failed. Please check your email and password.');
      console.error('Email login error:', error);
    },
  });

  const phoneMutation = useMutation({
    mutationFn: () => loginWithPhone('+855', phone, password),
    onSuccess: (token: string) => {
      saveToken(token);
      setErrorMessage('');
      navigation.navigate('Profile');
    },
    onError: (error: any) => {
      setErrorMessage('Login failed. Please check your phone and password.');
      console.error('Phone login error:', error);
    },
  });

  const handleSubmit = () => {
    if (tabIndex === 0) {
      if (!email || !password) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      emailMutation.mutate();
    } else {
      if (!phone || !password) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      phoneMutation.mutate();
    }
  };

  const isLoading = emailMutation.isPending || phoneMutation.isPending;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.tabSwitcher}>
          <Pressable
            onPress={() => {
              setTabIndex(0);
              setErrorMessage('');
            }}
            style={[styles.tab, tabIndex === 0 && styles.tabActive]}
          >
            <Text
              style={[styles.tabLabel, tabIndex === 0 && styles.tabLabelActive]}
            >
              Email
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setTabIndex(1);
              setErrorMessage('');
            }}
            style={[styles.tab, tabIndex === 1 && styles.tabActive]}
          >
            <Text
              style={[styles.tabLabel, tabIndex === 1 && styles.tabLabelActive]}
            >
              Phone
            </Text>
          </Pressable>
        </View>

        <View style={styles.tabContent}>
          {tabIndex === 0 ? (
            <>
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                mode="flat"
                left={<TextInput.Icon icon="email" />}
                style={styles.input}
                editable={!isLoading}
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                mode="flat"
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                style={styles.input}
                editable={!isLoading}
              />
            </>
          ) : (
            <>
              <TextInput
                label="Phone"
                value={phone}
                onChangeText={setPhone}
                placeholder="Enter your phone number"
                mode="flat"
                left={<TextInput.Affix text="🇰🇭 +855 " />}
                style={styles.input}
                editable={!isLoading}
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                mode="flat"
                left={<TextInput.Icon icon="lock" />}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={() => setShowPassword(!showPassword)}
                  />
                }
                style={styles.input}
                editable={!isLoading}
              />
            </>
          )}
        </View>

        {errorMessage ? (
          <HelperText type="error" visible={!!errorMessage}>
            {errorMessage}
          </HelperText>
        ) : null}

        <Button
          mode="contained"
          onPress={handleSubmit}
          loading={isLoading}
          disabled={isLoading}
          style={styles.submitButton}
          labelStyle={styles.submitButtonLabel}
        >
          Continue →
        </Button>

        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Forgot password?
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  tabSwitcher: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: '#00bcd4',
  },
  tabLabel: {
    fontSize: 16,
    color: '#999',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#00bcd4',
    fontWeight: '600',
  },
  tabContent: {
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
  },
  submitButton: {
    backgroundColor: '#00bcd4',
    marginTop: 20,
    paddingVertical: 8,
    borderRadius: 25,
  },
  submitButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPassword: {
    color: '#00bcd4',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
