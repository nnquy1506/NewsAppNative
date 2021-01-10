//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalList from "./lists/HorizontalList";

// create a component
const BreakingNews = ({ data }) => {
  return <HorizontalList title="Tin nóng" data={data} />;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default BreakingNews;
