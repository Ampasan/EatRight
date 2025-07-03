import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MealCard = ({ icon, title, consumed, target, foods }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <View className="bg-white dark:bg-gray-900 dark:border dark:border-lime-500 rounded-2xl p-4 mb-4 shadow-md">
        <TouchableOpacity className="flex-row justify-between items-center align-middle">
            <View className="flex-row items-center">
                <Image source={icon} className="w-12 h-12 mr-2" resizeMode="contain" />
                <View className='flex-col items-start ml-2'>
                    <Text className="font-semibold dark:text-white">{title}</Text>
                    <Text className="font-semibold dark:text-white">{consumed} <Text className="text-gray-500">/ {target} kcal</Text></Text>
                </View>
            </View>
            <TouchableOpacity className="flex-row items-center" onPress={() => setExpanded(!expanded)}>
                <Text className="text-lime-500 font-semibold pe-2">Add Food</Text>
                <View className='border border-lime-500 rounded-full p-1'>
                    <View className='bg-lime-500 rounded-full p-1'>
                        <MaterialIcons name={expanded ? 'expand-less' : 'expand-more'} size={20} color="#fff" />
                    </View>
                </View>
            </TouchableOpacity>
        </TouchableOpacity>

        {expanded && (
            <View className="mt-2">
            <View className="h-1 bg-lime-500 w-full rounded-full my-2" />
            {foods.map((food, i) => (
                <View key={i} className="flex-row justify-between items-center">
                    <Text className="font-semibold text-sm dark:text-white">{food.name}{'\n'}<Text className='text-xs text-gray-400'>{food.detail}</Text></Text>
                    <Text className="font-bold text-lg dark:text-white">{food.kcal} kcal</Text>
                </View>
            ))}
            </View>
        )}
        </View>
    );
};

export default MealCard;

