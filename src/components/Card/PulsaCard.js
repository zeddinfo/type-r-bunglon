import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../themes';

const { width } = Dimensions.get('screen');

const PulsaCard = ({ onPress, data }) => {
    console.log('item', data);
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ImageBackground source={require('../../assets/images/bg-pulsa.jpg')} imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomRightRadius: 10 }} style={styles.image}>
                <Text style={styles.price}>Rp</Text>
                <Text style={styles.price}>50.000</Text>
            </ImageBackground>
            <View style={styles.poin}>
                <Text style={styles.denom}>{data.harga}</Text>
                <Text style={styles.textPoin}>+10 Poin</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PulsaCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        width: width / 2.3,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
    image: {
        width: width / 2.3,
        height: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignContent: 'center',
        paddingLeft: 10,
    },
    price: {
        fontFamily: fonts.primary.bold,
        color: colors.primary,
        fontSize: 18
    },
    poin: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    denom: {
        fontFamily: fonts.primary.bold,
        color: colors.secondary
    },
    textPoin: {
        color: colors.yellow
    }
})
