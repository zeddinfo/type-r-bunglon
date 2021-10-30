import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { GridItems } from '.'
import { InputNomor } from '../../components/FormInput'
import { BasicHeader } from '../../components/Header'
import { PaketGroups } from '../../data'
import { colors } from '../../themes'

const PaketData = () => {

    const renderPaket = ({ item, index }) => {
        return (
            <GridItems item={item} index={index} />
        )
    }

    return (
        <View style={styles.page}>
            <BasicHeader title="Paket Data" backAction={() => Actions.pop()} />
            <Image source={require('../../assets/images/bg-paket.jpg')} style={styles.image} />
            <View style={styles.inputPhone}>
                <InputNomor />
            </View>
            <FlatList
                data={PaketGroups}
                renderItem={renderPaket}
                keyExtractor={(item, index) => 'key-' + index}
            />
        </View>
    )
}

export default PaketData

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    image: {
        height: 230,
        resizeMode: 'cover',
    },
    inputPhone: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        position: 'relative',
        bottom: 30,
        height: 60
    },
})
