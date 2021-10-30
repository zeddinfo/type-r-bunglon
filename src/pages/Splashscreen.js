import React, { useEffect } from 'react'
import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux';

const { height, width } = Dimensions.get('window');


const Splashscreen = () => {

    useEffect(() => {
        setTimeout(() => {
            // Actions.OnBoarding();
            Actions.Home();
        }, 3000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={true}
            />
            <View style={styles.logo}>
                <Image source={require('../assets/icons/ic-logo.png')} style={styles.imgLogo} />
            </View>
            <View style={styles.bg}>
                <Image source={require('../assets/images/bg-city.png')} style={styles.imgBg} />
            </View>
        </View>
    )
}

export default Splashscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgLogo: {
        width: width / 3,
        height: height / 4,
        resizeMode: 'contain'
    },
    bg: {
        position: 'absolute',
        bottom: -10,
    },
    imgBg: {
        height: height / 5.5,
        resizeMode: 'contain',
        opacity: 0.4,
    }

})
