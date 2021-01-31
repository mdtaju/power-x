import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Logo from '../../Resources/Image & Icon/power-x-logo-01.png';
import './MemberShip.css';
import PersonalDetails from './PersonalDetails';
import Footer from '../Footer/Footer';
import BankPayment from './BankPayment';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Personal Details', 'Bank Payment', 'Membership Created'];
  }

const MemberShip = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [BtnBlock, SetBtnBlock] = useState({})
    const steps = getSteps();
    console.log(activeStep, steps)
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBlockBtn = () => {
        SetBtnBlock({
            display: 'none'
        })
    }

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
                    <h1 className='title_text'>YOUR GYM MEMBERSHIP</h1>
                </div>
            </div>
            <section className="membership_main_container">
                <div className="container">
                    <div className="membership_details_container">
                        <div className={classes.root}>
                            <Stepper activeStep={activeStep} alternativeLabel>
                                {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                                ))}
                            </Stepper>
                        </div>

                        {
                            activeStep === 0 && <PersonalDetails />
                        }

                        {
                            activeStep === 1 && <BankPayment />
                        }

                        {
                            activeStep === 2 && <div className="memberShipCreatedMainContainer">
                                <h1 className='title_text'>Press <span>'FINISH'</span> to successfully creat your membership</h1>
                            </div>
                        }

                        {
                            activeStep === 3 && <div className="memberShipCreatedMainContainer">
                                <h1 className="title_text"><span>Congratulation</span><br/>your membership has been successfully created</h1>
                            </div>
                        }

                        <div className='membership_nextBtn'>
                            {
                                activeStep !== steps.length - 1 ?
                                <button className='small_btn' style={BtnBlock} onClick={handleNext}>
                                    Next
                                </button> :
                                <button className='small_btn' onClick={() => {handleNext(); handleBlockBtn();}}>
                                    Finish
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MemberShip;