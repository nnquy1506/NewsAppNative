//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";
import newsApi from '../../api/newsApi'
import { useNavigation } from "@react-navigation/native";
// create a component
const VerticalCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  const handleViewMore = async (category) => {
    const result = await newsApi.getByCategory(category);
    navigation.navigate("NewsList", result);
  };
  if (item.type === "viewMore") {
    return <ViewMore onPress={() => handleViewMore(item.category)}/>;
  }
  return <FlatCard item={item} onPress={onPress} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default VerticalCard;
