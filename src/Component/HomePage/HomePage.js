import React from 'react';
import Footer from '../Footer/Footer';
import HomePageAboutUs from './HomePageAboutUs/HomePageAboutUs';
import HomePageCategories from './HomePageCategories/HomePageCategories';
import HomePageSlider from './HomePageSlider/HomePageSlider';
import HomePageTrainingPrograms from './HomePageTrainingPrograms/HomePageTrainingPrograms';
import HomePageWhyChooseUs from './HomePageWhyChooseUs/HomePageWhyChooseUs';

const HomePage = () => {
    return (
        <>
            <HomePageSlider />
            <HomePageCategories />
            <HomePageAboutUs />
            <HomePageTrainingPrograms />
            <HomePageWhyChooseUs />
            <Footer />
        </>
    );
};

export default HomePage;