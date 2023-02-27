import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [name, setName] = useState('');
  const [pan, setPAN] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>{name}</Text>
      <Text style={styles.label}>PAN:</Text>
      <Text style={styles.value}>{pan}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{email}</Text>
      <Text style={styles.label}>Address:</Text>
      <Text style={styles.value}>{address}</Text>
      <PrimaryButton content='Log Out' />
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
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProfileScreen;
