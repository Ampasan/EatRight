// File: app/(tabs)/_layout.jsx
import { Tabs } from 'expo-router';
import Icon from '@expo/vector-icons/MaterialIcons';
import { View, Text } from 'react-native';

export default function TabLayout() {
    return (
        <Tabs
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: '#7ED957',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle: {
            height: 70,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: '#000',
            shadowOpacity: 0.05,
            shadowOffset: { width: 0, height: -2 },
            shadowRadius: 4,
            elevation: 5,
            },
            tabBarIcon: ({ color, focused }) => {
            let iconName;

            switch (route.name) {
                case 'index':
                iconName = 'home';
                break;
                case 'statistik':
                iconName = 'bar-chart';
                break;
                case 'scan':
                iconName = 'center-focus-strong';
                break;
                case 'pesanan':
                iconName = 'receipt';
                break;
                case 'profil':
                iconName = 'person';
                break;
                default:
                iconName = 'circle';
            }

            return (
                <View className="items-center justify-center">
                <Icon name={'circle'} size={focused ? 28 : 24} color={color} />
                <Text
                    className={`text-xs ${focused ? 'text-lime-500' : 'text-gray-400'}`}
                >
                    {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
                </Text>
                </View>
            );
            },
        })}
        >
        <Tabs.Screen name="index" options={{ headerShown: false }} />
        <Tabs.Screen name="statistik" options={{ headerShown: false }} />
        <Tabs.Screen name="scan" options={{ headerShown: false }} />
        <Tabs.Screen name="pesanan" options={{ headerShown: false }} />
        <Tabs.Screen name="profil" options={{ headerShown: false }} />
        </Tabs>
    );
}
