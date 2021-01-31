import React from 'react';
import Logo from '../../Resources/Image & Icon/power-x-logo-01.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer_main_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 footer_section">
                            <div>
                                <img src={Logo} alt="Logo"/>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer_section">
                            <div>
                                <ul className='footer_list'>
                                    <li className='footer_list_firstItem'>Need Help?</li>
                                    <li>Help Center</li>
                                    <li>Email Support</li>
                                    <li>Live</li>
                                    <li>Gift Certificates</li>
                                    <li>Send Us Feedback</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer_section">
                            <div>
                                <ul className='footer_list'>
                                    <li className='footer_list_firstItem'>Digital Resources</li>
                                    <li>Articles</li>
                                    <li>E-books</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 footer_section">
                            <div>
                                <ul className='footer_list'>
                                    <li className='footer_list_firstItem'>Connect With Us</li>
                                        <YouTubeIcon className='footer_icon footer_youTube' /> <FacebookIcon className='footer_icon footer_faceBook'/> 
                                        <InstagramIcon className='footer_icon footer_Instagram'/> <TwitterIcon className='footer_icon footer_twitter'/> <WhatsAppIcon className='footer_icon footer_whatsApp'/>
                                    <li>Forum</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 footer_section">
                            <div>
                                <ul className='footer_list'>
                                    <li className='footer_list_firstItem'>Join Our Newsletter</li>
                                    <li>Get exclusive news, features, and updates from the Shredder Weight Loss Academy.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className='footer_copyRight'>&copy; 2021 Power X. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;