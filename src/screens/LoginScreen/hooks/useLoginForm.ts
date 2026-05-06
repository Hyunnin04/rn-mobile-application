import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { loginWithEmail, loginWithPhone } from '../../../api/auth';
import { saveToken } from '../../../store/authStore';
import { RootStackParamList } from '../types';

export const useLoginForm = () => {
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
      console.log('Login successful, token:', token);
      saveToken(token);
      setErrorMessage('');
      // Add a small delay to ensure token is saved before navigating
      setTimeout(() => {
        navigation.navigate('Profile');
      }, 500);
    },
    onError: (error: any) => {
      console.error('Email login error:', error);
      setErrorMessage('Login failed. Please check your email and password.');
    },
  });

  const phoneMutation = useMutation({
    mutationFn: () => loginWithPhone('+855', phone, password),
    onSuccess: (token: string) => {
      console.log('Login successful, token:', token);
      saveToken(token);
      setErrorMessage('');
      // Add a small delay to ensure token is saved before navigating
      setTimeout(() => {
        navigation.navigate('Profile');
      }, 500);
    },
    onError: (error: any) => {
      console.error('Phone login error:', error);
      setErrorMessage('Login failed. Please check your phone and password.');
    },
  });

  const handleSubmit = () => {
    if (tabIndex === 0) {
      if (!email || !password) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      console.log('Attempting email login with:', email);
      emailMutation.mutate();
    } else {
      if (!phone || !password) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      console.log('Attempting phone login with:', phone);
      phoneMutation.mutate();
    }
  };

  return {
    // State
    tabIndex,
    email,
    phone,
    password,
    showPassword,
    errorMessage,
    // Setters
    setTabIndex,
    setEmail,
    setPhone,
    setPassword,
    setShowPassword,
    setErrorMessage,
    // Mutations
    emailMutation,
    phoneMutation,
    // Handlers
    handleSubmit,
    isLoading: emailMutation.isPending || phoneMutation.isPending,
  };
};
