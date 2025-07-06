import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Appearance } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

export default function ProfileInfoScreen() {
  const colorScheme = Appearance.getColorScheme();

  const [name, setName] = useState('');
  const [gender, setGender] = useState('Pria');
  const [day, setDay] = useState(19);
  const [month, setMonth] = useState('Desember');
  const [year, setYear] = useState(2005);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const changeMonth = (direction: number) => {
    const currentIndex = months.indexOf(month);
    const newIndex = (currentIndex + direction + 12) % 12;
    setMonth(months[newIndex]);
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-800 px-5 pt-14">
      <ScrollView className="flex-1">
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
            <View className="w-2 h-2 mx-1 rounded-full bg-gray-300" />
          </View>

          <View className="w-10 h-10" />
        </View>

        <Text className="text-xl font-bold dark:text-white mb-5">Bantu kami mengenal kamu!</Text>

        <Text className="text-sm font-medium dark:text-white mb-2">Nama</Text>
        <TextInput
          placeholder="Masukkan Nama..."
          placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
          value={name}
          onChangeText={setName}
          className="border border-lime-400 rounded-xl px-4 py-2 mb-4"
        />

        <Text className="text-sm font-medium dark:text-white mb-2">Jenis Kelamin</Text>
        <View className="flex-row gap-3 mb-4">
          {['Pria', 'Wanita'].map((item) => (
            <TouchableOpacity
              key={item}
              className={`flex-row items-center justify-between flex-1 px-4 py-3 rounded-xl shadow-sm ${
                gender === item ? 'border border-lime-400 bg-lime-50 dark:bg-gray-800' : 'dark:bg-gray-900 bg-white'
              }`}
              onPress={() => setGender(item)}
            >
              <Text className="text-sm dark:text-white">
                {item === 'Pria' ? '👦' : '👧'} {item}
              </Text>
              <View className={`w-5 h-5 rounded-full border-2 items-center justify-center bg-white ${gender === item ? 'border-lime-400' : 'border-gray-300'}`}>
                {gender === item && (
                  <Icon name="check" size={14} color="#84cc16" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-sm font-medium dark:text-white mb-2">Tanggal Lahir</Text>
        <View className="flex-row justify-around items-center mb-2">
          <View className="items-center">
            <TouchableOpacity onPress={() => setDay((d) => (d < 31 ? d + 1 : 1))}>
              <Icon name="keyboard-arrow-up" size={24} color="#84cc16" />
            </TouchableOpacity>
            <Text className="text-base font-bold dark:text-white">{day}</Text>
            <TouchableOpacity onPress={() => setDay((d) => (d > 1 ? d - 1 : 31))}>
              <Icon name="keyboard-arrow-down" size={24} color="#84cc16" />
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <TouchableOpacity onPress={() => changeMonth(1)}>
              <Icon name="keyboard-arrow-up" size={24} color="#84cc16" />
            </TouchableOpacity>
            <Text className="text-base font-bold dark:text-white">{month}</Text>
            <TouchableOpacity onPress={() => changeMonth(-1)}>
              <Icon name="keyboard-arrow-down" size={24} color="#84cc16" />
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <TouchableOpacity onPress={() => setYear((y) => y + 1)}>
              <Icon name="keyboard-arrow-up" size={24} color="#84cc16" />
            </TouchableOpacity>
            <Text className="text-base font-bold dark:text-white">{year}</Text>
            <TouchableOpacity onPress={() => setYear((y) => y - 1)}>
              <Icon name="keyboard-arrow-down" size={24} color="#84cc16" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity className="self-end bg-lime-500 rounded px-3 py-1 mb-4">
          <Text className="text-white font-semibold text-sm">Ok</Text>
        </TouchableOpacity>

        <Text className="text-sm font-medium dark:text-white mb-2">Berat Badan</Text>
        <View className="flex-row items-center border border-lime-400 rounded-xl px-4 mb-4">
          <TextInput
            placeholder="Masukkan Berat..."
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
            className="flex-1"
          />
          <Text className="text-sm text-gray-500">Kg</Text>
        </View>

        <Text className="text-sm font-medium dark:text-white mb-2">Tinggi Badan</Text>
        <View className="flex-row items-center border border-lime-400 rounded-xl px-4 mb-6">
          <TextInput
            placeholder="Masukkan Tinggi..."
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
            className="flex-1 dark:text-white"
          />
          <Text className="text-sm text-gray-500">Cm</Text>
        </View>

      </ScrollView>

      <Text className="text-center text-xs text-gray-400 mb-4">
        Informasi digunakan untuk menyesuaikan kebutuhan anda
      </Text>

      <TouchableOpacity onPress={() => router.push('/allergyoption')} className="bg-lime-500 rounded-full py-3 items-center mb-6">
        <Text className="text-white font-bold text-base">Lanjut</Text>
      </TouchableOpacity>
    </View>
  );
}
