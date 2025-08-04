import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import "../global.css";

export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  // AsyncStorage.clear();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        // const expiry = await AsyncStorage.getItem('token_expiry');
        const now = Date.now();

        if (token) {
          router.replace('/(tabs)/homes/home');
        } else {
          router.replace('/(auth)');
        }
      } catch (err) {
        router.replace('/(auth)');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white dark:bg-gray-900">
        <ActivityIndicator size="large" color="#7ED957" />
      </View>
    );
  }

  return null;
}
