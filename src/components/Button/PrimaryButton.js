import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../themes'

const PrimaryButton = ({ title, type, onPress }) => {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.primary}>{title}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type == 'primary' ? colors.primary : colors.grey,
        borderRadius: 10,
        paddingVertical: 13,
        paddingHorizontal: 10,
        alignItems: 'center',
        alignContent: 'center',
    }),
    primary: {
        fontFamily: fonts.primary.bold,
        color: colors.white
    }
})
