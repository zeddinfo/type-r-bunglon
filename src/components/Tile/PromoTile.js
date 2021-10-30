import React from 'react'
import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors, fonts } from '../../themes';
import { BtnCircle } from '../Button';

const { width, height } = Dimensions.get('screen');

const PromoTile = (item) => {
    return (
        <ImageBackground source={{ uri: item.data.image }} style={styles.image} imageStyle={{ borderRadius: 13, }}>
            <View style={styles.info}>
                <View style={styles.tileInfo}>
                    <Text style={styles.title}>{item.data.title}</Text>
                    <Text style={styles.description}>{item.data.description}</Text>
                </View>
                <BtnCircle />
                {/* <Text style={styles.description}>{item.data.description}</Text> */}
            </View>
            {/* <Image source={{ uri: item.data.image }} style={styles.image} /> */}
        </ImageBackground>
    )
}

export default PromoTile

const styles = StyleSheet.create({
    image: {
        width: width - 40,
        height: 150,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignContent: 'center',
        // alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    title: {
        fontFamily: fonts.primary.bold,
        color: colors.white,
    },
    description: {
        fontFamily: fonts.primary.normal,
        fontSize: 10,
        maxWidth: width - 80,
        color: colors.white
    },
    info: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tileInfo: {
        maxWidth: width - 150,
    }

})
