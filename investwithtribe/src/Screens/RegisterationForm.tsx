import React from 'react';
import { View, StyleSheet } from 'react-native';
import FormInput from '../Components/FormInput';
import PrimaryButton from '../Components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';

interface RegistrationFormProps { }

const RegistrationForm: React.FC<RegistrationFormProps> = ({ route }) => {

  const navigation = useNavigation()
  const user = route.params.user;

  const email = user.email;
  const registerUser = () => {
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <FormInput label="Name" style={styles.input} />
      <FormInput label="Address" style={styles.input} />
      <FormInput label="PAN Card Number" style={styles.input} />

      <FormInput value={email} disabled label="Email" style={styles.input} />
      <PrimaryButton
        onPress={registerUser}

        content='Register' style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
});

export default RegistrationForm;
