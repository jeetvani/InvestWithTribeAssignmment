import React from 'react';
import AuthScreen from './src/Screens/AuthScreen';
import firebase from '@react-native-firebase/app';
import RootNavigation from './src/Navigator/RootNavigation';

firebase.app();
export default function App() {
  return (
    <RootNavigation />
  )
}
