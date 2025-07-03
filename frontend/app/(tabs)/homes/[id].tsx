// app/tabs/home/[id].tsx
import React, { useState} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import NutritionTag from '@/components/home/NutritionTag';
import ReadMore from '@fawazahmed/react-native-read-more';

export default function ProductDetail() {
    const insets = useSafeAreaInsets();
    const { id } = useLocalSearchParams();
    const router = useRouter();

    const [datas, setDatas] = useState([
        {
            id: '0',
            name: 'Salmon Grill with Asparagus',
            price: 31500,
            calories: 411,
            carbs: '24g',
            protein: '36g',
            fat: '20g',
            description: 'Salmon Panggang dengan Quinoa dan Asparagus. Hidangan lezat dan bergizi yang terdiri dari fillet salmon panggang sempurna, disajikan di atas tumpukan quinoa lembut dan asparagus panggang renyah. Salmon yang kaya akan omega-3.',
            reviewer: 'Albert Kevin',
            image: require('../../../assets/images/foods/home/salmon.png'),
            fav: false,
            count: 1
        },
        {
            id: '1',
            name: 'Chicken Rice with Broccoli',
            price: 27500,
            calories: 480,
            carbs: '45g',
            protein: '38g',
            fat: '16g',
            description: 'Nasi ayam dengan brokoli kukus, merupakan pilihan makan siang sehat yang menggabungkan protein dari dada ayam panggang, karbohidrat kompleks dari nasi putih, dan serat serta vitamin dari brokoli segar. Cocok untuk diet seimbang dan pemenuhan energi harian.',
            reviewer: 'Jess No Limit',
            image: require('../../../assets/images/foods/home/chicken.png'),
            fav: false,
            count: 1
        },
        {
            id: '2',
            name: 'Berry Yogurt with Oat',
            price: 18500,
            calories: 340,
            carbs: '42g',
            protein: '12g',
            fat: '9g',
            description: 'Yogurt rendah lemak dipadukan dengan oat lembut dan campuran buah beri segar. Cemilan bergizi ini cocok untuk sarapan cepat atau kudapan sore, kaya serat, antioksidan, serta mendukung kesehatan pencernaan.',
            reviewer: 'Sandhika Galih',
            image: require('../../../assets/images/foods/home/yogurt.png'),
            fav: false,
            count: 1
        }
    ]);

    const updateFavorite = (id: string, fav: any) => {
        const updatedFavorite = datas.map((data) =>
            data.id === id ? { ...data, fav: fav } : data
        );
        setDatas(updatedFavorite);
    };

    const decrementCounter = (id: string, count: string | number) => {
        const counter = datas.map((data) =>
            data.id === id ? { ...data, count: typeof count === 'number' ? (count - 1) : parseInt(count, 10) } : data
        );
        setDatas(counter);
    };

    const incrementCounter = (id: string, count: string | number) => {
        const counter = datas.map((data) =>
            data.id === id ? { ...data, count: typeof count === 'number' ? (count + 1) : parseInt(count, 10) } : data
        );
        setDatas(counter);
    };


    const data = datas.find((product) => product.id === id);

    if (!data) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: insets.top }}>
                <Text className="text-lg text-gray-700">Produk tidak ditemukan.</Text>
                <TouchableOpacity onPress={() => router.back()} style={{ marginTop: 16 }}>
                    <MaterialIcons name="arrow-back" size={24} color="#84cc16" />
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View className='flex-1 justify-between'>
            <ScrollView
                className="flex-1 bg-gray-50 px-5 pt-4"
                contentContainerStyle={{ paddingTop: insets.top }}
            >
                <View className="flex-row justify-between items-center mb-4">
                    <TouchableOpacity onPress={() => router.back()}>
                        <MaterialIcons name="arrow-back" size={24} color="#84cc16" />
                    </TouchableOpacity>
                    <TouchableOpacity className="flex rounded-2xl bg-lime-500 justify-center items-center p-2">
                        <MaterialIcons name="shopping-cart" size={22} color="white" />
                    </TouchableOpacity>
                </View>

                <Image source={data.image} className="w-48 h-48 self-center mb-4" resizeMode="contain" />

                <View className="bg-white border border-lime-500 rounded-t-[4rem] p-12 mx-[-2rem]">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-2xl w-[50vw] font-bold">{data.name}</Text>
                        <TouchableOpacity
                            className="bg-lime-500 rounded-full p-2"
                            onPress={() => updateFavorite(Array.isArray(id) ? id[0] : id, !data.fav)}
                        >
                            <MaterialIcons name={data.fav ? "favorite" : "favorite-border"} size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <Text className="text-xl mt-3 font-semibold text-gray-700">Rp {data.price.toLocaleString('id-ID')}</Text>

                    <View className="flex-row mt-4">
                        <NutritionTag className={'mr-2'} label="Karbohidrat" value={data.carbs} />
                        <NutritionTag className={'mx-2'} label="Protein" value={data.protein} />
                        <NutritionTag className={'ml-2'} label="Lemak" value={data.fat} />
                    </View>

                    <View className="flex flex-row justify-between items-center pt-4 pb-2 border-b border-lime-500">
                        <Text className="text-lg font-bold">Total Kalori</Text>
                        <Text className="text-2xl font-bold">{data.calories} <Text className="text-sm font-normal">Kcal</Text></Text>
                    </View>

                    <View className="mt-4">
                        <Text className="text-lg font-semibold mb-3">Deskripsi</Text>
                        <ReadMore
                            seeMoreStyle={{ color: "#000", fontWeight: 600 }}
                            seeMoreText='Selengkapnya'
                            seeLessStyle={{ color: "#000", fontWeight: 600 }}
                            seeLessText='Sekurangnya'
                        >
                            {data.description}
                        </ReadMore>
                    </View>

                    <View className="mt-4">
                        <Text className="text-lg font-semibold mb-1">Review</Text>
                        <View className="flex-row items-center">
                            <Image
                                source={require('../../../assets/images/users/albert.png')}
                                className="w-20 h-20 border border-lime-500 rounded-full mr-2"
                            />
                            <View className='flex-col justify-between'>
                                <Text className="text-gray-700">{data.reviewer}</Text>
                                <Text className="text-sm text-lime-500">★★★★★</Text>
                                <Text className="text-xs text-gray-700 w-[65vw]">Mantap Salmonnya gede, rasanya enak gak amis, ngeyangangin banget, terima kasih</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <View className="px-4 py-3 h-[10vh] bg-white border-t-2 border-lime-500 flex-row justify-evenly items-center">
                    <View className="flex-row items-center rounded-3xl bg-lime-500 p-1">
                        <TouchableOpacity onPress={() => decrementCounter(Array.isArray(id) ? id[0] : id, data.count)}>
                            <MaterialIcons name="remove-circle" size={24} color="#fff" />
                        </TouchableOpacity>
                            <Text className="text-normal font-bold px-2 text-white">{data.count}</Text>
                        <TouchableOpacity onPress={() => incrementCounter(Array.isArray(id) ? id[0] : id, data.count)}>
                            <MaterialIcons name="add-circle" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="bg-lime-500 px-4 py-2 rounded-full">
                    <Text className="text-white font-semibold">Masukkan Keranjang</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}
