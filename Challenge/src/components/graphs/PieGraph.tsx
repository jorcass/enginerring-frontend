import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {View, Text, Button} from 'react-native';

const PieGraph = gestureHandlerRootHOC((props: {navigation: any}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
});

export default PieGraph;
