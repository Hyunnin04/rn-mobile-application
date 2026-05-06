import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { styles } from '../styles';

interface GenderSelectorProps {
  selectedGender: 'male' | 'female' | null;
  onGenderChange: (gender: 'male' | 'female') => void;
}

export const GenderSelector: React.FC<GenderSelectorProps> = ({
  selectedGender,
  onGenderChange,
}) => {
  const [value, setValue] = useState<'male' | 'female'>('male');

  useEffect(() => {
    if (selectedGender) {
      setValue(selectedGender);
    }
  }, [selectedGender]);

  const handleValueChange = (newValue: string) => {
    setValue(newValue as 'male' | 'female');
    onGenderChange(newValue as 'male' | 'female');
  };

  return (
    <View style={styles.genderSection}>
      <Text style={styles.sectionTitle}>GENDER</Text>
      <RadioButton.Group onValueChange={handleValueChange} value={value}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            gap: 32,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <RadioButton.Android value="male" color="#00bcd4" />
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '500' }}>
              Male
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <RadioButton.Android value="female" color="#00bcd4" />
            <Text style={{ fontSize: 15, color: '#000', fontWeight: '500' }}>
              Female
            </Text>
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};
