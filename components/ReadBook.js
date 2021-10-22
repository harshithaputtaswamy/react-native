import React from 'react';
import { StyleSheet, Dimensions, View, Button, Text } from 'react-native';
import Constants from 'expo-constants';
import {ProgressView} from "@react-native-community/progress-view";
import {ProgressBar} from '@react-native-community/progress-bar-android';
import Pdf from 'react-native-pdf';
import PDFReader from 'rn-pdf-reader-js';
// import {WebView} from 'react-native-webview'

const ReadBook = ({ navigation, route }) => {
    console.log(route.params, "@#$%^&*()!@#$%^&*(")
    return (
        <View style={styles.container}>
            <PDFReader
            source={{
                uri: route.params.url,
            }}
            webviewProps={{
                startInLoadingState: true,
            }}
            style={{height: 500, width: '100%'}}
            />
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
  });

export default ReadBook