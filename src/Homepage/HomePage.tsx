import React from "react";
import Navbar from "../assets/Components/Navbar/Navbar";
import Hero from "../assets/Components/Hero/Hero";
import Goods from "../assets/Components/Goods/Goods";
import Trendingproducts from "../assets/Components/Trendingproducts/Trendingproducts";
import CustomersReview from "../assets/Components/CustomersReview/CustomersReview";
import Footer from "../assets/Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Goods />
      <Trendingproducts />
      <CustomersReview />
      <Footer />
    </div>
  );
};

export default HomePage;
