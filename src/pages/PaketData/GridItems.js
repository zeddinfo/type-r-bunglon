import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

const GridItems = ({ item, index }) => {

    console.log('item', index);
    return (
        <ImageBackground
            source={{ uri: item.image }}
            style={styles.container}
        >

        </ImageBackground>
    )
}

export default GridItems

const styles = StyleSheet.create({
})
