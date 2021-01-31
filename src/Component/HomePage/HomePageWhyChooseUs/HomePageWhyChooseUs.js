import React from 'react';
import ImageOne from '../../../Resources/Image & Icon/Group 87.png';
import ImageTwo from '../../../Resources/Image & Icon/Group 88.png';
import ImageTree from '../../../Resources/Image & Icon/gift-2.png';
import './HomePageWhyChooseUs.css';

const HomePageWhyChooseUs = () => {
    return (
        <>
            <section className="homePage_whyChooseUs_mainContainer">
                <div className="container">
                    <h1 className="title_text homePage_whyChooseUs_title"><span>WHY</span> CHOOSE US</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className='homePage_whyChooseUs_categories'>
                                <div className="homePage_whyChooseUs_image">
                                    <img src={ImageOne} alt=""/>
                                </div>
                                <h3 className='title_text'>FREE FITNESS TRAINING</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum eum ipsum dolores</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className='homePage_whyChooseUs_categories'>
                                <div className="homePage_whyChooseUs_image">
                                    <img src={ImageTwo} alt=""/>
                                </div>
                                <h3 className='title_text'>TONS OF CARDIO & STRENGTH</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum eum ipsum dolores</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 homePage_whyChooseUs_categoriesTree">
                            <div className='homePage_whyChooseUs_categories'>
                                <div className="homePage_whyChooseUs_image">
                                    <img src={ImageTree} alt=""/>
                                </div>
                                <h3 className='title_text'>NO COMMITMENT MEMBERSHIP</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis nostrum eum ipsum dolores</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePageWhyChooseUs;