import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { capIcon, userWhiteIcon } from '../../assets/icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.nameTagContainer}>
          <Image source={userWhiteIcon} />
          <Text style={styles.nameTag}>@ethansmith</Text>
        </View>
        <View style={styles.capIconContainer}>
          <Image source={capIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  nameTagContainer: {
    alignSelf: 'flex-start',
    padding: 8,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 50,
  },
  nameTag: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    paddingHorizontal: 8,
  },
  capIconContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#E9E7FE',
    padding: 7,
    borderRadius: 12,
  },
});
