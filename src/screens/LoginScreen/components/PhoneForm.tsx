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
        mode="outlined"
        outlineColor="#f0f0f0"
        activeOutlineColor="#00bcd4"
        left={<TextInput.Affix text="🇰🇭 +855 " />}
        style={styles.input}
        contentStyle={{ fontSize: 16 }}
        editable={!isLoading}
        keyboardType="phone-pad"
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
