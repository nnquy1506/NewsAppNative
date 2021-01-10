//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'
// create a component
const ActivityIndicator = ({visible}) => {
    if (!visible) {
        return null
    }
    return (
        <View style={styles.container}>
            <LottieView source={require('../../../assets/load.json')} autoPlay loop />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center',
        zIndex: 1,
    },
});

//make this component available to the app
export default ActivityIndicator;
