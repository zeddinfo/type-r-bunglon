import React, { useEffect, useState } from 'react'
import { FlatList, PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { BasicHeader } from '../../components/Header';
import Contacts from 'react-native-contacts';
import { Root, Popup } from 'popup-ui'
import { CardContact } from '../../components/Card';


const ListContact = () => {
    const [listContact, setListContact] = useState([]);
    const getContacts = () => {
        if (Platform.OS === 'ios') {
            console.log('get kontak cyu');
        } else {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: "Contacts",
                message: "Isidw Bunglon ingin mengakses kontak anda.",
                buttonPositive: "Izinkan",
                buttonNegative: "Batalkan"
            }).then(() => {
                console.log('res');
                // loadContacts();
                Contacts.getAll().then(contacts => {
                    // console.log('kontal', contacts);
                    let temp = [];
                    contacts.map((item, index) => {
                        item.phoneNumbers.map((row, index2) => {
                            const data = {
                                nama: item.displayName,
                                phoneNumbers: row.number
                            };

                            if (temp.indexOf(data) == -1) {
                                temp.push(data);
                                removeDuplicate(temp);
                            }
                        });
                    });

                    setListContact(temp);
                })

            })
        }
    }

    const removeDuplicate = (data) => {
        return data.filter((value, index) => data.indexOf(value) === index);
    }

    const loadContacts = () => {
        Contacts.getAll((err, datacontact) => {
            console.log('kontak', datacontact);
        })
    }

    const setNomor = (nomor) => {
        console.log('nomor is', nomor);
        Actions.pop({ refresh: { data: nomor } });
    }

    const renderItem = ({ item, index }) => {
        return (
            <CardContact name={item.nama} nomor={item.phoneNumbers} onPress={setNomor} />
        )
    }

    useEffect(() => {
        getContacts();
        // checkPermission();
    }, [])
    return (
        <View style={styles.page}>
            <BasicHeader title="List Kontak" backAction={() => Actions.pop()} />
            <FlatList
                data={listContact}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ListContact

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
