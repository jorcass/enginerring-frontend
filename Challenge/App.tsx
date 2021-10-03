/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootNavigator from './src/components/navigation/RootNavigator';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

// Needed to ensure that the SafeAreaView for iOS remains valid. Otherwise a user can tap out of the app screen.
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
