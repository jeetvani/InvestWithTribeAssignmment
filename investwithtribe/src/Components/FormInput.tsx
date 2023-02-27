import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

interface FormInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    disabled: boolean;
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChangeText, disabled }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <View style={styles.container}>
            <TextInput
                editable={!disabled}
                value={value}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={[styles.input, isFocused && styles.focusedInput]}
                placeholder={label}
            />
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 8,
        fontSize: 16,
        color: '#333',
    },
    focusedInput: {
        borderColor: '#007aff',
    },
    label: {
        position: 'absolute',
        left: 12,
        top: 8,
        fontSize: 16,
        color: '#999',
    },
    focusedLabel: {
        top: -12,
        fontSize: 12,
        color: '#007aff',
    },
});

export default FormInput;
