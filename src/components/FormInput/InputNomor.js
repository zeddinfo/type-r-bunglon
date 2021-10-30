import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../themes'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Gap from '../Gap';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

const InputNomor = ({ onChange, value, getContact }) => {

    const [border, setBorder] = useState(colors.grey);

    const onFocus = () => {
        setBorder(colors.primary);
    }

    const onBlur = () => {
        setBorder(colors.grey);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nomor Ponsel</Text>
            <View style={styles.inputContainer}>
                <AntDesign name="phone" color={border} size={20} />
                <Gap width={10} />
                <TextInput
                    style={styles.inputText(border)}
                    onChangeText={onChange}
                    value={value}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    keyboardType="numeric"
                />
                <TouchableWithoutFeedback onPress={getContact}>
                    <AntDesign name="contacts" color={border} size={25} />
                </TouchableWithoutFeedback>

            </View>
        </View>
    )
}

export default InputNomor

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: width - 100,
        height: 90,
        borderRadius: 25,
        elevation: 3,
        paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 40,
    },
    inputText: (border) => ({
        borderBottomColor: border,
        borderBottomWidth: 1,
        width: width - 190
    }),
    inputContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: fonts.primary.normal,
        color: colors.grey
    }
})
