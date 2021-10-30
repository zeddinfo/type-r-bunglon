import React from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Carousel } from '../../components/Carousel'
import { Search } from '../../components/FormInput'
import { HeaderHome } from '../../components/Header'
import { data, menu, promo } from '../../data'
import Icons from 'react-native-vector-icons/FontAwesome5';
import { colors, fonts } from '../../themes'
import Gap from '../../components/Gap'
import { ProductTile, PromoTile } from '../../components/Tile'
import { product_favorit } from '../../data/products'
import { Actions } from 'react-native-router-flux'

const { width, height } = Dimensions.get('screen');

const HomeScreen = () => {

    const renderPromo = ({ item, index }) => {
        return (
            <PromoTile data={item} />
        );
    }

    const renderProductFavorit = ({ item, index }) => {
        return (
            <ProductTile data={item} />
        )
    }

    return (
        <View style={styles.page}>
            <StatusBar hidden={false} backgroundColor="transparent" translucent={true} barStyle="light-content" />
            <Carousel data={data} />
            <View style={{ position: 'absolute', top: 30, left: 8 }}>
                <HeaderHome />
            </View>
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.menu}>
                    {menu.map((item) => {
                        return (
                            <TouchableOpacity style={styles.itemMenu} onPress={() => Actions[item.navigasi]()}>
                                <Image source={item.icon} style={styles.iconMenu} />
                                <Gap height={8} />
                                <Text style={styles.titleMenu}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <Gap height={10} />
                {/* promo section */}
                <View style={styles.itemPromo}>
                    <FlatList
                        data={promo}
                        renderItem={renderPromo}
                        keyExtractor={(item, index) => 'key' + index.toString()}
                        horizontal
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                    />
                    {/* {promo.map((item) => {
                        return <PromoTile data={item} />
                    })} */}
                </View>

                <Gap height={10} />
                <View style={styles.productFavorit}>
                    <View style={styles.titleTile}>
                        <Icons name="shopping-basket" color={colors.primary} size={15} />
                        <Gap width={5} />
                        <Text style={styles.title}>Produk Populer</Text>
                    </View>
                    <Gap height={10} />
                    <View style={styles.itemProduk}>
                        <FlatList
                            data={product_favorit}
                            renderItem={renderProductFavorit}
                            keyExtractor={(item, index) => 'key' + index.toString()}
                            horizontal={true}
                            scrollEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />
                        {/* {product_favorit.map((item) => {
                            return (
                                <ProductTile data={item} />
                            )
                        })} */}
                    </View>
                </View>

                <Gap height={10} />
                <View style={styles.productTerbaru}>
                    <View style={styles.titleTile}>
                        <Icons name="shopping-basket" color={colors.primary} size={15} />
                        <Gap width={5} />
                        <Text style={styles.title}>Produk Terbaru</Text>
                    </View>
                    <Gap height={10} />
                    <View style={styles.itemProdukTerbaru}>
                        <FlatList
                            data={product_favorit}
                            renderItem={renderProductFavorit}
                            keyExtractor={(item, index) => 'key' + index.toString()}
                            horizontal={true}
                            scrollEnabled={true}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'red'
    },
    content: {
        backgroundColor: 'white',
        padding: 10,
        flex: 2,
    },
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        alignItems: 'center',
    },
    itemMenu: {
        margin: width / 25,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 10,
    },
    iconMenu: {
        width: width / 14,
        height: width / 14,
        resizeMode: 'contain'
    },
    titleMenu: {
        fontFamily: fonts.primary.normal,
        fontSize: 9,
    },
    itemPromo: {
        paddingLeft: 10,
    },
    title: {
        fontFamily: fonts.primary.bold
    },
    titleTile: {
        flexDirection: 'row',
    }
})
