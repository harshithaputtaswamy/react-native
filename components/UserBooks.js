import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import login_details from '../assets/login_details'

const styles = StyleSheet.create({
    textStyle: {
        // flex: 1,
        padding: 20,
        backgroundColor: 'oldlace',
        color: 'black'
    }
})

const UserBooks = ({ navigation, route }) => {
    var userBooks = []
    if (login_details.hasOwnProperty(route.params.name))
        userBooks = login_details[route.params.name]['books']
    return (
        <View>
            <Text style={styles.textStyle}>The books in {route.params.name}'s profile are</Text>
            {
                userBooks.map((book, idx) => {
                    return <Text style={styles.textStyle} key={idx}>{book}</Text>
                })
            }
        </View>
    )
}

export default UserBooks;