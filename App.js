import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer , createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {AppTabNavigator} from './components/AppTabNavigator';
import WelcomeScreen from './screens/WelcomeScreen';


export default function App() {
  return (
    <AppContainer/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen : {screen : WelcomeScreen},
  BottomTab : {screen:AppTabNavigator}
})

const AppContainer = createAppContainer(SwitchNavigator);