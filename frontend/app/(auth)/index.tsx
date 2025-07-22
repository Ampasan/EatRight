import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Button from '@/components/Button';

export default function Index() {
  return (
    <>
      <Image
        source={require('@/assets/images/landing.png')}
        className='w-full h-[55%] rounded-t-2xl'
        resizeMode="cover"
      />

      <View className='flex-1 mt-[-20px] mb-[-3] mx-[-3px] rounded-t-3xl border-2 border-lime-500 p-7 justify-between dark:bg-gray-900 bg-white'>
        <Text className='text-2xl font-bold dark:text-white'>
          Selamat Datang di <Text className='color-lime-500'>EatRight</Text>
        </Text>

        <Text className='text-xl font-semibold dark:text-white'>
          Solusi Cerdas untuk Gaya Hidup Sehat
        </Text>

        <Text className='text-l font-normal dark:text-slate-300 text-gray-900'>
          Nikmati kemudahan membeli makanan sehat yang lezat dan bergizi langsung dari ponselmu.
        </Text>

        <Text className='text-l font-normal dark:text-slate-300 text-gray-900'>
          Dengan fitur scan makanan dan penghitungan kalori, kamu bisa lebih mudah mengatur asupan harianmu.
        </Text>

        <View className='flex-row mt-12 mb-2 items-center justify-center'>
          <Text className='text-sm dark:text-slate-400 text-gray-600'>Sudah Memiliki Akun EatRight?</Text>
          <TouchableOpacity onPress={() => router.push('./signin')} className='ml-1'>
            <Text className='text-sm font-bold text-lime-500'> Login Here!</Text>
          </TouchableOpacity>
        </View>

        <Button onPress={() => router.push('/(auth)/goalselection')} className={undefined}>
          Mulai
        </Button>
      </View>
    </>
  );
};
