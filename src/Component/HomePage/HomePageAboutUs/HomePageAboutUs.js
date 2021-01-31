import React from 'react';
import AboutUsImage from '../../../Resources/Image & Icon/about-us.jpg';
import './HomePageAboutUs.css';

const HomePageAboutUs = () => {
    return (
        <>
            <section className="homePage_aboutUs_mainContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className='aboutUs_image_aria'>
                                <img src={AboutUsImage} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className='aboutUs_text_aria'>
                                <h1 className='title_text aboutUs_title'>ABOUT US</h1>
                                <h1 className='title_text aboutUs_dream'>WE ARE HERE TO DREAM!</h1>
                                <h1 className='title_text'>OUR TEAM IS HERE SURVE YOU.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas omnis, voluptatibus quidem explicabo facilis ea sunt sequi dignissimos maxime molestias. Libero, tempore in. Expedita libero molestias blanditiis sed, possimus laborum, eaque recusandae consectetur eum quaerat quos? Magnam quam unde eligendi!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePageAboutUs;