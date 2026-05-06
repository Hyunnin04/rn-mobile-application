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
        mode="outlined"
        outlineColor="#f0f0f0"
        activeOutlineColor="#00bcd4"
        left={<TextInput.Affix text="✉️ " />}
        style={styles.input}
        contentStyle={{ fontSize: 16 }}
        editable={!isLoading}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={onPasswordChange}
        placeholder="Enter your password"
        secureTextEntry={!showPassword}
        mode="outlined"
        outlineColor="#f0f0f0"
        activeOutlineColor="#00bcd4"
        left={<TextInput.Affix text="🔒 " />}
        right={
          <TextInput.Affix
            text={showPassword ? '👁️' : ''}
            onPress={onTogglePasswordVisibility}
          />
        }
        style={styles.input}
        contentStyle={{ fontSize: 16 }}
        editable={!isLoading}
      />
    </>
  );
};
