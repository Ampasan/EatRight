import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

const goals = [
    { label: 'Diet', emoji: '🍎' },
    { label: 'Naikkan Massa Otot', emoji: '💪' },
    { label: 'Kontrol Diabetes', emoji: '🩸' },
    { label: 'Kontrol Kolestrol', emoji: '💚⚡' },
    { label: 'Vegan', emoji: '🥦🥕' }
];

export default function GoalSelectionScreen() {
    const [selectedGoal, setSelectedGoal] = useState('Diet');

    return (
        <View className="flex-1 dark:bg-gray-800 bg-slate-100 px-5 pt-14">
            <View className="flex-row justify-between items-center mb-5">
                <TouchableOpacity
                className="w-10 h-10 items-center justify-center"
                onPress={() => router.back()}
                >
                    <Icon name="arrow-back" size={24} color="#6BCB01" />
                </TouchableOpacity>

                <View className="flex-row space-x-2">
                <View className="w-2 h-2 mx-1 rounded-full bg-lime-500" />
                <View className="w-2 h-2 mx-1 rounded-full bg-gray-300" />
                <View className="w-2 h-2 mx-1 rounded-full bg-gray-300" />
                </View>

                <View className="w-10 h-10" />
            </View>

            <Text className="text-xl font-bold dark:text-white mb-5">Apa Tujuanmu?</Text>

            <ScrollView contentContainerStyle={{ gap: 12 }} className="flex-grow">
                {goals.map((goal) => (
                <TouchableOpacity
                    key={goal.label}
                    onPress={() => setSelectedGoal(goal.label)}
                    className={`flex-row items-center justify-between rounded-xl px-4 py-3 shadow-sm ${
                    selectedGoal === goal.label
                        ? 'border border-lime-400 bg-lime-50 dark:bg-gray-800'
                        : 'dark:bg-gray-900 bg-white'
                    }`}
                >
                    <Text className="text-2xl mr-2">{goal.emoji}</Text>
                    <Text className="flex-1 text-base dark:text-white">{goal.label}</Text>
                    <View  className={`w-5 h-5 rounded-full border-2 items-center justify-center bg-white ${selectedGoal === goal.label ? 'border-lime-400' : 'border-gray-300'}`}>
                        {selectedGoal === goal.label && (
                        <Icon name="check" size={14} color="#84cc16" />
                        )}
                    </View>
                </TouchableOpacity>
                ))}
            </ScrollView>

            <Text className="text-center text-xs text-gray-400 my-6">
                Informasi digunakan untuk menyesuaikan kebutuhan anda
            </Text>

            <TouchableOpacity onPress={() => router.push('/profileinfo')} className="bg-lime-500 rounded-full py-3 items-center mb-6">
                <Text className="text-white font-bold text-base">Lanjut</Text>
            </TouchableOpacity>
        </View>
    );
}
