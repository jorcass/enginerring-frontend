import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';

const { Screen, Navigator } = createStackNavigator();

const RootNavigator = () => (
  <Navigator>
    <Screen
      name="Root"
      component={BottomTabs}
      options={{ headerShown: false }}
    />
  </Navigator>
);

export default RootNavigator;
