import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthScreen from '../Screens/AuthScreen';
import RegisterationForm from '../Screens/RegisterationForm';
import ProfileScreen from '../Screens/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigation = () => {
  const navigation = useNavigation();
  const checkUser = async () => {
    const Id = await AsyncStorage.getItem('Id');
    if (Id) {
      console.log('====================================');
      console.log(Id);
      console.log('====================================');
      navigation.navigate('Profile');
    }

    else {
      console.log('====================================');
      console.log('No user found');
      console.log('====================================');
      navigation.navigate('Auth');
    }
  }
  useEffect(() => {
    checkUser();
  }, [])
  const Stack = createStackNavigator();

  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="RegisterationForm" component={RegisterationForm} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>

  );
};

const styles = StyleSheet.create({});

export default RootNavigation;
