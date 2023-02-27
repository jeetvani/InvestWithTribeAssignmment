import React from 'react';
import AuthScreen from './src/Screens/AuthScreen';
import firebase from '@react-native-firebase/app';
import RootNavigation from './src/Navigator/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';

firebase.app();
export default function App() {
  return (
    <NavigationContainer>


      <RootNavigation />
    </NavigationContainer>
  )
}
