import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CurrencyScreen from '../screens/currencyScreen';
import PieScreen from '../screens/pieScreen';
import MagnifierScreen from '../screens/magnifierScreen';
import UserScreen from '../screens/userScreen';
import BellScreen from '../screens/bellScreen';

import {
  bellFocusedIcon,
  bellIcon,
  currencyFocusedIcon,
  currencyIcon,
  magnifierFocusedIcon,
  magnifierIcon,
  userFocusedIcon,
  userIcon,
  pieFocusedIcon,
  pieIcon,
} from '../assets/icons';

const {Navigator, Screen} = createBottomTabNavigator();

const TabIcon = (props: {color: string; source: any}) => {
  return <Image {...props} />;
};

const getTabOption = (props: {icon: any; focusedIcon: any}) => ({
  headerShown: false,
  tabBarShowLabel: false,
  tabBarIcon: (iconProps: {color: any; focused: boolean}) => (
    <TabIcon
      source={iconProps.focused ? props.focusedIcon : props.icon}
      color={iconProps.color}
    />
  ),
});

const BottomTabs = () => {
  return (
    <Navigator>
      <Screen
        name="Pie"
        component={PieScreen}
        options={getTabOption({icon: pieIcon, focusedIcon: pieFocusedIcon})}
      />
      <Screen
        name="Currency"
        component={CurrencyScreen}
        options={getTabOption({
          icon: currencyIcon,
          focusedIcon: currencyFocusedIcon,
        })}
      />
      <Screen
        name="Magnifier"
        component={MagnifierScreen}
        options={getTabOption({
          icon: magnifierIcon,
          focusedIcon: magnifierFocusedIcon,
        })}
      />
      <Screen
        name="Bell"
        component={BellScreen}
        options={getTabOption({icon: bellIcon, focusedIcon: bellFocusedIcon})}
      />
      <Screen
        name="User"
        component={UserScreen}
        options={getTabOption({icon: userIcon, focusedIcon: userFocusedIcon})}
      />
    </Navigator>
  );
};

export default BottomTabs;
