import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import styles from './style';
import StyleButton from '../StyleButton/index'
import { TouchableOpacity } from 'react-native-gesture-handler';

const CarItem = (props) => {

    const { name, tagline, image, taglineCTA } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground source={image} style={styles.image} />

            <View style={styles.titles}>

                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}&nbsp;
                    <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <StyleButton
                    type="primary"
                    content={"custom order"}
                    onPress={() => {
                        console.warn("hello world 1")
                    }}
                />
                <StyleButton
                    type="secondary"
                    content={"inventory"}
                    onPress={() => {
                        console.warn("hello world 2")
                    }}
                />
            </View>

        </View>

    )
}

export default CarItem;