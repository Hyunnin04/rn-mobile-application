import React from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from '../styles';

interface EmailFormProps {
  email: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePasswordVisibility: () => void;
}

export const EmailForm: React.FC<EmailFormProps> = ({
  email,
  password,
  showPassword,
  isLoading,
  onEmailChange,
  onPasswordChange,
  onTogglePasswordVisibility,
}) => {
  return (
    <>
      <TextInput
        label="Email"
        value={email}
        onChangeText={onEmailChange}
        placeholder="Enter your email"
        mode="flat"
        left={<TextInput.Icon icon="email" />}
        style={styles.input}
        editable={!isLoading}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={onPasswordChange}
        placeholder="Enter your password"
        secureTextEntry={!showPassword}
        mode="flat"
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon
            icon={showPassword ? 'eye-off' : 'eye'}
            onPress={onTogglePasswordVisibility}
          />
        }
        style={styles.input}
        editable={!isLoading}
      />
    </>
  );
};
