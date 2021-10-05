import React from 'react';
import { View, StyleSheet } from 'react-native';
import HorizotalList from './lists/HorizotalList';

const CryptoNews = ({ data }) => {
  return <HorizotalList title='Cryptocurrency News' data={data} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default CryptoNews;
