//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";

// create a component
const Screen = ({ children, isSearchFocused }) => {
  const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never'
  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      
      scrollEnabled={!isSearchFocused}
      style={styles.container}
    >
      {children}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
  },
});

//make this component available to the app
export default Screen;
