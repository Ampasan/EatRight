// File: app/(auth)/otp.jsx
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CheckBox from '@/components/CheckBox';

export default function OTP() {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef<Array<TextInput | null>>([]);
    const [automatic, setAutomatic] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120);

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);
        if (text && index < 5) {
            const nextInput = inputs.current[index + 1];
            nextInput?.focus();
        }
    };

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60).toString().padStart(1, '0');
        const sec = (seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
    };

    return (
        <View style={{ paddingTop: insets.top }} className="flex-1 justify-between dark:bg-gray-800 bg-slate-100 p-5">
            <TouchableOpacity onPress={() => router.back()} className="mt-5">
                <Icon name="arrow-back" size={24} color="#7ED957" />
            </TouchableOpacity>

            <View className="dark:bg-gray-900 bg-white border border-lime-500 rounded-[30px] p-6">
                <Text className="text-center font-bold text-xl dark:text-white mb-3">Kode OTP</Text>

                <Text className="font-bold mb-2 dark:text-white">Masukkan Kode</Text>

                <View className="flex-row justify-between mb-4">
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={ref => { inputs.current[index] = ref; }}
                            value={digit}
                            onChangeText={text => handleChange(text, index)}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
                                    inputs.current[index - 1]?.focus();
                                }
                            }}
                            keyboardType="number-pad"
                            maxLength={1}
                            className="border border-lime-500 w-12 h-12 text-center rounded-md text-lg"
                        />
                    ))}
                </View>

                <View className="flex-row justify-between items-center mb-3">
                    <CheckBox label={"Isi Otomatis"} checked={automatic} onChange={setAutomatic} />
                    <TouchableOpacity onPress={() => setTimeLeft(120)} className="flex-row items-center">
                        <Text className="text-gray-500 dark:text-slate-400 font-medium">Kirim Ulang</Text>
                    </TouchableOpacity>
                </View>

                <Text className="text-gray-400 dark:text-slate-300 mb-5">{formatTime(timeLeft)} Waktu Tersisa</Text>

                <TouchableOpacity onPress={() => router.replace('/(tabs)/home')} className="bg-lime-500 py-3 rounded-full">
                    <Text className="text-center text-white font-bold text-lg">Lanjut</Text>
                </TouchableOpacity>
            </View>

            <View className="w-10 h-10" />
        </View>
    );
}