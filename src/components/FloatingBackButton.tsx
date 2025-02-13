import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type Props = {
  onPress?: () => void;
};

const FloatingBackButton: React.FC<Props> = ({ onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
      <Icon name="arrow-back" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 40,
    right: 30,
    backgroundColor: '#4CAF50',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default FloatingBackButton;
