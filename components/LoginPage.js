import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import login_details from '../assets/login_details'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01485a',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        width: '90%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ffffff",
        borderBottomWidth: 1,
        color: 'white',
        fontSize: 20,
        // outlineColor: 'transparent'
    },
});

const LoginPage = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const userLogin = () => {
        console.log(userName, password)
        if (login_details.hasOwnProperty(userName)){
            if (login_details[userName].password !== password){
                alert('Password is incorrect, please try again later')
            } 
            else{
                navigation.navigate('UserBooks', { name: userName })
            }
        }
        else{
            alert("Username doesn't exist")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                placeholder="Username"
                placeholderTextColor="grey"
                onChangeText={(val) => setUserName(val)}
            />
            <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                placeholderTextColor="grey"
                onChangeText={(val) => setPassword(val)}
                maxLength={15}
                secureTextEntry={true}
            />   
            <Button
                color="coral"
                title="Login"
                onPress={() => userLogin()}
            />   
        </View>
    )
}

export default LoginPage;