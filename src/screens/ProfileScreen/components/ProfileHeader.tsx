import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles';

export const ProfileHeader: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={{ fontSize: 24 }}>{'<'}</Text>
      </Pressable>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};
