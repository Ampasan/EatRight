import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, useColorScheme, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import ReadMore from '@fawazahmed/react-native-read-more';

export default function Chatbot() {
  const colorScheme = useColorScheme();

  const router = useRouter();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      profile: require('@/assets/images/ai/helzy.png'),
      content: 'Halo! Selamat Datang',
      isProfile: true
    },
    {
      from: 'bot',
      profile: undefined,
      content: 'Perkenalkan... Saya Helzy\nAI yang akan membantumu membuat resep makanan sehat, Strategi diet dan memberikan saran makanan yang sehat dan bergizi',
      isProfile: false
    },
    {
      from: 'bot',
      profile: undefined,
      content: 'Klik icon scan untuk menghitung kalori dan gizi makananmu hanya dengan memotretnya!',
      isProfile: false
    },
    {
      from: 'user',
      profile: require('@/assets/images/users/samantha.png'),
      content: 'Halo, bantu saya menghitung jumlah kalori makanan yang sedang saya makan ya!',
      isProfile: true
    },
    {
      from: 'bot',
      profile: require('@/assets/images/ai/helzy.png'),
      content: 'Baik, klik icon scan untuk mengambil gambar makananmu, atau ingin sebutkan komposisinya secara manual?',
      isProfile: true
    },
    {
      from: 'user',
      profile: require('@/assets/images/users/samantha.png'),
      content: 'Gambar Terkirim',
      isProfile: true,
      isSendImage: true
    },
    {
      from: 'bot',
      profile: require('@/assets/images/ai/helzy.png'),
      content: 'Scanning...',
      isProfile: true
    },
    {
      from: 'bot',
      profile: undefined,
      content: "Berdasarkan gambar yang kamu kirim, berikut hasil yang dapat saya berikan:\n\nTotal Kalori:\nKarbohidrat: 120 gram (480 kcal)\nProtein: 31 gram (165 kcal)\nLemak: 22 gram (198 kcal)\nTotal estimasi kalori: 843 kcal\n\nIni adalah estimasi berdasarkan analisis visual dan komposisi umum makanan serupa. Untuk hasil yang lebih akurat, pastikan pencahayaan baik dan seluruh makanan terlihat jelas di foto. Jika kamu ingin tahu saran menu atau ingin menyesuaikan dengan kebutuhan dietmu, tinggal lanjutkan percakapan ya! 😊",
      isProfile: false
    }
  ]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', content: input, profile: undefined, isProfile: false }]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
    >
      <View className="flex-1 bg-[#F6F9FF] dark:bg-gray-800 pt-12">
        <View className="flex-row items-center justify-between px-4 mb-2">
          <TouchableOpacity onPress={() => router.replace('/(tabs)/homes/home')}>
              <MaterialIcons name="arrow-back" size={24} color="#84cc16" />
          </TouchableOpacity>
          <View className="flex-col items-center">
            <Text className="text-lime-600 font-bold text-lg">Helzy</Text>
            <Text className="text-gray-400 text-sm">(chatbot)</Text>
          </View>
          <View className="w-10 h-10" />
        </View>

        <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
          {messages.map((msg, idx) => (
            <View key={idx} className={`my-2 ${msg.from === 'user' ? 'items-end flex-row-reverse' : 'items-start flex-row'}`}>
              {msg.isProfile ? (
                <Image
                  source={msg.profile}
                  className={`w-10 h-10 rounded-full`}
                />
                ) : (
                <View
                  className="w-10 h-10 rounded-full"
                />
              )}
              {msg.isSendImage ? (
                <View
                  className={`flex-row justify-center items-center p-3 max-w-[50vw]`}
                >
                  <Text className={`font-semibold ${msg.from === 'user' ? 'text-lime-500' : 'text-black'}`}>{msg.content}</Text>
                  <MaterialCommunityIcons name={"check-all"} size={18} color={"#84cc12"} className={`ms-2`} />
                </View>
              ) : (
                <View
                  className={`p-3 rounded-xl ${
                    msg.from === 'user' ? 'bg-lime-500 me-2' : 'border border-lime-500 bg-white dark:bg-gray-900 ms-2'
                  } max-w-[70vw]`}
                >
                  <ReadMore
                      seeMoreStyle={{ color: "#84cc16", fontWeight: 600 }}
                      seeMoreText='Baca Selengkapnya...'
                      seeLessStyle={{ color: "#84cc16", fontWeight: 600 }}
                      seeLessText='Sekurangnya'
                      numberOfLines={5}
                      {...(colorScheme === 'dark' ? (
                          msg.from === 'user' ? {
                            style: {...{ color: "#fff", textAlign: "right" }}
                          } : {
                            style: {...{ color: "#fff" }} 
                          }
                        ) : (
                          msg.from === 'user' ? {
                            style: {...{ color: "#fff", textAlign: "right" }}
                          } : {
                            style: {...{ color: "#000" }} 
                          }
                        )
                      )}
                  >
                      {msg.content}
                  </ReadMore>
                </View>
              )}
            </View>
          ))}
        </ScrollView>

        <View className="flex-row items-center justify-between px-4 py-3">
          <TouchableOpacity onPress={() => router.push('/chatbots/camera')} className="p-2">
            <MaterialCommunityIcons name="line-scan" size={32} color="#7ED321" />
          </TouchableOpacity>
          <View className="flex-row items-center bg-white dark:bg-gray-900 rounded-full px-4 border-2 border-lime-500 shadow-sm w-[85%]">
            <TextInput
              placeholder="Ketik disini..."
              value={input}
              onChangeText={setInput}
              className="flex-1 justify-between dark:text-white px-2"
              {...(colorScheme === 'dark' ? { placeholderTextColor: "#fff" } : { placeholderTextColor: "#000" } )}
            />
            <TouchableOpacity onPress={sendMessage} className="p-1">
              <FontAwesome name="send" size={18} color="#7ED321" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
