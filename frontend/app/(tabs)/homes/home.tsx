// File: app/(tabs)/index.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, useColorScheme } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function Home() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const [counters, setCounters] = useState({
    counterA: 1,
    counterB: 1,
    counterC: 1,
  });

  const [favorites, setFavorites] = useState({
    favoriteA: false,
    favoriteB: false,
    favoriteC: false,
  });

  const [selectedFilter, setSelectedFilter] = useState('Semua');

  const menuFilters = ['Semua', 'Terlaris', 'Terbaru'];

  const foodList = [
    {
      name: 'Salmon Grill with Asparagus',
      price: 'Rp 31.500',
      reviews: '30 Review',
      image: require('../../../assets/images/foods/home/salmon.png'),
      counter: 'counterA' as 'counterA',
      count: counters.counterA,
      favorite: 'favoriteA' as 'favoriteA',
      fav: favorites.favoriteA
    },
    {
      name: 'Chicken Rice Broccoli',
      price: 'Rp 28.000',
      reviews: '35 Review',
      image: require('../../../assets/images/foods/home/chicken.png'),
      counter: 'counterB' as 'counterB',
      count: counters.counterB,
      favorite: 'favoriteB' as 'favoriteB',
      fav: favorites.favoriteB
    },
    {
      name: 'Berry Yogurt with Oat',
      price: 'Rp 18.000',
      reviews: '5 Review',
      image: require('../../../assets/images/foods/home/yogurt.png'),
      counter: 'counterC' as 'counterC',
      count: counters.counterC,
      favorite: 'favoriteC' as 'favoriteC',
      fav: favorites.favoriteC
    }
  ];

  const decrementCounter = (counterName: 'counterA' | 'counterB' | 'counterC') => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [counterName]: prevCounters[counterName] > 1 ? prevCounters[counterName] - 1 : 0,
    }));
  };

  const incrementCounter = (counterName: 'counterA' | 'counterB' | 'counterC') => {
    setCounters((prevCounters) => ({
      ...prevCounters,
      [counterName]: prevCounters[counterName] + 1,
    }));
  };

  const handleFavorite = (favoriteName: 'favoriteA' | 'favoriteB' | 'favoriteC') => {
    setFavorites((prevFavorite) => ({
      ...prevFavorite,
      [favoriteName]: !prevFavorite[favoriteName],
    }));
  };

  return (
    <ScrollView
      className="flex-1 bg-[#F7F9FC] dark:bg-gray-800 px-5"
      contentContainerStyle={{ paddingTop: insets.top }}
    >
      <Text className="text-2xl font-bold text-lime-600 mt-6">Good Morning, Samantha!</Text>

      <View className='flex-row items-center justify-between mt-4'>
        <View className="flex-row items-center bg-white dark:bg-gray-900 rounded-full px-4 border-2 border-lime-500 shadow-sm w-[75%]">
          <Feather name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search..."
            className="flex-1 px-2 text-sm text-black dark:text-white"
            {...(colorScheme === 'dark' ? { placeholderTextColor: "#fff" } : { placeholderTextColor: "#000" } )}
          />
        </View>
        <TouchableOpacity className="flex rounded-2xl bg-lime-500 justify-center items-center p-2">
          <MaterialIcons name="notifications-none" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity className="flex rounded-2xl bg-lime-500 justify-center items-center p-2">
          <MaterialIcons name="shopping-cart" size={22} color="white" />
        </TouchableOpacity>
      </View>

      <Text className="font-bold text-xl dark:text-white mt-6">Special Offers</Text>
      <View className='flex flex-row items-center w-100 mt-3'>
        <Image
          source={require('../../../assets/images/foods/home/salad.png')}
          className="w-36 h-36 rounded-full z-10"
        />
        <View className="flex-row items-center bg-white dark:bg-gray-900 dark:border dark:border-lime-500 rounded-xl ms-[-3rem] p-3 shadow-lg w-[75%]">
          <View className="flex-1 ps-12">
            <Text className="text-sm text-lime-500 font-semibold">20% Off</Text>
            <Text className="font-bold dark:text-white">Regular Salad</Text>
            <Text className="text-sm text-lime-500">★★★★★</Text>
            <Text className="text-sm text-gray-500">55 Review</Text>
          </View>
          <View className="flex flex-col items-end justify-between">
            <View className='flex mt-[-1.5rem] pb-6'>
              <MaterialIcons name="bookmark" size={28} color="#84cc16" />
            </View>
            <View className='flex items-end'>
              <Text className="text-sm line-through text-gray-400">Rp 21.000</Text>
              <Text className="font-bold text-black dark:text-white">Rp 16.800</Text>
            </View>
          </View>
        </View>
      </View>

      <Text className="font-bold text-xl dark:text-white mt-6">Menu</Text>
        <View className="flex-row justify-between items-center mt-3 mx-16">
        {menuFilters.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setSelectedFilter(item)} className="items-center">
            <Text
              className={`font-semibold ${selectedFilter === item ? 'text-lime-500' : 'text-gray-400'}`}
            >
              {item}
            </Text>
            {selectedFilter === item ? (<View className="w-2 h-2 rounded-3xl bg-lime-500 mt-1" />) : (<View className="w-2 h-2 rounded-full bg-transparent mt-1" />)}
          </TouchableOpacity>
        ))}
      </View>

      {/* Food Cards */}
      <View className="flex-1 flex-row flex-wrap justify-between mt-5">
        {foodList.map((item, idx) => (
          <TouchableOpacity key={idx} onPress={() => router.push({ pathname: "/(tabs)/homes/[id]", params: { id: idx.toString() } })} className="w-[40%] mb-4 mx-4">
            <TouchableOpacity className="absolute left-3 top-3 z-20 bg-lime-500 rounded-full p-1" onPress={() => handleFavorite(item.favorite)}>
              <MaterialIcons name={item.fav ? "favorite" : "favorite-border"} size={20} color="#fff" />
            </TouchableOpacity>
            <Image source={item.image} className="h-28 w-28 rounded-full mt-8 mb-[-3rem] self-center z-10" resizeMode="cover" />
            <View className='h-[26vh] bg-white dark:bg-gray-900 dark:border dark:border-lime-500 rounded-xl pt-12 p-3 shadow-md'>
              <Text className="font-bold text-sm dark:text-white mb-2">{item.name}</Text>
              <Text className="text-sm font-bold dark:text-white mb-4">{item.price}</Text>
              <View className="flex-row justify-center mb-4">
                <View className="flex-row items-center rounded-3xl bg-lime-500 p-1">
                  <TouchableOpacity onPress={() => decrementCounter(item.counter)}>
                    <MaterialIcons name="remove-circle" size={18} color="#fff" />
                  </TouchableOpacity>
                  <Text className="text-sm font-bold px-2 text-white">{item.count}</Text>
                  <TouchableOpacity onPress={() => incrementCounter(item.counter)}>
                    <MaterialIcons name="add-circle" size={18} color="#fff" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row justify-between mb-2">
                <View className='flex-col'>
                  <View className='flex-row mb-1'>
                    <MaterialIcons name="star" size={14} color="#7ED957" />
                    <MaterialIcons name="star" size={14} color="#7ED957" />
                    <MaterialIcons name="star" size={14} color="#7ED957" />
                    <MaterialIcons name="star" size={14} color="#7ED957" />
                    <MaterialIcons name="star" size={14} color="#7ED957" />
                  </View>
                  <Text className="text-xs text-gray-500 ml-1">{item.reviews}</Text>
                </View>
                <TouchableOpacity className="flex-row items-center justify-center bg-lime-500 p-2 rounded-lg">
                  <MaterialIcons name="shopping-cart" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
