import React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { styles } from '../styles';

interface GenderSelectorProps {
  selectedGender: 'male' | 'female' | null;
}

export const GenderSelector: React.FC<GenderSelectorProps> = ({
  selectedGender,
}) => {
  return (
    <View style={styles.genderSection}>
      <Text style={styles.sectionTitle}>Gender</Text>
      <View style={styles.genderOptions}>
        <View style={styles.genderOption}>
          <RadioButton
            value="male"
            status={selectedGender === 'male' ? 'checked' : 'unchecked'}
            disabled
          />
          <Text style={styles.genderLabel}>Male</Text>
        </View>
        <View style={styles.genderOption}>
          <RadioButton
            value="female"
            status={selectedGender === 'female' ? 'checked' : 'unchecked'}
            disabled
          />
          <Text style={styles.genderLabel}>Female</Text>
        </View>
      </View>
    </View>
  );
};
