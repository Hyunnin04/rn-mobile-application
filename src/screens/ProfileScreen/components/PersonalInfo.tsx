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
  firstName = '',
  lastName = '',
  email = '',
}) => {
  return (
    <>
      {/* Name Row */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.row}>
          <TextInput
            label="First Name"
            value={firstName || 'N/A'}
            editable={false}
            mode="outlined"
            outlineColor="#f0f0f0"
            activeOutlineColor="#00bcd4"
            style={styles.input}
            contentStyle={{ fontSize: 16 }}
          />
          <TextInput
            label="Last Name"
            value={lastName || 'N/A'}
            editable={false}
            mode="outlined"
            outlineColor="#f0f0f0"
            activeOutlineColor="#00bcd4"
            style={styles.input}
            contentStyle={{ fontSize: 16 }}
          />
        </View>
      </View>

      {/* Email */}
      <View style={styles.section}>
        <TextInput
          label="Email"
          value={email || 'N/A'}
          editable={false}
          mode="outlined"
          outlineColor="#f0f0f0"
          activeOutlineColor="#00bcd4"
          style={styles.input}
          contentStyle={{ fontSize: 16 }}
        />
      </View>
    </>
  );
};
