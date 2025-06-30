import React from 'react';
import { View } from 'react-native';

const Card = ({ children, className }) => {
    return (
        <View className={`dark:bg-gray-900 bg-white rounded-3xl p-5 shadow-lg ${className}`}>
            {children}
        </View>
    );
};

export default Card;