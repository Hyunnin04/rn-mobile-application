import React from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from '../styles';

interface PhoneFormProps {
  phone: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  onPhoneChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePasswordVisibility: () => void;
}

export const PhoneForm: React.FC<PhoneFormProps> = ({
  phone,
  password,
  showPassword,
  isLoading,
  onPhoneChange,
  onPasswordChange,
  onTogglePasswordVisibility,
}) => {
  return (
    <>
      <TextInput
        label="Phone"
        value={phone}
        onChangeText={onPhoneChange}
        placeholder="Enter your phone number"
        mode="flat"
        left={<TextInput.Affix text="🇰🇭 +855 " />}
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
