//import liraries
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  useWindowDimensions 
} from "react-native";
import newsApi from "../../api/newsApi";
import Close from "../common/Close";
import HorizontalList from "../lists/HorizontalList";

import { useNavigation } from "@react-navigation/native";
import ActivityIndicator from "../common/ActivityIndicator";
import HTML from 'react-native-render-html'
const { width, height } = Dimensions.get("window");
// create a component
const NewDetail = ({ route }) => {
  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);
  const { _id: postId, category: postCategory } = route.params.item;
  const [loading, setLoading] = useState(false)
  const getPost = async (_id) => {
    setLoading(true)
    const result = await newsApi.getSingle(_id);
    setNews(result);
  };

  const getRelatedPosts = async (category) => {
    const result = await newsApi.getByCategory(postCategory, 6);
    setRelatedNews(result.filter((item) => item._id !== postId));
    setLoading(false)
  };
  useEffect(() => {
    getPost(postId);
    getRelatedPosts(postCategory);
  }, []);
  const navigation = useNavigation();
  const { title, content, thumbnail } = news;
  const contentWidth = useWindowDimensions().width;
  return (
    <>
      <ActivityIndicator visible={loading} />
      <ScrollView>
        <Image style={styles.image} source={{ uri: thumbnail }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.content}>{content}</Text> */}
          <HTML   source={{ html: content }} contentWidth={contentWidth} />
        </View>
        <View style={styles.relatedPostContainer}>
          <HorizontalList data={relatedNews} title="Bài đăng liên quan" />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  image: {
    width: width,
    height: height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
  relatedPostContainer: {
    padding: 10,
  },
});

//make this component available to the app
export default NewDetail;
