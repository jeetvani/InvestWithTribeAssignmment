import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import PrimaryButton from '../Components/PrimaryButton';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import axiosClient from '../Api/axiosClient';


interface AuthScreenProps {
    style?: ViewStyle;
}

export default function AuthScreen(props: AuthScreenProps): JSX.Element {

    const navigation = useNavigation();
    const googleSignIn = () => {
        console.log('Sign in with google');
        GoogleSignin.configure({
            webClientId: '604668627496-a06rnpnjbc4doaep1g5gqmsamiha438o.apps.googleusercontent.com',
        });

        GoogleSignin.signIn()
            .then(async (res) => {
                console.log(res.user);
                await axiosClient.post('/checkUserExist', {
                    email: res.user.email,
                }).then(async (response) => {
                    console.log('====================================');
                    console.log(response.data);
                    console.log('====================================');
                    const userExist = response.data.userExist;
                    if (userExist) {
                        await AsyncStorage.setItem('Id', response.data.userData.Id);
                        navigation.navigate('Profile');

                    }
                    if (!userExist) {
                        navigation.navigate('RegisterationForm', { user: res.user });
                    }
                })

                    .catch((err) => {
                        console.log(err);
                    });



            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                GoogleSignin.signOut();
            });
    };

    return (
        <View style={[styles.container, props.style]}>
            <Text style={styles.title}>Invest With Tribe</Text>
            <View style={styles.buttonContainer}>
                <PrimaryButton content="Sign In With Google" onPress={googleSignIn} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginHorizontal: 10,
        marginVertical: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
    },
    buttonContainer: {
        marginTop: 20,
    },
});
