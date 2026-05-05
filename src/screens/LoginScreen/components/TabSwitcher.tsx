import React from 'react';
import { View, Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../styles';

interface TabsProps {
  tabIndex: number;
  onTabChange: (index: number) => void;
  onClearError: () => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabIndex,
  onTabChange,
  onClearError,
}) => {
  const handleTabPress = (index: number) => {
    onTabChange(index);
    onClearError();
  };

  return (
    <View style={styles.tabSwitcher}>
      <Pressable
        onPress={() => handleTabPress(0)}
        style={[styles.tab, tabIndex === 0 && styles.tabActive]}
      >
        <Text
          style={[styles.tabLabel, tabIndex === 0 && styles.tabLabelActive]}
        >
          Email
        </Text>
      </Pressable>
      <Pressable
        onPress={() => handleTabPress(1)}
        style={[styles.tab, tabIndex === 1 && styles.tabActive]}
      >
        <Text
          style={[styles.tabLabel, tabIndex === 1 && styles.tabLabelActive]}
        >
          Phone
        </Text>
      </Pressable>
    </View>
  );
};
