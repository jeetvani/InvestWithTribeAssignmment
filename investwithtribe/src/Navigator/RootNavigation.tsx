import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import AuthScreen from '../Screens/AuthScreen';
import RegisterationForm from '../Screens/RegisterationForm';
import ProfileScreen from '../Screens/ProfileScreen';

const RootNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="RegisterationForm" component={RegisterationForm} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default RootNavigation;
