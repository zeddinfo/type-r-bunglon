import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-image-avatars';

const CardContact = ({ name, nomor, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.conatiner}>
            {/* <View style={styles.content}> */}
            {/* <View style={styles.content}> */}
            <View style={styles.info}>
                <Text>{name}</Text>
                <Text>{nomor}</Text>
            </View>

            <View>
                <Avatar
                    type="text"
                    text={name}
                    size="x-small"
                    borderColor="#f2f2f2"
                    textBackgroundFill='#fff'
                    backgroundColor="red"
                />
                {/* </View> */}
                {/* </View> */}

            </View>
        </TouchableOpacity>
    )
}

export default CardContact

const styles = StyleSheet.create({
    conatiner: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#f5f5f5',
        borderBottomWidth: 1,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        // backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    }
})
