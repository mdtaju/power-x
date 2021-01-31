import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Resources/Image & Icon/power-x-logo-01.png';
import CheckIcon from '@material-ui/icons/Check';
import Footer from '../Footer/Footer';
import './Pricing.css';

const Pricing = () => {
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
                                    <NavLink exact activeClassName='navbar_active_class' className="nav-link" to='/our-classes'>Our Classes</NavLink>
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
                    <h1 className='title_text'>PRICING PLANS</h1>
                </div>
            </div>
            <section className="pricingMainContainer">
                <div className="container">
                    <h1 className="title_text"><span className='color_title'>CHOOSE THE OFFER</span> THAT SUITS YOU</h1>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita</small>
                    <div className="pricingPlanRowContainer">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="pricingPlansOptions pricingPlansOptions01">
                                    <h6 className="title_text pricing_validDate_title">BILLED MONTHLY</h6>
                                    <h2 className="title_text">ADVANCE PLAN</h2>
                                    <h1 className="title_text pricing_price">$140</h1>
                                    <ul className="pricingOptionsList">
                                        <li><CheckIcon className='pricingCheckIcon' /> Mobile-Optimized</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Best Hosting</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Free Custom</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Outstanding</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Happy Customers</li>
                                    </ul>
                                    <Link to='/membership'><button className="small_btn">PURCHASE</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="pricingPlansOptions pricingPlansOptions02">
                                    <h6 className="title_text pricing_validDate_title">BILLED MONTHLY</h6>
                                    <h2 className="title_text">BASIC PLAN</h2>
                                    <h1 className="title_text pricing_price">$120</h1>
                                    <ul className="pricingOptionsList">
                                        <li><CheckIcon className='pricingCheckIcon' /> Mobile-Optimized</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Best Hosting</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Free Custom</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Outstanding</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Happy Customers</li>
                                    </ul>
                                    <Link to='/membership'><button className="small_btn">PURCHASE</button></Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 pricingCenter">
                                <div className="pricingPlansOptions pricingPlansOptions03">
                                    <h6 className="title_text pricing_validDate_title">BILLED MONTHLY</h6>
                                    <h2 className="title_text">BEGINNERS</h2>
                                    <h1 className="title_text pricing_price">$90</h1>
                                    <ul className="pricingOptionsList">
                                        <li><CheckIcon className='pricingCheckIcon' /> Mobile-Optimized</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Best Hosting</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Free Custom</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Outstanding</li>
                                        <li><CheckIcon className='pricingCheckIcon' /> Happy Customers</li>
                                    </ul>
                                    <Link to='/membership'><button className="small_btn">PURCHASE</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Pricing;