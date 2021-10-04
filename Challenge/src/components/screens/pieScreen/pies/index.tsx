import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { LineChart } from 'react-native-svg-charts';
import { arrowDownwardIcon, arrowUpwardIcon } from '../../../assets/icons';

import { YOURPIES_ITEMS } from '../../../constants';

const Pies = (props: { navigation: any }) => {
  const WINDOW_WIDTH = Dimensions.get('window').width;
  const { navigation } = props;

  const _renderItem = (props: {
    item: any;
    index: number;
    isPicker: boolean;
  }) => {
    const { item, index } = props;
    const handleOnPress = async () => {
      navigation.navigate('PieInfo', { pieInfo: item });
    };

    return (
      <TouchableOpacity onPress={handleOnPress}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <LineChart
            style={{ height: 64 }}
            data={item.data}
            svg={{ stroke: item.color, strokeWidth: 2 }}
            contentInset={{ top: 20, bottom: 20 }}
          />
          <Text style={styles.itemAmount}>
            ${item.amount}{' '}
            <Text style={styles.itemAmountType}>{item.amountType}</Text>
          </Text>
          <View style={styles.itemDegree}>
            <Image
              source={item.positive ? arrowUpwardIcon : arrowDownwardIcon}
            />
            <Text
              style={{
                color: item.positive ? '#34B78F' : '#F2827F',
                fontSize: 12,
              }}>
              {' '}
              ${item.degreeAmount} ({item.degreePercentage}%)
            </Text>
          </View>
          <Text style={{ fontSize: 12, color: '#FF63AF' }}>
            {item.stock} stock{item.stock > 1 && 's'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Text style={styles.title}>Your Pies</Text>
      <Carousel
        layout={'default'}
        renderItem={_renderItem}
        data={YOURPIES_ITEMS}
        sliderWidth={WINDOW_WIDTH}
        itemWidth={210}
      />
    </View>
  );
};

export default Pies;

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 20,
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  itemTitle: {},
  itemContainer: {},
  itemAmount: {},
  itemAmountType: {},
  itemDegree: {},
});
