import React from 'react';
import CategoriesImage1 from '../../../Resources/Image & Icon/Group 80.png';
import CategoriesImage2 from '../../../Resources/Image & Icon/Group 81.png';
import CategoriesImage3 from '../../../Resources/Image & Icon/Group 82.png';
import './HomePageCategories.css';

const HomePageCategories = () => {
    return (
        <>
            <section className="homePage_categories_mainContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='homePage_categories homePage_categories_progression'>
                                <div className="homePage_categories_image">
                                    <img src={CategoriesImage1} alt="PROGRESSION"/>
                                </div>
                                <h1 className='title_text'>PROGRESSION</h1>
                                <p className='description_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi quam voluptate minus obcaecati modi porro tenetur fuga in dolores?</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className='homePage_categories homePage_categories_workout'>
                                <div className="homePage_categories_image2">
                                    <img src={CategoriesImage2} alt="PROGRESSION"/>
                                </div>
                                <h1 className='title_text'>WORKOUT</h1>
                                <p className='description_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi quam voluptate minus obcaecati modi porro tenetur fuga in dolores?</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 homePage_categories_itemCenter">
                            <div className='homePage_categories homePage_categories_nutrition'>
                                <div className="homePage_categories_image">
                                    <img src={CategoriesImage3} alt="PROGRESSION"/>
                                </div>
                                <h1 className='title_text'>NUTRITION</h1>
                                <p className='description_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi quam voluptate minus obcaecati modi porro tenetur fuga in dolores?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    );
};

export default HomePageCategories;