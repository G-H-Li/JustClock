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
import {
  SafeAreaView, StyleSheet, View,
} from 'react-native';
import Config from "./src/views/Config";
import Clock from "./src/views/Clock";

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appClock}>
        <Clock format={'HH:mm:ss'}/>
      </View>
      <View style={styles.appConfig}>
        <Config/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 24,
    flex: 1,
    flexDirection: "column"
  },
  appClock: {
    flex: 2
  },
  appConfig: {
    flex: 8
  }
});

export default App;
