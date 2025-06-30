import React from 'react';
import { TextInput as RNTextInput } from 'react-native';

const TextInput = ({ inputMode, secureTextEntry, value, onChangeText, ...props }) => {
    return (
        <RNTextInput
            {...props}
            inputMode={inputMode || 'text'}
            secureTextEntry= {secureTextEntry || false}
            value={value || ''}
            onChangeText={onChangeText || (() => {})}
            className={`border-b-2 border-lime-500 text-lg dark:text-white p-2 bg-transparent`}
        />
    );
};

export default TextInput;