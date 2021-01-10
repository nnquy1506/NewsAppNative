//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import VerticalList from "./lists/VerticalList";

// create a component
const PoliticalNews = ({ data }) => {
  return <VerticalList title="Chính trị" data={data} />;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default PoliticalNews;
