import React, { useState, useEffect } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { BasicHeader } from '../../components/Header'
import { SliderBox } from 'react-native-image-slider-box';
import { data, pulsa } from '../../data';
import { colors } from '../../themes';
import { InputNomor } from '../../components/FormInput';
import { PulsaCard } from '../../components/Card';
import { Popup } from 'popup-ui';
import AwesomeAlert from 'react-native-awesome-alerts';

const { width, height } = Dimensions.get('screen');

const PulsaData = () => {

    const [images, setImages] = useState([]);
    const [nomor, setNomor] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const imageSlider = data.map((item) => {
            return item.url;
        });

        setImages(imageSlider)
    }, []);

    const onContinue = (item) => {
        console.warn(nomor.length);
        if (nomor.length < 1) {
            setError(true);
        } else {
            Actions.DetailTransaksiPulsaScreen({ data: item, nomor: nomor })
        }
    }

    const renderItem = ({ item, index }) => {
        return (
            <PulsaCard data={item} onPress={() => onContinue(item)} />
        )
    }

    const ListContact = () => {
        Actions.ListContacts();
    }

    return (
        <View style={styles.page}>
            <BasicHeader title="Pulsa Data" backAction={() => Actions.pop()} />
            <View style={styles.sliderBox}>
                <SliderBox
                    images={images}
                    sliderBoxHeight={230}
                    dotColor={colors.yellow}
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={50}
                    autoplay
                    circleLoop
                    resizeMethod="resize"
                    resizeMode="cover"
                    paginationBoxStyle={{
                        position: 'absolute',
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                    }}
                    dotStyle={{
                        width: 20,
                        height: 5,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: 'rgba(128, 128, 128, 0.92)',
                    }}
                    ImageComponentStyle={{
                        width: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}
                    imageLoadingColor={colors.primary}
                />
            </View>

            <AwesomeAlert
                show={error}
                showProgress={false}
                title="Form pengisian"
                message="Nomor tidak boleh kosong"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                // showCancelButton={true}
                showConfirmButton={true}
                // cancelText="No, cancel"
                confirmText="OK"
                confirmButtonColor="#DD6B55"
                // onCancelPressed={() => {
                //     setError(false);
                // }}
                onConfirmPressed={() => {
                    setError(false);
                }}
            />

            <View style={styles.inputPhone}>
                <InputNomor getContact={ListContact} value={nomor} onChange={(value) => setNomor(value)} />
            </View>
            <View style={styles.itemPulsa}>
                <FlatList
                    data={pulsa}
                    renderItem={renderItem}
                    numColumns={2}
                    keyExtractor={(item, index) => 'denom-' + index}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default PulsaData

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    sliderBox: {
        height: 230,
    },
    inputPhone: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        position: 'relative',
        bottom: 30,
        height: 60
    },
    itemPulsa: {
        padding: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
