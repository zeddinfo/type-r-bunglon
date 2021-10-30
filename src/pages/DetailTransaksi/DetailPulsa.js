import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Gap from '../../components/Gap';
import { BasicHeader, DetailTransaksiHeader } from '../../components/Header';
import { colors, fonts } from '../../themes';

const DetailPulsa = (props) => {
    console.log('props', props.nomor);
    const { nomor } = props;
    return (
        <SafeAreaView style={styles.page}>
            <BasicHeader title="Detail Transaksi" backAction={() => Actions.pop()} />
            <DetailTransaksiHeader type="Pulsa Data" denom={props.data.harga} />
            <Gap height={10} />
            <View style={styles.detailTransaksi}>
                <Text style={styles.title}>Detail Transaksi</Text>
                <Gap height={5} />
                <View>
                    <View style={styles.rowDetail}>
                        <Text style={styles.titles}>Nomor Tujuan</Text>
                        <Text style={styles.price}>{nomor}</Text>
                    </View>
                    <View style={styles.rowDetail}>
                        <Text style={styles.titles}>Denom</Text>
                        <Text style={styles.price}>10.0000</Text>
                    </View>
                    <Gap height={5} />
                    <View style={styles.rowDetail}>
                        <Text style={styles.titles}>Harga</Text>
                        <Text style={styles.price}>10.0000</Text>
                    </View>
                    <Gap height={5} />
                    <View style={styles.rowDetail}>
                        <Text style={styles.titles}>Biaya Admin</Text>
                        <Text style={styles.price}>1.000</Text>
                    </View>
                    <Gap height={5} />
                    <View style={styles.rowDetail}>
                        <Text ellipsizeMode='tail' style={styles.totalTitles}>Total Pembayaran</Text>
                        <Text ellipsizeMode='tail' style={styles.totalPrice}>Rp 20.000</Text>
                    </View>
                </View>
            </View>
            <Gap height={10} />
            <View style={styles.metodePembayaran}>
                <Text style={styles.title}>
                    Metode Pembayaran
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default DetailPulsa

const styles = StyleSheet.create({
    detailTransaksi: {
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    title: {
        fontFamily: fonts.primary.bold
    },
    rowDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titles: {
        fontFamily: fonts.primary.normal
    },
    price: {
        fontFamily: fonts.primary.normal,
        color: colors.secondary,
        textAlign: 'right'
    },
    totalTitles: {
        fontFamily: fonts.primary.bold,
    },
    totalPrice: {
        fontFamily: fonts.primary.bold,
        textAlign: 'right',
    },
    metodePembayaran: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        borderRadius: 10,
    }
})
