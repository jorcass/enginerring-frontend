import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { headerImage } from '../../assets/images';
import Header from '../../common/header/Header';
import Balance from './balance';
import Pies from './pies';
import WatchListHorizontal from './watchListHorizontal';

const PieScreen = gestureHandlerRootHOC((props: { navigation: any }) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.scrollview}>
      <ImageBackground
        source={headerImage}
        resizeMode="stretch"
        resizeMethod="resize"
        style={styles.headerBackground}>
        <View>
          <Header />
          <Balance />
          <Pies navigation />
          <WatchListHorizontal navigation />
        </View>
      </ImageBackground>
    </ScrollView>
  );
});

export default PieScreen;

const styles = StyleSheet.create({
  scrollview: { flex: 1 },
  container: { flex: 1, paddingVertical: 32 },
  headerBackground: {
    flex: 1,
    width: '100%',
    height: 348,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
});
