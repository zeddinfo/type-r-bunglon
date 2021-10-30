import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../themes'
import Icons from 'react-native-vector-icons/FontAwesome5';
import Svg, { G, Circle } from 'react-native-svg';
const { width, height } = Dimensions.get('screen');

const OnBoardingBtn = ({ icons, onPress }) => {

    const size = 128;
    const stroleWidth = 2;
    const centet = size / 2;
    const radius = size / 2 - stroleWidth / 2;

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icons name={icons} color={colors.white} size={20} />
        </TouchableOpacity>
    )
}

export default OnBoardingBtn

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.onBoaring,
        width: width / 8,
        height: width / 8,
        borderRadius: (width / 2) / 2,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'white',
    }
})
