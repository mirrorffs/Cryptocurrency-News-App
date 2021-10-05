import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import useNews from '../../hooks/useNews';
import Screen from '../common/Screen';
import SearchBar from '../SearchBar';
import FeaturedNews from '../FeaturedNews';
import BreakingNews from '../BreakingNews';
import MiningNews from '../MiningNews';
import CryptoNews from '../CryptoNews';
import RegulationNews from '../RegulationNews';
import ActivityIndicator from '../common/ActivityIndicator';

const Home = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [
    featuredNews,
    miningNews,
    regulationNews,
    cryptoNews,
    breakingNews,
    loading,
  ] = useNews();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setSearchFocused={setSearchFocused} />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <MiningNews data={miningNews} />
        <CryptoNews data={cryptoNews} />
        <RegulationNews data={regulationNews} />
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
