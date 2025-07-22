import { View } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Introduction from '@/components/chatbot/Introduction';
import Chatbot from '@/components/chatbot/Chatbot';

export default function ChatbotScreen() {
  const [isIntroSeen, setIsIntroSeen] = useState<null | boolean>(null);

  useEffect(() => {
    const check = async () => {
      const val = await AsyncStorage.getItem('scanIntroSeen');
      setIsIntroSeen(val === 'true');
    };
    check();
  }, []);

  if (isIntroSeen === null) {
    return <View className='flex-1 bg-white dark:bg-gray-900' />;
  }

  return <View className='flex-1 bg-white dark:bg-gray-900'>
    {isIntroSeen ? <Chatbot /> : <Introduction />}
  </View>;
}