import React, { useState } from 'react'
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { PrimaryButton } from '../../components/Button';
import { SsoCard } from '../../components/Card';
import { Input } from '../../components/FormInput';
import Gap from '../../components/Gap';
import { colors, fonts } from '../../themes'
const { width, height } = Dimensions.get('screen');

const RegisterScreen = () => {

    const [show, setShow] = useState(true);
    const [bgShow, setBgShow] = useState(false);

    return (
        <SafeAreaView style={styles.page} >
            <ScrollView showsHorizontalScrollIndicator={true}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome </Text>
                    <Text style={styles.subtitle}>Silahkan isi form</Text>
                    <Gap height={5} />
                    <Input icon="user-check" label="Username" placeholder="Masukkan Username" isSecure={false} />
                    <Gap height={15} />
                    <Input icon="user-alt" label="Nama Lengkap" placeholder="Masukkan Nama Lengkap" isSecure={false} />
                    <Gap height={15} />
                    <Input icon="key" label="Password" placeholder="Masukkan Password" isSecure={true} show={show} onShow={() => setShow(!show)} />
                    <Gap height={15} />
                    <Input icon="key" label="Nomor Telephone" placeholder="Masukkan Password" isSecure={true} show={show} onShow={() => setShow(!show)} />
                    <Gap height={15} />
                    <PrimaryButton title="Sign Up" type="primary" onPress={() => Actions.Login()} />
                    <Gap height={10} />
                    <View style={styles.ssoLogin}>
                        <Text style={styles.subtitle}>Atau daftar dengan</Text>
                        <Gap height={10} />
                        <View style={styles.iconSSo}>
                            <SsoCard type="twitter" />
                            <Gap width={10} />
                            <SsoCard type="facebook" />
                            <Gap width={10} />
                            <SsoCard type="google" />
                        </View>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    content: {
        backgroundColor: colors.white,
        marginTop: height / 5,
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    title: {
        fontFamily: fonts.primary.bold,
        fontSize: 20,
    },
    subtitle: {
        fontFamily: fonts.primary.normal,
        color: colors.grey
    },
    ssoLogin: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSSo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    register: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    containerlink: {
        marginLeft: 5,
    },
    link: {
        color: colors.primary,
        fontFamily: fonts.primary.bold
    }
})
