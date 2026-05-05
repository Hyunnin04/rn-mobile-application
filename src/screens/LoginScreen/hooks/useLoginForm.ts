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
