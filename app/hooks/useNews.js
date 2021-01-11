import { useState, useEffect } from "react";
import newsApi from "../api/newsApi";
export default useNews = () => {
  const [featureNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [politicalNews, setPoliticalNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const qty = 5;
  const [loading, setLoading] = useState(false)

  const filterFeatured = (data) => {
    return [...data].filter((item) => item.featured === "on").reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = data
      .filter((item) => item.category === category)
      .reverse()
      .splice(0, qty);

      if(result.length){
        result.push({type: 'viewMore', category: category, _id: category})
      }
    return result;
  };
  const filterMultipleNews = async () => {
    setLoading(true)
    const allNews = await newsApi.getAll();
    setFeaturedNews(filterFeatured(allNews));
    setBreakingNews(filterByCategory(allNews, "tin nóng"));
    setTechNews(filterByCategory(allNews, "công nghệ"));
    setPoliticalNews(filterByCategory(allNews, "chính trị"));
    setEntertainmentNews(filterByCategory(allNews, "giải trí"));
    setLoading(false)
  };
  useEffect(() => {
    filterMultipleNews();
  }, []);
  return [
    featureNews,
    breakingNews,
    politicalNews,
    techNews,
    entertainmentNews,
    loading
  ];
};
