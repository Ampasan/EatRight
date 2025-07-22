import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ children, className, ...props }) => {
  return (
    <TouchableOpacity
      className={`bg-lime-500 rounded-full py-2 px-6 items-center ${className}`}
      {...props}
    >
      <Text className={`text-white font-bold text-base`}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;