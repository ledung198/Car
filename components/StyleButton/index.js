import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyleButton = (props) => {
    const { type, content, onPress } = props;

    // const type = props.type;
    const backgroundColor = type === "primary" ? '#171A20' : '#FFFFFFA6';
    const textColor = type === "primary" ? '#FFFFFF' : '#171A20';
    // const content = props.content;
    // const onPress = props.onPress;



    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>

    )
}

export default StyleButton;