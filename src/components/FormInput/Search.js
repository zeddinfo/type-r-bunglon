import React from 'react'
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native'
import { colors } from '../../themes';

const { width, height } = Dimensions.get('screen');

const Search = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Samsung A30"
            />
        </View>

    )
}

export default Search;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    input: {
        height: 35,
        backgroundColor: colors.white,
        borderRadius: 10,
        width: width - 90,
        padding: 10,
    }
})
