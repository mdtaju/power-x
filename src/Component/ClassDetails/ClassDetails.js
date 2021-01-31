import React from 'react';
import { useParams } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Resources/Image & Icon/power-x-logo-01.png'
import ClassInformation from '../../Resources/Data';
import Footer from '../Footer/Footer';
import CheckBox from '../../Resources/Image & Icon/checkmark-square-2.png';
import './ClassDetails.css';

const ClassDetails = () => {
    const {ClassParameter} = useParams()
    const Information = ClassInformation.find(item => item.id === ClassParameter);
    console.log(Information)
    return (
        <>
            <div className="globalSlider_main_container">
                <div className="container homePageSlider_main_aria">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar_main_aria">
                        <Link className="navbar-brand" to='/'>
                            <img src={Logo} alt="POWER-X"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink exact activeClassName='navbar_active_class' className="nav-link" to='/'>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName='navbar_active_class' className="nav-link" to='/our-classes'><span className='ourClassesNavLink'>Our Classes</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName='navbar_active_class' className="nav-link" to='/pricing'>Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact activeClassName='navbar_active_class' className="nav-link" to='/membership'>Membership</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <h1 className='title_text'>{Information.title}</h1>
                </div>
            </div>
            <section className="classDetailsMainContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className='classDetailsImageAria'>
                                <img src={Information.image} alt="Class"/>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div>
                                <h2 className="title_text classDetailsTitle"><span>Class</span> Schedule</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="classDetailsSchedule">
                                            <h5>MONDAY</h5>
                                            <span>8:00 AM - 9:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="classDetailsSchedule">
                                            <h5>TUESDAY</h5>
                                            <span>10:00 AM - 11:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="classDetailsSchedule">
                                            <h5>WEDNESDAY</h5>
                                            <span>7:00 AM - 8:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="classDetailsSchedule">
                                            <h5>THURSDAY</h5>
                                            <span>5:00 PM - 6:00 PM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="classDetailsSchedule">
                                            <h5>FRIDAY</h5>
                                            <span>6:00 AM - 7:00 AM</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="classDetailsSchedule">
                                            <h5>SATURDAY</h5>
                                            <span>7:00 PM - 8:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 col-md-12 classDetailsDescription">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, aperiam nobis vero dignissimos earum, esse reprehenderit laudantium, consequuntur repellendus maxime ratione est eaque autem error odit! Vero architecto magni labore iusto ipsa nulla et, aperiam tempore rerum sunt culpa, praesentium dolore? Assumenda vitae maiores dolorum? Ducimus ipsam aut amet in!</p>
                        </div>
                    </div>
                    <div className="classDetailsTopicsContainer">
                        <ul className="classDetailsTopics">
                            <li><img src={CheckBox} alt="CheckBox"/>Having Slimmer Shapely Thighs</li>
                            <li><img src={CheckBox} alt="CheckBox"/>Getting Stronger Body</li>
                            <li><img src={CheckBox} alt="CheckBox"/>Increased Metabolism</li>
                            <li><img src={CheckBox} alt="CheckBox"/>Increased Muscular Endurance</li>
                            <li><img src={CheckBox} alt="CheckBox"/>Maximum Results in Less Time</li>
                            <li><img src={CheckBox} alt="CheckBox"/>Firm Hips and Tummy</li>
                        </ul>
                        <Link to='/pricing'><button className="small_btn">JOIN US</button></Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ClassDetails;