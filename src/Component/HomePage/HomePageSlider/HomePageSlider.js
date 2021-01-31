import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../Resources/Image & Icon/power-x-logo-01.png';
import VideoX from '../../../Resources/Image & Icon/POWER-X.mp4';
import ReactPlayer from 'react-player'
import './HomePageSlider.css';

const HomePageSlider = () => {
    return (
        <>
            <div className="homePageSlider_main_container">
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
                    <div className="row homePage_slider_titleAria_container">
                        <div className="col-lg-6 col-md-12 homePage_slider_titleAria">
                            <div>
                                <h1 className='title_text homePage_slider_title'>THE BEST FITNESS STUDIO IN TOWN</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic debitis ducimus ipsam, molestias expedita officia. Dolore voluptatem facilis voluptas reprehenderit blanditiis quas delectus aperiam, minima voluptate sit dolorum exercitationem quidem!</p>
                                <Link to='/pricing'><button className="small_btn">JOIN US</button></Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div>
                                <ReactPlayer
                                    className='react-player'
                                    url={VideoX}
                                    controls
                                    config={{ file: { 
                                        attributes: {
                                          controlsList: 'nodownload'
                                        }
                                      }}}
                                    light
                                    width='100%'
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePageSlider;