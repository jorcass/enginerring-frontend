import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { caratDownIcon } from '../../../assets/icons';

const Balance = () => {
  return (
    <View style={styles.balanceContainer}>
      <View style={styles.portfolioValue}>
        <Text style={styles.balanceTitle}>Portfoloio Value</Text>
        <View style={styles.carat}>
          <Image source={caratDownIcon} />
        </View>
      </View>
      <View style={styles.balanceGroup}>
        <Text style={styles.balanceAmount}>$850.64</Text>
        <Text style={styles.balanceCurrency}>USD</Text>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  balanceContainer: {
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  portfolioValue: {
    flexDirection: 'row',
    color: '#fff',
  },
  balanceTitle: {
    fontSize: 16,
    color: '#fff',
  },
  balanceGroup: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '600',
    flexDirection: 'row',
    paddingVertical: 14,
  },
  balanceCurrency: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
    padding: 16,
  },
  carat: {
    padding: 8,
  },
});
