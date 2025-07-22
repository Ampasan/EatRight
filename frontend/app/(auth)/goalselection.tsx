import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '@/components/Button';

const goals = [
    { label: 'Diet', image: require('../../assets/images/targets/diet.png') },
    { label: 'Naikkan Massa Otot', image: require('../../assets/images/targets/muscle.png') },
    { label: 'Kontrol Diabetes', image: require('../../assets/images/targets/diabetes.png') },
    { label: 'Kontrol Kolestrol', image: require('../../assets/images/targets/cholesterol.png') },
    { label: 'Vegan', image: require('../../assets/images/targets/vegan.png') }
];

export default function GoalSelectionScreen() {
    const [selectedGoal, setSelectedGoal] = useState('');
    const [checkValue, setCheckValue] = useState(false);

    useEffect(() => {
        if (selectedGoal != '') {
            setCheckValue(true);
        } else {
            setCheckValue(false);
        }
    }, [selectedGoal]);

    return (
        <View className="flex-1 dark:bg-gray-800 bg-slate-100 px-5 pt-14">
            <View className="flex-row justify-between items-center mb-5">
                <TouchableOpacity
                className="w-10 h-10 items-center justify-center"
                onPress={() => router.back()}
                >
                    <MaterialIcons name="arrow-back" size={24} color="#6BCB01" />
                </TouchableOpacity>

                <View className="flex-row space-x-2">
                <View className="w-3 h-3 mx-1 rounded-full bg-lime-500" />
                <View className="w-3 h-3 mx-1 rounded-full border border-lime-500" />
                <View className="w-3 h-3 mx-1 rounded-full border border-lime-500" />
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
                    <Image
                        source={goal.image}
                        className={`w-10 h-10 rounded-full`}
                    />
                    <Text className="flex-1 text-base dark:text-white ps-4">{goal.label}</Text>
                    <View  className={`w-5 h-5 rounded-full border-2 items-center justify-center bg-white ${selectedGoal === goal.label ? 'border-lime-400' : 'border-gray-300'}`}>
                        {selectedGoal === goal.label && (
                            <View className="w-3 h-3 bg-lime-400 overflow-hidden rounded-full items-center justify-center" />
                        )}
                    </View>
                </TouchableOpacity>
                ))}
            </ScrollView>

            <Text className="text-center text-xs text-gray-400 my-6">
                Informasi digunakan untuk menyesuaikan kebutuhan anda
            </Text>

            <Button
                disabled={!checkValue}
                onPress={() => router.push('/profileinfo')}
                className={checkValue ? 'mb-6' : 'opacity-50 mb-6'}
            >
                Lanjut
            </Button>
        </View>
    );
}
