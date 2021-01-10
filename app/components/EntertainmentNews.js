//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import VerticalList from "./lists/VerticalList";

// create a component
const EntertainmentNews = ({ data }) => {
  return <VerticalList title="Giải trí" data={data} />;
  
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default EntertainmentNews;
