import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../Resources/Image & Icon/power-x-logo-01.png';
import './GlobalSlider.css';

const GlobalSlider = () => {
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
                    <h1 className='title_text'>OUR CLASSES</h1>
                </div>
            </div>
        </>
    );
};

export default GlobalSlider;