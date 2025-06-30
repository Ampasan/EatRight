import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

const allergyOptions = [
    { label: 'Telur', emoji: '🥚' },
    { label: 'Kacang', emoji: '🥜' },
    { label: 'Seafood', emoji: '🦐' },
    { label: 'Laktosa', emoji: '🥛' },
    { label: 'Kedelai', emoji: '🍇' },
    { label: 'Ikan', emoji: '🐟' }
];

export default function AllergySelectionScreen() {
    const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);

    const toggleAllergy = (item: string) => {
        setSelectedAllergies((prev) =>
        prev.includes(item)
            ? prev.filter((i) => i !== item)
            : [...prev, item]
        );
    };

    return (
        <View className="flex-1 dark:bg-gray-800 bg-slate-100 px-5 pt-14">
        {/* Header */}
        <View className="flex-row justify-between items-center mb-5">
            <TouchableOpacity
                className="w-10 h-10 items-center justify-center"
                onPress={() => router.back()}
            >
                <Icon name="arrow-back" size={24} color="#84cc16" />
            </TouchableOpacity>

            <View className="flex-row space-x-2">
            <View className="w-2 h-2 mx-1 rounded-full bg-lime-500" />
            <View className="w-2 h-2 mx-1 rounded-full bg-lime-500" />
            <View className="w-2 h-2 mx-1 rounded-full bg-lime-500" />
            </View>

            <View className="w-10 h-10" />
        </View>

        <Text className="text-xl font-bold dark:text-white mb-5">Apakah Kamu memiliki Alergi?</Text>

        {/* Allergy Options */}
        <View className="flex-row flex-wrap justify-between">
            {allergyOptions.map((item) => {
            const selected = selectedAllergies.includes(item.label);
            return (
                <TouchableOpacity
                key={item.label}
                onPress={() => toggleAllergy(item.label)}
                className={`w-[48%] flex-row items-center justify-between px-4 py-3 mb-4 rounded-xl shadow-sm ${
                    selected ? 'bg-lime-50 border border-lime-400 dark:bg-gray-800' : 'dark:bg-gray-900 bg-white'
                }`}
                >
                <Text className="text-base dark:text-white">{item.emoji} {item.label}</Text>
                <View className={`w-5 h-5 rounded-full border-2 items-center justify-center bg-white ${selected ? 'border-lime-400' : 'border-gray-300'}`}>
                    {selected && (
                        <Icon name="check" size={14} color="#84cc16" />
                    )}
                </View>
                </TouchableOpacity>
            );
            })}
        </View>

        {/* Info */}
        <Text className="text-center text-xs text-gray-400 mt-4 mb-4">
            Informasi digunakan untuk menyesuaikan kebutuhan anda
        </Text>

        {/* Continue Button */}
        <TouchableOpacity className="bg-lime-500 rounded-full py-3 items-center mb-10">
            <Text className="text-white font-bold text-base">Lanjut</Text>
        </TouchableOpacity>
        </View>
    );
}
