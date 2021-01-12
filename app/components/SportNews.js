//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalList from "./lists/HorizontalList";
import VerticalList from "./lists/VerticalList";

// create a component
const SportNews = ({ data }) => {
  return <VerticalList title="Thể thao" data={data} />;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default SportNews;
