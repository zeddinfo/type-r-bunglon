import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Animated, Image, Dimensions, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { img1, img2, img3 } from '../../assets/images';
import { OnBoardingBtn } from '../../components';
import { colors, fonts } from '../../themes';

const { height, width } = Dimensions.get('screen');
const bgs = ['#307A59', '#459373', '#F3B33D', '#B98EFF'];


const dummyData = [
    {
        title: 'Multi-lateral intermediate moratorium',
        description: "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
        img: img1,
    },
    {
        title: "Automated radical data-warehouse",
        description: "Use the optical SAS system, then you can navigate the auxiliary alarm!",
        img: img2
    },
    {
        title: "Inverse attitude-oriented system engine",
        description: "The ADP array is down, compress the online sensor so we can input the HTTP panel!",
        img: img3
    },
]

const Indicator = ({ scrollX }) => {
    return (
        <Animated.View style={{ position: 'absolute', bottom: 80, flexDirection: 'row', }}>
            {dummyData.map((_, i) => {
                console.log('index', i);
                const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

                const scale = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.8, 1.4, 0.8],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.6, 0.9, 0.6],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View key={(i) => i.toString()} style={{ height: 10, width: 10, borderRadius: 5, backgroundColor: '#fff', margin: 5, opacity, transform: [{ scale }] }}>

                    </Animated.View>
                )
            })}
        </Animated.View>
    )
}

const handleNext = () => {
    ///if current session not null
    Actions.Login();

    ///else
    // Actions.Home();
}


const Backdrop = ({ scrollX }) => {

    const backgroundColor = scrollX.interpolate({
        inputRange: bgs.map((_, i) => i * width),
        outputRange: bgs.map((bg) => bg),
    });

    return (
        <Animated.View
            style={[StyleSheet.absoluteFillObject, { backgroundColor }]}
        />
    )

}

const Square = ({ scrollX }) => {

    const YOLO = Animated.modulo(Animated.divide(
        Animated.modulo(scrollX, width),
        new Animated.Value(width)
    ), 1);

    const rotate = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: ['35deg', '0deg', '35deg']
    });

    const translateX = YOLO.interpolate({
        inputRange: [0, .5, 1],
        outputRange: [0, -height, 0]
    });

    return (
        <Animated.View
            style={{
                width: height,
                height: height,
                backgroundColor: '#fff',
                borderRadius: 86,
                position: 'absolute',
                top: -height * 0.6,
                left: -height * 0.3,
                transform: [
                    {
                        rotate
                    },
                    {
                        translateX
                    }
                ]
            }}
        />
    );
}

const OnBoarding = () => {
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            console.log('value', value);
            if (Math.floor(value / width) === dummyData.length - 1) {
                console.log('complete');
                setCompleted(true);
            }
        });

        return () => scrollX.removeListener();
    })

    const scrollX = useRef(new Animated.Value(0)).current;

    const renderItem = ({ item, index }) => {
        return (
            <View key={index.toString()} style={styles.content}>
                <View style={styles.divContent}>
                    <Image source={item.img} style={styles.img} />
                </View>
                <View style={{ flex: 0.3 }}>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* <StatusBar hidden /> */}
            <StatusBar
                backgroundColor="transparent"
                translucent={true} barStyle="dark-content"
            />
            <Backdrop scrollX={scrollX} />
            <Square scrollX={scrollX} />
            <Animated.FlatList
                data={dummyData}
                scrollEventThrottle={32}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                renderItem={renderItem}
            />
            <Indicator scrollX={scrollX} />
            <View style={styles.onBoardingButton}>
                <OnBoardingBtn icons="arrow-right" onPress={() => handleNext()} />
            </View>
        </View>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: width / 2,
        height: width / 2,
        resizeMode: 'contain'
    },
    content: {
        width,
        alignItems: 'center',
        padding: 20,
    },
    divContent: {
        flex: 0.7,
        justifyContent: 'center',
    },
    text: {
        fontFamily: fonts.primary.bold,
        color: colors.white,
        fontSize: 16
    },
    description: {
        fontFamily: fonts.primary.normal,
        color: colors.white
    },
    onBoardingButton: {
        // backgroundColor: 'red'
        position: 'relative',
        bottom: 10,
    }
})
