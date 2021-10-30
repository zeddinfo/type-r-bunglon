import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { Search } from '../FormInput';
import Gap from '../Gap';

const HeaderHome = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/ic-user.png')} style={styles.image} />
            <Gap width={10} />
            <Search />
            <Gap width={10} />
            <Image source={require('../../assets/icons/ic-cart.png')} style={styles.imageCart} />
        </View>
    )
}

export default HeaderHome

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 30,
        height: 30,
    },
    imageCart: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    imgContainer: {
        padding: 5,
        width: 30,
        height: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 30 / 2
    }
})
