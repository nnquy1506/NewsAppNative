//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalList from "./lists/HorizontalList";

// create a component
const TechNews = ({ data }) => {
  return <HorizontalList title="Công nghệ" data={data} />;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default TechNews;
