import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../themes'
import Icons from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('screen');

const BtnCircle = () => {
    return (
        <View style={styles.container}>
            <Icons name="arrow-right" color={colors.yellow} size={15} />
        </View>
    )
}

export default BtnCircle

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: 30,
        height: 30,
        borderRadius: 35 / 2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    }
})
