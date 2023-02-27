import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import PrimaryButton from '../Components/PrimaryButton';
import axiosClient from '../Api/axiosClient';

interface UserData {
  Name: string;
  PAN: string;
  Email: string;
  Address: string;
}

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const navigation = useNavigation();

  const getUserDetails = async () => {
    const id = await AsyncStorage.getItem('Id');
    const response = await axiosClient.post<{ userData: UserData }>('/LoginUser', {
      Id: id,
    });
    setUserData(response.data.userData);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('Id');
    navigation.navigate('Auth');
  };

  if (!userData) {
    return null; // or render a loader
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userData.Name}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>PAN:</Text>
        <Text style={styles.value}>{userData.PAN}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{userData.Email}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.value}>{userData.Address}</Text>
      </View>
      <PrimaryButton onPress={handleLogout} content='Log Out' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  value: {
    fontSize: 16,
  },
});

export default ProfileScreen;
