import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HarianSection from '@/components/statistics/HarianSection';
import MingguanSection from '@/components/statistics/MingguanSection';

export default function Statistik() {
    const insets = useSafeAreaInsets();

    const [activeTab, setActiveTab] = useState('Harian');

    return (
        <ScrollView
            className="flex-1 bg-[#F1F7FF] dark:bg-gray-800 px-4 pt-6"
            contentContainerStyle={{ paddingTop: insets.top, paddingBottom: 100 }}
        >
            <Text className="font-bold text-xl dark:text-white mb-4">Kalori</Text>

            <View className="flex-row justify-evenly mb-4">
                {['Harian', 'Mingguan'].map((tab) => (
                <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)} className="items-center">
                    <Text className={`font-semibold ${activeTab === tab ? 'text-lime-500' : 'text-gray-400'}`}>
                    {tab}
                    </Text>
                    {activeTab === tab && <View className="w-2 h-2 rounded-full bg-lime-500 mt-1" />}
                </TouchableOpacity>
                ))}
            </View>

            {activeTab === 'Harian' ? <HarianSection /> : <MingguanSection />}
        </ScrollView>
    );
}
