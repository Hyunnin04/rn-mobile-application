import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';

export const ProfileHeader: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      <Pressable onPress={handleGoBack} style={styles.backButton} hitSlop={10}>
        <Text style={{ fontSize: 28, fontWeight: '300' }}>{'<'}</Text>
      </Pressable>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};
