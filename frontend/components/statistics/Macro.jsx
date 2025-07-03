import React from 'react';
import { View, Text } from 'react-native';

const Macro = ({ label, value, maxValue, percent }) => {
    return (
        <View className='flex-1 justify-center items-center px-2'>
            <Text className="text-sm font-bold dark:text-white mb-2">{label}</Text>
            <View className="w-full h-2 mb-1 bg-gray-200 rounded-full overflow-hidden">
                <View className="h-full bg-lime-500" style={{ width: `${percent}%` }} />
            </View>
            <Text className="text-sm font-bold dark:text-white mt-1">{value} <Text className="text-sm text-gray-600 dark:text-gray-400">/ {maxValue}</Text></Text>
            <Text className="text-sm text-gray-600 dark:text-gray-400">({percent}%)</Text>
        </View>
    );
};

export default Macro;

