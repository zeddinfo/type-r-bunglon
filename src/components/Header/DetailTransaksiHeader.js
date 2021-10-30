import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../themes'
import Gap from '../Gap'

const DetailTransaksiHeader = ({ type, denom, harga }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/icons/menu/ic-pulsa.png')} style={styles.image} />
                <Gap width={10} />
                <Text style={styles.title}>{type}</Text>
            </View>
            <Text style={styles.denom}>{denom}</Text>
        </View>
    )
}

export default DetailTransaksiHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 35,
        height: 35,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: fonts.primary.normal
    },
    denom: {
        fontFamily: fonts.primary.bold,
        color: colors.secondary,
    }
})
