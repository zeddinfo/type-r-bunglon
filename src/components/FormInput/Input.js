import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../themes'
import Icons from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('screen');

const Input = ({ value,
    label,
    onChangeText,
    onPress,
    placeholder, isSecure, onShow, show, icon }) => {

    const [border, setBorder] = useState('#495A75');
    const onFocusForm = () => {
        setBorder(colors.onBoaring);
    }

    const onBlurForm = () => {
        setBorder('#495A75');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{label}</Text>
            <View style={styles.content}>
                <View style={styles.sectionStyle(border)}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignItems: 'center',
                        }}
                        onPress={onPress}>
                        {/* <Icons name={isSecure ? "key" : "user-check"} size={20} color={border} /> */}
                        <Icons name={icon} size={20} color={border} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.textInput(border)}
                        placeholder={placeholder ? placeholder : ''}
                        defaultValue={value}
                        onChangeText={onChangeText}
                        onFocus={onFocusForm}
                        onBlur={onBlurForm}
                        secureTextEntry={show}
                    />
                    {isSecure && <TouchableOpacity onPress={onShow}>
                        <Icons name={show ? "eye" : "eye-slash"} size={18} color={border} />
                    </TouchableOpacity>}
                </View>
            </View>
        </View>

    )
}

export default Input

const styles = StyleSheet.create({
    content: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // height: ,
    },
    sectionStyle: (border) => ({
        flexDirection: 'row',
        paddingLeft: 10,
        alignItems: 'center',
        backgroundColor: '#f2f3f3',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: border,
        width: width - 40,
    }),
    textInput: (border) => ({
        marginLeft: 10,
        color: 'black',
        backgroundColor: '#f2f3f3',
        width: '80%',
        height: 45,
        borderBottomWidth: 0.5,
        borderBottomColor: border,
    }),
    title: {
        fontFamily: fonts.primary.normal,
        color: colors.grey,
        fontSize: 15,
    }
})
