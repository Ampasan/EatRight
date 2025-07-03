// components/statistik/HarianSection.jsx
import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import Macro from './Macro';
import MealCard from './MealCard';

export default function HarianSection() {
  const colorScheme = useColorScheme();

  return (
    <View>
      <View className="bg-white dark:bg-gray-900 dark:border dark:border-lime-500 rounded-2xl p-4 mb-4 shadow-md">
        <View className="flex-row justify-between items-center mb-4">
          <View className='flex-col'>
            <Text className="text-lg font-bold dark:text-white">Total Kalori (kcal)</Text>
            <Text className="text-gray-500 mb-1">21 Juni 2025</Text>
            <Text className="text-3xl font-bold dark:text-white">1350 <Text className="text-base font-medium">kcal</Text></Text>
          </View>

          <View className="w-24 h-24">
            <CircularProgress
              value={1350}
              key={2200}
              maxValue={2200}
              radius={40}
              valuePrefix={'850'}
              valueSuffix={' left'}
              progressValueStyle={{ display: 'none' }}
              inActiveStrokeWidth={5}
              inActiveStrokeColor={"#bef264"}
              activeStrokeWidth={10}
              activeStrokeColor={'#84cc16'}
              {...(colorScheme === 'dark' ? {
                valuePrefixStyle: {...{ fontSize: 16, color: '#fff', alignSelf: 'flex-start', display: 'flex' }}
              } : {
                valuePrefixStyle: {...{ fontSize: 16, color: '#000', alignSelf: 'flex-start', display: 'flex' }} }
              )}
              {...(colorScheme === 'dark' ? {
                valueSuffixStyle: {...{ fontSize: 12, color: '#fff', alignSelf: 'flex-end', display: 'flex' }}
              } : {
                valueSuffixStyle: {...{ fontSize: 12, color: '#000', alignSelf: 'flex-end', display: 'flex' }} }
              )}
            />
          </View>
        </View>

        <View className="h-1 bg-lime-400 my-3" />

        <Text className="font-semibold text-gray-500 ps-1 mb-3">Makronutrien</Text>
        <View className="flex-row flex-wrap justify-between items-center">
          <Macro label="Karbohidrat" value="169" maxValue="275" percent={61.45} />
          <Macro label="Protein" value="68" maxValue="110" percent={61.82} />
          <Macro label="Lemak" value="45" maxValue="73" percent={61.64} />
        </View>
      </View>

      <MealCard
        icon={require('../../assets/images/foods/statistics/egg.png')}
        title="Sarapan"
        consumed={340}
        target={500}
        foods={[{ name: 'Berry Yogurt With Oat', kcal: 340, detail: '1 Pcs 300 g' }]} />

      <MealCard
        icon={require('../../assets/images/foods/statistics/lettuce.png')}
        title="Makan Siang"
        consumed={540}
        target={750}
        foods={[]} />

      <MealCard
        icon={require('../../assets/images/foods/statistics/meat.png')}
        title="Makan Malam"
        consumed={470}
        target={600}
        foods={[]} />
    </View>
  );
}
