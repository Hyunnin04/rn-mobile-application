import React from 'react';
import { View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import { styles } from '../styles';

interface PersonalInfoProps {
  firstName: string;
  lastName: string;
  email: string;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  firstName,
  lastName,
  email,
}) => {
  return (
    <>
      {/* Name Row */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.row}>
          <TextInput
            label="First Name"
            value={firstName}
            editable={false}
            mode="flat"
            style={styles.input}
          />
          <TextInput
            label="Last Name"
            value={lastName}
            editable={false}
            mode="flat"
            style={styles.input}
          />
        </View>
      </View>

      {/* Email */}
      <View style={styles.section}>
        <TextInput
          label="Email"
          value={email}
          editable={false}
          mode="flat"
          left={<TextInput.Icon icon="email" />}
          style={styles.input}
        />
      </View>
    </>
  );
};
