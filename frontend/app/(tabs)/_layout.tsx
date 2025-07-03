// File: app/(tabs)/_layout.jsx
import { Tabs, useSegments } from 'expo-router';
import Icon from '@expo/vector-icons/MaterialIcons';
import { View, Text, useColorScheme } from 'react-native';
import { StyledTabs } from '@/components/navigation/tabs';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const segment = useSegments();
    const page = segment[segment.length - 1];
    const pagesToHideTabBar = ['[id]', 'chatbots', 'chatbot', 'camera'];

    return (
        <StyledTabs
            tabBarClassName={`bg-white dark:bg-slate-900 pt-3 h-[8rem] ${pagesToHideTabBar.includes(page) ? 'hidden' : 'flex'}`}
            screenOptions={{
                tabBarActiveTintColor: '#7ED957',
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }
            }}
        >
            <Tabs.Screen
                name="homes"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View className="items-center justify-center">
                            {focused ? (
                                <View className='h-2 w-5 mb-2 border-2 border-lime-500 bg-lime-500 overflow-hidden rounded-b-full' />
                            ) : (
                                <View className='h-2 w-5 mb-2 border-0 overflow-hidden rounded-b-full' />
                            )}
                            <Icon name="home" size={focused ? 28 : 24} color={color} />
                            <Text className={`text-[0.5rem] ${focused ? 'text-lime-500' : 'text-gray-400'}`}>
                                Beranda
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="statistics"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View className="items-center justify-center">
                            {focused ? (
                                <View className='h-2 w-5 mb-2 border-2 border-lime-500 bg-lime-500 overflow-hidden rounded-b-full' />
                            ) : (
                                <View className='h-2 w-5 mb-2 border-0 overflow-hidden rounded-b-full' />
                            )}
                            <Icon name="bar-chart" size={focused ? 28 : 24} color={color} />
                            <Text className={`text-[0.5rem] ${focused ? 'text-lime-500' : 'text-gray-400'}`}>
                                Statistik
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="chatbots"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View className="items-center justify-center w-[20%] pb-8">
                            <View className='h-20 w-20 border-2 border-lime-500 bg-white overflow-hidden rounded-full items-center justify-center'>
                                <View className='p-2 bg-lime-500 overflow-hidden rounded-full items-center justify-center'>
                                    <Icon
                                        name="center-focus-strong"
                                        size={42}
                                        {...(colorScheme === 'dark' ? { color: "#fff" } : { color: "#000" } )}
                                    />
                                </View>
                            </View>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="transaction"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View className="items-center justify-center">
                            {focused ? (
                                <View className='h-2 w-5 mb-2 border-2 border-lime-500 bg-lime-500 overflow-hidden rounded-b-full' />
                            ) : (
                                <View className='h-2 w-5 mb-2 border-0 overflow-hidden rounded-b-full' />
                            )}
                            <Icon name="receipt" size={focused ? 28 : 24} color={color} />
                            <Text className={`text-[0.5rem] ${focused ? 'text-lime-500' : 'text-gray-400'}`}>
                                Pesanan
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <View className="items-center justify-center">
                            {focused ? (
                                <View className='h-2 w-5 mb-2 border-2 border-lime-500 bg-lime-500 overflow-hidden rounded-b-full' />
                            ) : (
                                <View className='h-2 w-5 mb-2 border-0 overflow-hidden rounded-b-full' />
                            )}
                            <Icon name="person" size={focused ? 28 : 24} color={color} />
                            <Text className={`text-[0.5rem] ${focused ? 'text-lime-500' : 'text-gray-400'}`}>
                                Profil
                            </Text>
                        </View>
                    ),
                }}
            />
        </StyledTabs>
    );
}
