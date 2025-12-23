// pages/HomePage.jsx
import React from 'react';
import ProductList from '../components/Product/ProductList';
import Banner from '../components/Banner/Banner';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <Banner />
      <ProductList />
    </div>
  );
};

export default HomePage;