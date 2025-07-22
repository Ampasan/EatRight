import { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import CheckBox from '@/components/CheckBox';
import Button from '@/components/Button';

export default function Introduction() {
    const insets = useSafeAreaInsets();
    const [isChecked, setIsChecked] = useState(false);

    const handleContinue = async () => {
        await AsyncStorage.setItem('scanIntroSeen', 'true');
        router.replace('/(tabs)/chatbots/chatbot');
    };

    return (
        <ScrollView
            className="flex-1 bg-white dark:bg-gray-900 px-5 pt-16 pb-8"
            contentContainerStyle={{ paddingTop: insets.top }}
        >
            <Text className="text-xl font-bold dark:text-white">
                Memperkenalkan{"\n"}
                <Text className="text-xl font-bold">Fitur Scan Makanan</Text>
            </Text>

            <View className="my-8 justify-center items-center relative">
                <View className="absolute w-40 h-40 border-4 border-lime-500 rounded-xl border-dashed z-0" />
                <Image
                    source={require('@/assets/images/foods/home/salmon.png')}
                    className="w-40 h-40 rounded-full z-10"
                    resizeMode="cover"
                />
            </View>

            <Text className="text-base font-medium dark:text-white mb-4">
                Cukup foto makananmu, dan Asisten AI kami akan membantu menghitung
            </Text>

            <View className="gap-2 mb-6">
                {['Total Kalori', 'Karbohidrat', 'Protein', 'Lemak'].map((item, index) => (
                    <View key={index} className="flex-row items-center gap-2">
                        <MaterialIcons name={"check-circle"} size={20} color="#7ED321" />
                        <Text className="text-base font-medium text-gray-700 dark:text-gray-300">
                            {item}
                        </Text>
                    </View>
                ))}
            </View>

            <Text className="mb-4 font-medium text-base dark:text-white">
                Kamu juga bisa berkonsultasi seputar resep makanan sehat, diet dan saran makanan loh!
            </Text>

            <Text className="mb-4 text-base dark:text-white">
                Praktis, cepat, dan akurat untuk mendukung gaya hidup sehatmu setiap hari!
            </Text>

            <Text className="text-lime-500 font-semibold mb-8">EatRight</Text>

            <View className='w-[75vw] ps-2'>
                <CheckBox
                    label="Izinkan Aplikasi Mengakses Kamera saat aplikasi digunakan"
                    checked={isChecked}
                    onChange={setIsChecked}
                />
            </View>

            <Button
                disabled={!isChecked}
                onPress={handleContinue}
                className={isChecked ? 'mb-6' : 'opacity-50 mb-6'}
            >
                Lanjut
            </Button>
        </ScrollView>
    );
}
