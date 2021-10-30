import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { ActionConst, Router, Scene, Stack, Tabs } from 'react-native-router-flux'
import { Splashscreen } from './pages';
import { LoginScreen, RegisterScreen } from './pages/Auth';
import { OnBoarding } from './pages/onBoarding';
import { HomeScreen, MenuScreen, ProfileScreen, TransactionScreen } from './pages/Tabs';
import { colors, fonts } from './themes';
import Icons from 'react-native-vector-icons/FontAwesome5';
import TabIcon from './pages/Tabs/TabIcon';
import PulsaData from './pages/PulsaData/PulsaData';
import { PaketData } from './pages/PaketData';
import { DetailPulsa } from './pages/DetailTransaksi';
import ListContact from './pages/ListContact';

const stateHandler = (prevState, newsState, action) => {
    // console.log('onstatechange : ACTION:', action);
};


const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const AppNavigator = () => {

    const iconHome = () => <Icons name="home" color={colors.primary} size={25} />
    const iconCart = () => <Icons name="shopping-cart" color={colors.primary} size={25} />
    const iconBelanja = () => <Icons name="shopping-bag" color={colors.primary} size={25} />
    const iconUser = () => <Icons name="user-alt" color={colors.primary} size={25} />

    const settingTabs = (props) => {

    }

    return (
        <Router
            onStateChange={stateHandler}
            sceneStyle={styles.scene}
            uriPrefix={prefix}
        >
            <Scene key="Root" hideNavBar={true}>
                <Scene
                    key="splashscreen"
                    subtitle="splashscreen"
                    title="Splashscreen"
                    component={Splashscreen}
                    hideNavBar={true}
                    type="reset"
                />
                <Scene
                    key="OnBoarding"
                    subtitle="OnBoarding"
                    component={OnBoarding}
                    hideNavBar={true}
                    title="OnBoarding"
                    type="reset"
                />
                <Scene
                    key="Login"
                    component={LoginScreen}
                    hideNavBar={true}
                    title="Login"
                    type="reset"
                />
                <Scene
                    key="Register"
                    component={RegisterScreen}
                    hideNavBar={true}
                    title="Register"
                />

                <Scene key="Main"
                    hideNavBar={true}
                    activeTintColor={colors.primary}
                    tabBarStyle={styles.tabBar}
                    tabs
                    type="reset"
                    labelStyle={styles.titleStyle}
                    showLabel={false}
                >
                    <Scene key="Home" iconName="home"
                        iconKey="FontAwesome5" title="Home" component={HomeScreen} icon={TabIcon} hideNavBar={true} initial={true} />
                    <Scene key="AllMenu" iconName="shopping-bag" iconKey="FontAwesome5" title="Home" title="Semua" component={MenuScreen} icon={TabIcon} hideNavBar={true} />
                    <Scene key="Transaksi" iconKey="FontAwesome5" iconName="shopping-cart" title="Transaksi" component={TransactionScreen} icon={TabIcon} hideNavBar={true} />
                    <Scene key="Profile" iconKey="FontAwesome5" iconName="user-alt" title="Akun" component={ProfileScreen} icon={TabIcon} hideNavBar={true} />
                </Scene>

                <Scene
                    key="PulsaScreen"
                    component={PulsaData}
                    hideNavBar={true}
                    title="PulsaScreen"
                />

                <Scene
                    key="PaketDataScreen"
                    component={PaketData}
                    hideNavBar={true}
                    title="PulsaScreen"
                />

                <Scene
                    key="DetailTransaksiPulsaScreen"
                    component={DetailPulsa}
                    hideNavBar={true}
                    title="PulsaScreen"
                />

                <Scene
                    key="ListContacts"
                    component={ListContact}
                    title="ListContacts"
                />

            </Scene>
        </Router>
    )
}

export default AppNavigator

const styles = StyleSheet.create({
    scene: {
        backgroundColor: '#F5FCFF',
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    tabBar: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        borderBottomColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 5,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontFamily: fonts.primary.normal
    }
})
