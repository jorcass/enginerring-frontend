import React from 'react';
import { Image, View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { techPie } from '../assets/fakegraphs';

const PieGraph = gestureHandlerRootHOC((props: { navigation: any }) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={techPie} />
    </View>
  );
});

export default PieGraph;
