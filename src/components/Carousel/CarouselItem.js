import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../themes';

const { width, height } = Dimensions.get('screen');

const CarouselItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <View style={styles.textView}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default CarouselItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: width - 20,
        height: height / 3,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width,
        height: height / 3,
        opacity: 0.7,
    },
    item: {
        color: 'white',
        fontFamily: fonts.primary.bold,
        shadowColor: '#000'
    },
    title: {
        fontFamily: fonts.primary.bold,
        color: colors.white,
        fontSize: 20,
    },
    description: {
        fontFamily: fonts.primary.normal,
        fontSize: 12,
        color: colors.white
    }
})
