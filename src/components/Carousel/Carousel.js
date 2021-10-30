import React, { useEffect, useState, useRef } from 'react'
import { Animated, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { CarouselItem } from '.';
import { colors } from '../../themes';

const { width, height } = Dimensions.get('screen');
const flatlist = useRef();

const Carousel = ({ data }) => {
    console.log('data', data);
    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);
    let scrollValue = 0, scrolled = 0;

    useEffect(() => {
        setDataList(data);

        setTimeout(() => {
            infiniteScroll(dataList);
        }, 5000)

    }, [scrolled]);

    const infiniteScroll = (dataList) => {
        const numberOfData = dataList.length;
        scrolled++;
        if (scrolled < numberOfData) {
            scrollValue = scrollValue + width
        } else {
            scrollValue = 0;
            scrolled = 0;
        }

        flatlist.current.scrollToOffset({ animated: true, offset: scrollValue })
    }

    const renderItem = ({ item, index }) => {
        return <CarouselItem item={item} />
    }

    const Indicator = (item) => {
        console.log('item indicator', item)
        return (
            <View style={styles.dotIndicator}>
                {
                    item.data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: "clamp"
                        });

                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 3, width: 10, backgroundColor: '#fff9', margin: 5, borderRadius: 7 / 2 }}
                            >
                            </Animated.View>
                        )
                    })
                }
            </View>
        )
    }

    if (data && data.length) {
        return (
            <View>
                <FlatList
                    ref={flatlist}
                    data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
                />
                <Indicator data={data} />
            </View>
        )
    }

    console.log("Please provide Images");
    return null;

}

export default Carousel

const styles = StyleSheet.create({
    dotIndicator: {
        right: width - 210,
        top: width - 170,
        position: 'absolute',
        flexDirection: 'row',
    }
})
