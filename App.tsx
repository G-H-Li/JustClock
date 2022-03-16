/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC, useEffect, useState} from 'react';
import {
  PixelRatio,
  SafeAreaView, StatusBar, StyleSheet, useWindowDimensions, View,
} from 'react-native';
import Config from "./src/views/Config";
import Clock from "./src/views/Clock";

const HorizonApp: FC<{format: string}> = ({children, format}) => {
  return (
  <SafeAreaView style={styles.appHorizonContainer}>
    <StatusBar translucent={true} />
    <View style={styles.appHorizonClock}>
      <Clock format={format} isHorizon={true}/>
    </View>
  </SafeAreaView>
  )
};

const VerticalApp: FC<{format: string}> = ({children, format}) => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar translucent={true} />
      <View style={styles.appClock}>
        <Clock format={format} isHorizon={false}/>
      </View>
      <View style={styles.appConfig}>
        <Config/>
      </View>
    </SafeAreaView>
  )
};

const App = () => {
  const format = "HH:mm:ss";
  //横屏检测
  const [isHorizon, useHorizon] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  useEffect(() => {
    let state = windowWidth > windowHeight;
    if(state !== isHorizon){
      useHorizon(state);
    }
  });
  if(isHorizon){
    return <HorizonApp format={format}/>;
  }else {
    return <VerticalApp format={format}/>;
  }
};

const styles = StyleSheet.create({
  appHorizonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'black',
    flex: 1
  },
  appHorizonClock: {
    flex: 1
  },
  appContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: "column"
  },
  appClock: {
    flex: 2.5,
  },
  appConfig: {
    flex: 7.5,
    borderTopColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1
  }
});

export default App;
