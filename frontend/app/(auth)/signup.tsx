import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import TextInput from '@/components/UnderlineTextInput';
import Button from '@/components/Button';
import Card from '@/components/Card';
import CheckBox from '@/components/CheckBox';
import Icon from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AltLoginTray from '@/components/AltLoginTray';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Signup = () => {
  const insets = useSafeAreaInsets();

  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValue, setCheckValue] = useState(false);

  useEffect(() => {
    if (name && email && password && isChecked) {
      setCheckValue(true);
    } else {
      setCheckValue(false);
    }
  }, [name, email, password, isChecked]);

  const handleSignup = async () => {
    if (!name|| !email || !password) {
      Alert.alert('Login Gagal', 'Email dan password wajib diisi');
      return;
    }

    try {
      const fullName = await AsyncStorage.getItem('userName');
      const gender = await AsyncStorage.getItem('userGender');
      const birthDate = await AsyncStorage.getItem('userBirthDate');
      const weight = await AsyncStorage.getItem('userWeight');
      const height = await AsyncStorage.getItem('userHeight');
      const goal = await AsyncStorage.getItem('selectedGoal');
      const allergies = await AsyncStorage.getItem('selectedAllergies');

      console.log(
        "AsyncStorage Data: ",
        fullName,
        gender,
        birthDate,
        weight,
        height,
        goal,
        allergies
      );

      const response = await axios.post('http://192.168.0.101:8000/auth/register', {
        level_id: 1,
        user_name: name,
        user_email: email,
        user_password: password,
        intro_name: fullName || "Test",
        gender: gender || "Unknown",
        birth_date: birthDate || "2000-01-01",
        weight: weight || "0",
        height: height || "0",
        user_goal: goal || "Maintain",
        allergies: [],
      });

      const { user } = response.data;

      console.log('User: ', user);

      // Navigate to home
      router.replace('/(auth)/otp');
    } catch (error: any) {
      console.error('Login error:', error);
      Alert.alert('Login Gagal', error?.response?.data?.message || 'Terjadi kesalahan saat login');
    }
  }

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 justify-between dark:bg-gray-800 bg-slate-100 p-5">
      <TouchableOpacity onPress={() => router.back()} className="mt-5">
          <Icon name="arrow-back" size={24} color="#84cc16" />
      </TouchableOpacity>

      <Card className='rounded-[4rem] border-2 border-lime-500 p-6 justify-center'>
        <Text className="text-3xl font-bold dark:color-white text-center mb-8">Signup</Text>

        <Text className="text-lg font-bold dark:color-white">Nama</Text>
        <TextInput
          inputMode={'text'}
          secureTextEntry={false}
          value={name}
          onChangeText={setName}
        />

        <Text className="text-lg font-bold dark:color-white mt-4">Email</Text>
        <TextInput
          inputMode={'email'}
          secureTextEntry={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text className="text-lg font-bold dark:color-white mt-4">Password</Text>
        <TextInput
          inputMode={'text'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <CheckBox
          label="Saya menyetujui aturan dan kebijakan privasi aplikasi"
          checked={isChecked}
          onChange={setIsChecked}
        />

        <Button
          disabled={!checkValue}
          onPress={handleSignup}
          className={checkValue ? '' : 'opacity-50'}
        >
          Masuk
        </Button>

        <View className="flex-row justify-center mt-4">
          <Text className="dark:text-slate-300 text-slate-500 font-semibold">Sudah Memiliki Akun?</Text>
          <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text className="text-lime-500 font-bold"> Click Here!</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-5 mt-2 items-center">
          <Text className="dark:text-slate-300 text-gray-600 font-semibold">Atau</Text>
          <Text className="dark:text-slate-300 text-gray-600 font-semibold">Masuk dengan</Text>
        </View>

        <AltLoginTray />
      </Card>

      <View className="w-10 h-10" />
    </View>
  )
}

export default Signup