import React from 'react';
import { Link } from 'react-router-dom';

const OurClassesOptionChild = (props) => {
    const ClassItem = props.Item;
    // let { path, url } = useRouteMatch();
    const ClassBgImg = {
        backgroundImage: `url(${ClassItem.image})`
    }
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="ourClassesCategories" style={ClassBgImg}>
                    <div className='ourClassCategoriesBtn'>
                        <Link className='ourClassCategoriesChildLink' to={`/our-classes/class/${ClassItem.id}`}>
                            <h2 className='title_text'>{ClassItem.title}</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurClassesOptionChild;