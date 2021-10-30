import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SsoCard = ({ type }) => {

    const Icon = () => {
        if (type == 'twitter') {
            return (
                <Image source={require('../../assets/icons/ic-twitter.png')} style={styles.icon} />
            );
        } else if (type == 'facebook') {
            return (
                <Image source={require('../../assets/icons/ic-facebook.png')} style={styles.icon} />
            );
        } else {
            return (
                <Image source={require('../../assets/icons/ic-google.png')} style={styles.icon} />
            );
        }
    }

    return (
        <View style={styles.container}>
            <Icon />
        </View>
    )
}

export default SsoCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        borderRadius: 40 / 2,
        padding: 2
    },
    icon: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    }
})
