import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../themes'
import Icons from 'react-native-vector-icons/FontAwesome5'
import IonIcons from 'react-native-vector-icons/Ionicons'

const BasicHeader = ({ title, backAction }) => {

    const platform = Platform.OS;

    return (
        <SafeAreaView style={styles.container(platform)}>
            <StatusBar barStyle="dark-content" />
            <TouchableOpacity onPress={backAction}>
                <Icons name="arrow-left" size={25} color={colors.primary} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <IonIcons name="chatbox" color={colors.primary} size={25} />
        </SafeAreaView>
    )
}

export default BasicHeader

const styles = StyleSheet.create({
    container: (platfom) => ({
        paddingHorizontal: 10,
        paddingVertical: platfom == 'android' ? 20 : 15,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    }),
    title: {
        fontFamily: fonts.primary.bold
    }
})
