import React from 'react';

const PersonalDetails = () => {
    return (
        <>
            <div className="PersonalDetails_main_container">
                <form action="" className="row">
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsFirstName">First Name</label>
                        <input type="text" id='PDetailsFirstName' className="form-control"/>
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsLastName">Last Name</label>
                        <input type="text" id='PDetailsLastName' className="form-control"/>
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsEmail">Email</label>
                        <input type="email" id='PDetailsEmail' className="form-control"/>
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsMobileNumber">Mobile Number</label>
                        <input type="number" id='PDetailsMobileNumber' className="form-control"/>
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsDateOfBirth">Date of Birth</label>
                        <input type="date" name="" id="PDetailsDateOfBirth" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsGender">Gender</label>
                        <select name="" id="PDetailsGender" className='form-control' >
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsAddressLineOne">Address Line 1:</label>
                        <input type="text" name="" id="PDetailsAddressLineOne" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsCountry">Country/Region:</label>
                        <input type="text" name="" id="PDetailsCountry" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsCity">City:</label>
                        <input type="text" name="" id="PDetailsCity" className='form-control' />
                    </div>
                    <div className="col-md-6 col-sm-12 PersonalDetailsInputContainer">
                        <label htmlFor="PDetailsPostCode">Postcode:</label>
                        <input type="text" name="" id="PDetailsPostCode" className='form-control' />
                    </div>
                </form>
            </div>
        </>
    );
};

export default PersonalDetails;