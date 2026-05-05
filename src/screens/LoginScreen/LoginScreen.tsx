import React from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text, HelperText } from 'react-native-paper';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useLoginForm } from './hooks/useLoginForm';
import { Tabs } from './components/TabSwitcher';
import { EmailForm } from './components/EmailForm';
import { PhoneForm } from './components/PhoneForm';
import { styles } from './styles';
import { RootStackParamList } from './types';

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {
    tabIndex,
    email,
    phone,
    password,
    showPassword,
    errorMessage,
    setTabIndex,
    setEmail,
    setPhone,
    setPassword,
    setShowPassword,
    setErrorMessage,
    handleSubmit,
    isLoading,
  } = useLoginForm();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Title */}
        <Text style={styles.title}>Login</Text>

        {/* Tab Switcher */}
        <Tabs
          tabIndex={tabIndex}
          onTabChange={setTabIndex}
          onClearError={() => setErrorMessage('')}
        />

        {/* Form Content */}
        <View style={styles.tabContent}>
          {tabIndex === 0 ? (
            <EmailForm
              email={email}
              password={password}
              showPassword={showPassword}
              isLoading={isLoading}
              onEmailChange={setEmail}
              onPasswordChange={setPassword}
              onTogglePasswordVisibility={() => setShowPassword(!showPassword)}
            />
          ) : (
            <PhoneForm
              phone={phone}
              password={password}
              showPassword={showPassword}
              isLoading={isLoading}
              onPhoneChange={setPhone}
              onPasswordChange={setPassword}
              onTogglePasswordVisibility={() => setShowPassword(!showPassword)}
            />
          )}
        </View>

        {/* Error Message */}
        {errorMessage ? (
          <HelperText type="error" visible={!!errorMessage}>
            {errorMessage}
          </HelperText>
        ) : null}

        {/* Submit Button */}
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

        {/* Forgot Password Link */}
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

export default LoginScreen;
