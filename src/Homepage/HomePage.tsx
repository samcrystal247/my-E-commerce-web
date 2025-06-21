import React from "react";
import Navbar from "../assets/Components/Navbar/Navbar";
import Hero from "../assets/Components/Hero/Hero";
import Goods from "../assets/Components/Goods/Goods";
import Trendingproducts from "../assets/Components/Trendingproducts/Trendingproducts";
import CustomersReview from "../assets/Components/CustomersReview/CustomersReview";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goods />
      <Trendingproducts />
      <CustomersReview />
    </div>
  );
};

export default HomePage;
