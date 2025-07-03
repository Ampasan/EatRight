// components/statistik/MingguanSection.jsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function MingguanSection() {
  const colorScheme = useColorScheme();
  let chartConfig;

  if (colorScheme === "dark") {
    chartConfig = {
      backgroundGradientFrom: '#111827',
      backgroundGradientTo: '#111827',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(132, 204, 22, ${opacity})`,
      labelColor: () => '#fff',
      barPercentage: 0.4,
    };
  } else {
    chartConfig = {
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(132, 204, 22, ${opacity})`,
      labelColor: () => '#000',
      barPercentage: 0.4,
    };
  }

  const data = {
    labels: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
    datasets: [
      {
        data: [1800, 2100, 2000, 1900, 2200, 2000, 1700],
      },
    ],
  };

  return (
    <View>
      {/* Chart Card */}
      <View className="bg-white dark:bg-gray-900 dark:border dark:border-lime-500 rounded-2xl p-4 mb-4 shadow-lg">
        <Text className="font-bold text-lg dark:text-white text-center mb-2">Kalori Mingguan</Text>
        <View className='flex-row justify-center items-center align-middle mb-2'>
          <TouchableOpacity className="mr-2">
            <MaterialIcons name="chevron-left" size={24} color="#84cc16" />
          </TouchableOpacity>
          <Text className="text-xs text-center text-lime-500">15 Juni 2025 - 21 Juni 2025</Text>
          <TouchableOpacity className="ml-2">
            <MaterialIcons name="chevron-right" size={24} color="#84cc16" />
          </TouchableOpacity>
        </View>

        <BarChart
          data={data}
          width={screenWidth - 80} // padding-aware
          height={200}
          chartConfig={chartConfig}
          showBarTops={false}
          fromZero
          style={{ borderRadius: 8 }}
          yAxisLabel={''}
          yAxisSuffix={''}
        />
      </View>

      <View className='flex-row justify-between'>
        <Image
          source={require('../../assets/images/ai/helzy.png')}
          className="w-12 h-12 mr-3"
        />
        <View className="bg-white dark:bg-gray-900 dark:border dark:border-lime-500 rounded-2xl p-4 w-[80vw] shadow-lg">
          <Text className="text-lime-500 font-semibold mb-1">Hasil Analisis</Text>
          <Text className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            Variasi kalori cukup besar dari hari ke hari, dengan selisih hampir 800 Kcal antara hari tertinggi dan terendah, hanya Kamis dan Jumat yang menunjukkan konsistensi.
          </Text>

          <Text className="text-lime-500 font-semibold mb-1">Saran</Text>
          <Text className="text-sm font-semibold dark:text-white mb-1">1. Stabilkan Asupan Harian</Text>
          <Text className="text-sm text-gray-600 dark:text-gray-300 ps-4">
            Sabtu & Minggu cenderung kurang stabil. Sabtu sangat rendah, Minggu lebih tinggi. Bisa jadi karena perubahan rutinitas atau kebiasaan makan di akhir pekan. Tetap jaga pola makan walau sedang libur.
          </Text>
          <Text className="text-sm font-semibold dark:text-white mb-1">2. Perhatikan Pola Hari Libur</Text>
          <Text className="text-sm text-gray-600 dark:text-gray-300 ps-4">
            Usahakan asupan kalori lebih konsisten, misalnya dalam rentang ≤200 Kcal dari target harian. Perbedaan besar bisa memengaruhi metabolisme dan energi harian.
          </Text>
        </View>
      </View>
    </View>
  );
}
