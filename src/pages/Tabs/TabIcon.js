import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import { colors } from '../../themes';

const { widt, height } = Dimensions.get('screen')

export default class TabIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var color = this.props.focused ? colors.primary : colors.lighGrey;
        var icon = '';
        if (this.props.iconKey == 'FontAwesomeCustom') {
            icon = (
                <View
                    style={{
                        width: height * 0.08,
                        height: height * 0.08,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.primary,
                        borderRadius: height * 0.04,
                        alignContent: 'center',
                        marginBottom: 20
                    }}>
                    <FAIcon
                        style={{ color: 'white' }}
                        name={this.props.iconName || 'circle'}
                        size={30}
                    />
                </View>
            );
        } else if (this.props.iconKey == 'MaterialCommunityIconsCust') {
            icon = (
                <MCIcon
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={20}
                />
            );
        } else if (this.props.iconKey == 'MaterialCommunityIcons') {
            icon = (
                <MCIcon
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={20}
                />
            );
        } else if (this.props.iconKey == 'Feather') {
            icon = (
                <Feather
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={20}
                />
            );
        } else if (this.props.iconKey == 'FontAwesome5') {
            icon = (
                <FA5Icon
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={22}
                />
            );
        } else if (this.props.iconKey == 'AntDesign') {
            icon = (
                <ADIcon
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={20}
                />
            );
        } else if (this.props.iconKey == 'MaterialIcons') {
            icon = (
                <MIcon
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={24}
                />
            );
        } else if (this.props.iconKey == 'Foundation') {
            icon = (
                <Foundation
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={24}
                />
            );
        } else {
            icon = (
                <FAIcon
                    style={{ color: color }}
                    name={this.props.iconName || 'circle'}
                    size={24}
                />
            );
        }

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}>
                {icon}
            </View>
        );
    }
}
