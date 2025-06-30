import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Icon from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Signin = () => {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 dark:bg-gray-800 bg-slate-100 p-5">
      <TouchableOpacity onPress={() => router.back()} className="mt-5">
          <Icon name="arrow-back" size={24} color="#84cc16" />
      </TouchableOpacity>

      <View className='flex-1 items-center justify-center'>
        <Card className='flex rounded-[4rem] border-2 border-lime-500 p-6 justify-center w-[90%]'>
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

          <View className="flex-row justify-start mt-4 mb-2">
            <Text className="dark:text-slate-300 text-slate-500 font-semibold">Lupa Password?</Text>
            <TouchableOpacity>
                <Text className="text-lime-500 font-bold"> Click Here!</Text>
            </TouchableOpacity>
          </View>

          <Button
              onPress={() => router.replace('/(tabs)/home')}
          >
            Masuk
          </Button>

          <View className="my-5 items-center">
            <Text className="dark:text-slate-300 text-gray-600 font-semibold">Atau</Text>
            <Text className="dark:text-slate-300 text-gray-600 font-semibold">Masuk dengan</Text>
          </View>

          <TouchableOpacity className="flex flex-row justify-center">
            <Image
              source={require('../../assets/images/social/google.png')}
              className='w-10 h-10 mx-2'
              resizeMode="cover"
            />
            <Image
              source={require('../../assets/images/social/twitter.png')}
              className='w-9 h-9 mx-2'
              resizeMode="cover"
            />
            <Image
              source={require('../../assets/images/social/facebook.png')}
              className='w-10 h-10 mx-2'
              resizeMode="cover"
            />
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
};

export default Signin;