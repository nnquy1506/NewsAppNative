//import liraries
import React from "react";
import {StyleSheet } from "react-native";
import HorizontalList from "./lists/HorizontalList";

// create a component
const BreakingNews = ({ data }) => {
  return <HorizontalList title="Tin mới" data={data} />;
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default BreakingNews;
