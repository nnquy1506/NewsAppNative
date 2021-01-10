//import liraries
import React, { Component } from 'react';
import { Text } from 'react-native';

// create a component
const Subtitle = ({children,numberOfLines = 2, size = 15}) => {
    return (
        <Text style={{fontWeight:'bold', fontSize:size}} numberOfLines={numberOfLines}>{children}</Text>
    );
};


//make this component available to the app
export default Subtitle;
