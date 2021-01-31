import React from 'react';
import './HomePageTrainingPrograms.css';

const HomePageTrainingPrograms = () => {
    return (
        <>
            <section className="homePage_trainingPrograms_mainContainer">
                <div className="container">
                    <h1 className='title_text training_programs_title'>TRAINING <span>PROGRAMS</span></h1>
                    <div className="row">
                        <div className="col-md-6">
                            <div className='homePage_trainingImage homePage_trainingImage_01'>
                                <div className='homePage_trainingImage_subContainer'>
                                    <h2 className='title_text'>YOGA TRAINING SESSION</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className='homePage_trainingImage homePage_trainingImage_02'>
                                <div className='homePage_trainingImage_subContainer'>
                                    <h2 className='title_text'>CARDIO TRAINING SESSION</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePageTrainingPrograms;