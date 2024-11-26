import React, { useState, useEffect } from 'react';
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav"
import ResponsiveSideBar from "../../components/ResponseSideBar/ResponseSideBar"
import { Helmet } from "react-helmet"
import ChooseUs from "../../components/ChooseUs/ChooseUs"
import FreePlan from "../../components/FreePlan/FreePlan"
import Footer from "../../components/Footer/Footer"
import ScrollTopBtn from "../../components/ScrollTopBtn/ScrollTopBtn"
 



export default function Index() {



  
    return (
    <>
    <Helmet>
        <title>دیجی موویز ، بروزترین مرجع فیلم و سریال</title>
    </Helmet>
      <Header />
      <Main />
      <ChooseUs />
      <FreePlan />
      <Footer />
      <ScrollTopBtn />
      <ResponsiveSideBar />
      <ResponsiveNav />
    </>
    );
  };
  
  




