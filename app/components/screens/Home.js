//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useNews from "../../hooks/useNews";

import BreakingNews from "../BreakingNews";
import EntertainmentNews from "../EntertainmentNews";
import FeaturedNews from "../FeaturedNews";
import PoliticalNews from "../PoliticalNews";
import Screen from "../common/Screen";
import SearchBar from "../SearchBar";
import TechNews from "../TechNews";
import ActivityIndicator from "../common/ActivityIndicator";
// create a component
const Home = () => {
  const [isSearchFocused, setSearchFocused] = useState(false)
  const [
    featureNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
    loading,
  ] = useNews();
  return (
    <>
    <ActivityIndicator visible={loading}/>
    <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setSearchFocused={setSearchFocused}/>
        <FeaturedNews item={featureNews}/>
        <BreakingNews data={breakingNews}/>
        <PoliticalNews data={politicalNews}/>
        <TechNews data={techNews}/>
        <EntertainmentNews data={entertainmentNews}/>
    </Screen>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default Home;
