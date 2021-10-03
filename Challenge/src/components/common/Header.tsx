import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {capIcon, userWhiteIcon} from '../assets/icons';

const Header = () => {
  return (
    <View>
      <View>
        <Image source={userWhiteIcon} />
        <Text>@ethansmith</Text>
      </View>
      <View>
        <Image source={capIcon} />
      </View>
    </View>
  );
};

export default Header;
