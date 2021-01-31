import React, { useState } from 'react';
import ClassInformation from '../../../Resources/Data';
import './OurClassesOption.css';
import OurClassesOptionChild from './OurClassesOptionChild';

const OurClassesOption = () => {
    const [ClassInfo, SetClassInfo] = useState(ClassInformation);
    return (
        <>
            <section className="ourClassesOption_main_container">
                <div className="container">
                    <div className="row">
                        {
                            ClassInfo.map(ClassItem => <OurClassesOptionChild key={ClassItem.id} Item={ClassItem} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurClassesOption;