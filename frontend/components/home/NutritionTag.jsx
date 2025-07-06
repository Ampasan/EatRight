import { View, Text } from 'react-native';

const NutritionTag = ({ label, value, className }) => (
    <View className={`flex-1 justify-center bg-white dark:bg-gray-900 border border-lime-500 rounded-lg shadow-md px-3 py-2 ${className}`}>
        <Text className="text-xs font-semibold text-lime-500">{label}</Text>
        <Text className="text-sm font-bold text-gray-500 dark:text-gray-300">{value}</Text>
    </View>
);

export default NutritionTag;

