import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Appearance } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '@/components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileInfoScreen() {
  const colorScheme = Appearance.getColorScheme();
  const currentDate = new Date();

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [day, setDay] = useState(currentDate.getDate());
  const [month, setMonth] = useState(months[currentDate.getMonth()]);
  const [year, setYear] = useState(currentDate.getFullYear());
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [checkValue, setCheckValue] = useState(false);

  useEffect(() => {
      if (name && gender && day && month && year && weight && height) {
          setCheckValue(true);
      } else {
          setCheckValue(false);
      }
  }, [name, gender, day, month, year, weight, height]);

  const changeMonth = (direction: number) => {
    const currentIndex = months.indexOf(month);
    const newIndex = (currentIndex + direction + 12) % 12;
    setMonth(months[newIndex]);
  };

  const handleTextChange = (text: string, setter: (arg0: string) => void) => {
    const numericValue = parseInt(text.replace(/[^0-9]/g, ''), 10);
    setter(isNaN(numericValue) ? '' : String(numericValue));
  };

  const handleProfileInfoSubmit = () => {
    const monthNumber = months.indexOf(month) + 1;
    const paddedMonth = monthNumber < 10 ? `0${monthNumber}` : `${monthNumber}`;
    const paddedDay = day < 10 ? `0${day}` : `${day}`;

    AsyncStorage.setItem('userName', name);
    AsyncStorage.setItem('userGender', gender);
    AsyncStorage.setItem('userBirthDate', `${year}-${paddedMonth}-${paddedDay}`);
    AsyncStorage.setItem('userWeight', weight);
    AsyncStorage.setItem('userHeight', height);

    console.log({
      name,
      gender,
      birthDate: `${year}-${paddedMonth}-${paddedDay}`,
      weight,
      height
    });

    router.push('/allergyoption');
  }

  return (
    <View className="flex-1 bg-white dark:bg-gray-800 px-5 pt-14">
      <ScrollView className="flex-1">
        <View className="flex-row justify-between items-center mb-5">
          <TouchableOpacity
              className="w-10 h-10 items-center justify-center"
              onPress={() => router.back()}
          >
              <MaterialIcons name="arrow-back" size={24} color="#84cc16" />
          </TouchableOpacity>

          <View className="flex-row space-x-2">
            <View className="w-3 h-3 mx-1 rounded-full bg-lime-500" />
            <View className="w-3 h-3 mx-1 rounded-full bg-lime-500" />
            <View className="w-3 h-3 mx-1 rounded-full border border-lime-500" />
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
          className="border dark:text-white border-lime-400 rounded-xl px-4 py-2 mb-4"
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
                  <View className="w-3 h-3 bg-lime-400 overflow-hidden rounded-full items-center justify-center" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-sm font-medium dark:text-white mb-2">Tanggal Lahir</Text>
        <View className="flex-row justify-around items-center mb-2">
          <View className="items-center">
            <TouchableOpacity onPress={() => setDay((d) => (d < 31 ? d + 1 : 1))}>
              <MaterialIcons name="keyboard-arrow-up" size={24} color="#84cc16" />
            </TouchableOpacity>
            <Text className="text-base font-bold dark:text-white">{day}</Text>
            <TouchableOpacity onPress={() => setDay((d) => (d > 1 ? d - 1 : 31))}>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#84cc16" />
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <TouchableOpacity onPress={() => changeMonth(1)}>
              <MaterialIcons name="keyboard-arrow-up" size={24} color="#84cc16" />
            </TouchableOpacity>
            <Text className="text-base font-bold dark:text-white">{month}</Text>
            <TouchableOpacity onPress={() => changeMonth(-1)}>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#84cc16" />
            </TouchableOpacity>
          </View>

          <View className="items-center">
            <TouchableOpacity onPress={() => setYear((y) => y + 1)}>
              <MaterialIcons name="keyboard-arrow-up" size={24} color="#84cc16" />
            </TouchableOpacity>
            <Text className="text-base font-bold dark:text-white">{year}</Text>
            <TouchableOpacity onPress={() => setYear((y) => y - 1)}>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="#84cc16" />
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-sm font-medium dark:text-white mb-2">Berat Badan</Text>
        <View className="flex-row items-center border border-lime-400 rounded-xl px-4 mb-4">
          <TextInput
            placeholder="Masukkan Berat..."
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => handleTextChange(text, setWeight)}
            className="flex-1 dark:text-white"
          />
          <Text className="text-sm font-semibold text-lime-500">Kg</Text>
        </View>

        <Text className="text-sm font-medium dark:text-white mb-2">Tinggi Badan</Text>
        <View className="flex-row items-center border border-lime-400 rounded-xl px-4 mb-6">
          <TextInput
            placeholder="Masukkan Tinggi..."
            placeholderTextColor={colorScheme === 'dark' ? '#9ca3af' : '#6b7280'}
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => handleTextChange(text, setHeight)}
            className="flex-1 dark:text-white"
          />
          <Text className="text-sm font-semibold text-lime-500">Cm</Text>
        </View>

      </ScrollView>

      <Text className="text-center text-xs text-gray-400 mb-4">
        Informasi digunakan untuk menyesuaikan kebutuhan anda
      </Text>

      <Button
          disabled={!checkValue}
          onPress={handleProfileInfoSubmit}
          className={checkValue ? 'mb-6' : 'opacity-50 mb-6'}
      >
          Lanjut
      </Button>
    </View>
  );
}
