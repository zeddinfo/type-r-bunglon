import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../themes';
import Gap from '../Gap';

const { width, height } = Dimensions.get('screen');

const ProductTile = (item) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.data.gambar }} style={styles.image} />
            <Gap height={2} />
            <View style={styles.lokasi}>
                <Icons name="location-pin" color={colors.yellow} size={14} />
                <Gap width={2} />
                <Text style={styles.textLokasi}>{item.data.lokasi}</Text>
            </View>
            <View>
                <Text ellipsizeMode="tail" style={styles.textNama}>{item.data.nama}</Text>
            </View>
            <View style={styles.textTerjual}>
                <Text style={styles.textHarga}>{item.data.harga}</Text>
                <Text style={styles.terjualText}>Terjual {item.data.terjual}</Text>
            </View>
            <View style={styles.textRating}>
                <Icons name="star" color={colors.yellow} />
                <Gap width={2} />
                <Text style={styles.ratingText}>{item.data.rating}</Text>
            </View>
        </View>
    )
}

export default ProductTile

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    lokasi: {
        flexDirection: 'row',
        // alignContent: 'center',
        // alignItems: 'center',
    },
    textLokasi: {
        fontFamily: fonts.primary.normal,
        fontSize: 11,
        color: colors.secondary
    },
    textNama: {
        fontFamily: fonts.primary.bold,
        color: colors.smoothBlack,
        fontSize: 13,
        maxWidth: 120
    },
    textHarga: {
        fontFamily: fonts.primary.bold,
        color: colors.yellow
    },
    textTerjual: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    terjualText: {
        fontFamily: fonts.primary.normal,
        color: colors.smoothBlack,
        fontSize: 10,
        marginTop: 2
    },
    ratingText: {
        fontFamily: fonts.primary.normal,
        fontSize: 10,
    },
    textRating: {
        flexDirection: 'row'
    }
})
