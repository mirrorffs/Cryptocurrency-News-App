import { useState, useEffect } from 'react';
import newsApi from '../api/newsApi';

const useNews = () => {
  const [featuredNews, setFeaturedNews] = useState({});
  const [breakingNews, setBreakingNews] = useState([]);
  const [miningNews, setMiningNews] = useState([]);
  const [cryptoNews, setCryptoNews] = useState([]);
  const [regulationNews, setRegulationNews] = useState([]);
  const qty = 5;
  const [loading, setLoading] = useState(false);

  const filterFeatured = data => {
    return data.filter(item => item.featured === 'on').reverse()[0];
  };

  const filterByCategory = (data, category) => {
    const result = data
      .filter(item => item.category === category)
      .reverse()
      .splice(0, qty);

    if (result.length) {
      result.push({ type: 'viewMore', category: category, id: category });
    }

    return result;
  };

  const filterMultipleNews = async () => {
    setLoading(true);
    const allNews = await newsApi.getAll();

    setFeaturedNews(filterFeatured(allNews));

    setBreakingNews(filterByCategory(allNews, 'breaking-news'));
    setMiningNews(filterByCategory(allNews, 'mining'));
    setRegulationNews(filterByCategory(allNews, 'regulation'));
    setCryptoNews(filterByCategory(allNews, 'crypto'));
    setLoading(false);
  };

  useEffect(() => {
    filterMultipleNews();
  }, []);

  return [
    featuredNews,
    miningNews,
    regulationNews,
    cryptoNews,
    breakingNews,
    loading,
  ];
};

export default useNews;
