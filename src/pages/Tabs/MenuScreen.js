import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Carousel } from '../../components/Carousel'
import Gap from '../../components/Gap'
import { data, data_menu } from '../../data'
import { colors, fonts } from '../../themes'

const MenuScreen = () => {
    return (
        <ScrollView style={styles.page} showsHorizontalScrollIndicator={false}>
            <Carousel data={data} />
            <View style={styles.content}>
                {data_menu.map((item) => {
                    return (
                        <View>
                            <Gap height={20} />
                            <View style={styles.title}>
                                <Text style={styles.title}>{item.menu}</Text>
                            </View>
                            <Gap height={20} />
                            <View style={styles.detail_menu}>{item.detail.map((detail) => {
                                return (
                                    <View style={styles.item_detail_menu}>
                                        <Image source={require('../../assets/icons/menu/ic-emoney.png')} style={styles.image_menu} />
                                        <Text style={styles.description}>{detail.name}</Text>
                                    </View>
                                )
                            })}</View>
                        </View>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content: {
        padding: 10,
        backgroundColor: colors.white
    },
    detail_menu: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: 25,
        flexWrap: 'wrap',
    },
    image_menu: {
        width: 50,
        height: 50,
    },
    item_detail_menu: {
        marginRight: 30,
        // alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: fonts.primary.bold
    },
    description: {
        fontFamily: fonts.primary.normal
    }
})
