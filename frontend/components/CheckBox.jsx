import { TouchableOpacity, View, Text } from 'react-native';
import Checkbox from 'expo-checkbox';

const CheckBox = ({ label, checked, onChange }) => {
    return (
        <TouchableOpacity
            onPress={() => onChange(!checked)}
            className={`flex-row items-center mt-3`}
        >
            <Checkbox 
                style={{ borderColor: '#84cc16', borderWidth: 2, borderRadius: 9999 }}
                value={checked}
                onValueChange={onChange}
                color={checked ? '#84cc16' : undefined}
            />

            <Text className={`text-sm dark:text-slate-300 ms-3`}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default CheckBox;