import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import AltLoginTray from '@/components/AltLoginTray';
import TextInput from '@/components/UnderlineTextInput';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Icon from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValue, setCheckValue] = useState(false);

  useEffect(() => {
    if (email != '' && password != '') {
      setCheckValue(true);
    } else {
      setCheckValue(false);
    }
    console.log(email, password);
  }, [email, password]);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Login Gagal', 'Email dan password wajib diisi');
      return;
    }

    try {
      const response = await axios.post('http://192.168.0.101:8000/auth/login', {
        user_email: email,
        user_password: password,
      });

      const { token, user } = response.data;

      // Save token (optional: also save user data)
      await AsyncStorage.setItem('authToken', token);

      console.log(token);

      // Navigate to home
      router.replace('/(auth)/otp');
    } catch (error: any) {
      console.error('Login error:', error);
      Alert.alert('Login Gagal', error?.response?.data?.message || 'Terjadi kesalahan saat login');
    }
  };


  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 justify-between dark:bg-gray-800 bg-slate-100 p-5">
      <TouchableOpacity onPress={() => router.back()} className="mt-5">
          <Icon name="arrow-back" size={24} color="#84cc16" />
      </TouchableOpacity>

      <Card className='rounded-[4rem] border-2 border-lime-500 p-6 justify-center'>
        <Text className="text-3xl font-bold dark:color-white text-center mb-8">Login</Text>

        <Text className="text-lg font-bold dark:color-white">Email</Text>
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

        <View className="flex-row justify-start mt-5 mb-3">
          <Text className="dark:text-slate-300 text-slate-500 font-semibold">Lupa Password?</Text>
          <TouchableOpacity>
              <Text className="text-lime-500 font-bold"> Click Here!</Text>
          </TouchableOpacity>
        </View>

        <Button
          disabled={!checkValue}
          onPress={handleLogin}
          className={checkValue ? '' : 'opacity-50'}
        >
          Masuk
        </Button>

        <View className="my-5 items-center">
          <Text className="dark:text-slate-300 text-gray-600 font-semibold">Atau</Text>
          <Text className="dark:text-slate-300 text-gray-600 font-semibold">Masuk dengan</Text>
        </View>

        <AltLoginTray />
      </Card>

      <View className="w-10 h-10" />
    </View>
  );
};

export default Signin;