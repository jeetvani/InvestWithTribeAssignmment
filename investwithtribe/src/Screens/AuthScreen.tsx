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
            .then((res) => {
                console.log(res.user);
                axiosClient.post('/checkUserExist').then((res) => {
                    console.log('====================================');
                    console.log(res.data);
                    console.log('====================================');
                })

                    .catch((err) => {
                        console.log(err);
                    });


                navigation.navigate('RegisterationForm', { user: res.user });
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
