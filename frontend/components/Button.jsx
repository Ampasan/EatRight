import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-lime-500 rounded-full py-2 px-6 items-center`}
    >
      <Text className={`text-white font-bold text-lg`}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;