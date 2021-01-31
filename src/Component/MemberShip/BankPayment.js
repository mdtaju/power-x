import React from 'react';
import MasterCard from '../../Resources/Image & Icon/credit-cards_mastercard.png';
import VisaCard from '../../Resources/Image & Icon/credit-cards_visa.png';
import AmexCard from '../../Resources/Image & Icon/credit-cards_amex.png';
import PayPal from '../../Resources/Image & Icon/Bitmap.png';

const BankPayment = () => {
    return (
        <>
            <div className="bankPayment_parent_container">
                <div className="creditCardMainContainer">

                    <div className="row">
                        <div className="inputLabelAria col-lg-8 col-md-6">
                            <input type="radio" name="Radio" id="CreditCardInput" defaultChecked/>
                            <label htmlFor="CreditCardInput" className="radio__custom">Credit Cart</label>
                            <p className='input__information'>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express</p>
                        </div>

                        <div className="col-lg-4 col-md-6  d-flex justify-content-end">
                            <div className="creditCartImgAria">
                                <img src={MasterCard} alt="MasterCard"/>
                                <img src={VisaCard} alt="VisaCard"/>
                                <img src={AmexCard} alt="AmexCard"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 cardNumberContainer">
                            <label htmlFor="cardNumberInput" className='cardInputLabel'>CARD NUMBER</label>
                            <input type="text" id='cardNumberInput' placeholder='0000 0000 0000 0000' className='form-control card__input'/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-4 cardNameContainer">
                            <label htmlFor="cardNameInput" className='cardInputLabel'>NAME ON CARD</label>
                            <input type="text" name="cardName" id="cardNameInput" className='form-control card__input'/>
                        </div>
                        <div className="col-lg-3 col-md-4 cardNameContainer">
                            <label htmlFor="cardDateInput" className='cardInputLabel'>EXPIRY DATE</label>
                            <input type="date" name="expiryDate" id="cardDateInput" className='form-control card__input'/>
                        </div>
                        <div className="col-lg-3 col-md-4 cardNameContainer">
                            <label htmlFor="cardCVVCode" className='cardInputLabel'>CVV CODE</label>
                            <input type="number" name="CVVNumber" id="cardCVVCode" className='form-control card__input'/>
                        </div>
                    </div>

                </div>

                <div className="payPalMainContainer">
                    <div className="row">
                        <div className="inputLabelAria col-md-8">
                            <input type="radio" name="Radio" id="PayPalInput"/>
                            <label htmlFor="PayPalInput" className="radio__custom">PayPal</label>
                            <p className='input__information'>You will be redirected PayPal website to compleat your purchase securely</p>
                        </div>
                        <div className="col-md-4 payPalImgAria d-flex justify-content-end">
                            <div>
                            <img src={PayPal} alt="PayPal"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BankPayment;