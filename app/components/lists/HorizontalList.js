//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SmallCard from "../cards/SmallCard";
import Title from "../common/Title";
import { useNavigation } from "@react-navigation/native";

// create a component
const HorizontalList = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <>
      <Title size={20}>{title}</Title>
      <View style={styles.listStyle}>
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SmallCard
              onPress={() => navigation.push("NewsDetail", { item })}
              item={item}
            />
          )}
        />
      </View>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  listStyle: {
    marginVertical: 15,
  },
});

//make this component available to the app
export default HorizontalList;
