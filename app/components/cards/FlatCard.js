//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import Subtitle from "../common/Subtitle";
import Title from "../common/Title";

// create a component
const FlatCard = ({item, onPress }) => {
  const { thumbnail, title, desc } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: thumbnail }} />
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
        <Subtitle>{desc}</Subtitle>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius:8,
        overflow: 'hidden',
        marginBottom:10,
        height: 80
    },
    image:{
        flex: 0.35,
        height: '100%'
    },
    contentContainer:{
        flex: 0.65,
        paddingHorizontal: 5
    }
});

//make this component available to the app
export default FlatCard;
