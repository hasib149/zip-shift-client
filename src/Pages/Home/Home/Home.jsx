import React from "react";
import Banner from "../Banner/Banner";
import Work from "../Work/Work";
import OurService from "../Service/OurService";
import SalesTEAM from "../SalesTeam/SalesTEAM.JSX";
import Review from "../Review/Review";
import Parsel from "../Parsel/Parsel";
import Marcent from "../Marcent/Marcent";

const reviewData = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Work></Work>
      <OurService></OurService>
      <SalesTEAM></SalesTEAM>
      <Parsel></Parsel>
      <Marcent></Marcent>
      <Review reviewData={reviewData}></Review>
    </div>
  );
};

export default Home;
