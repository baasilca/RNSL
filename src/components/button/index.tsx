import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

function Button({ label, onPress }: { label: string, onPress?: any }) {
    return (
        <TouchableOpacity style={{
            backgroundColor: "#754cf1",
            marginHorizontal: 24,
            marginTop: "auto",
            padding: 15,
            borderRadius: 10
        }}
        onPress={onPress}
        >
            <Text style={{
                color: "#fff",
                textAlign: "center"
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default Button;