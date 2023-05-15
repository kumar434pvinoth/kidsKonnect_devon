// import React  from 'react';
import './SessionsOverview.css';
import ListOfSessions from '../listOfSessions/ListOfSessions';
import MainBanner from '../../../assets/images/bannerimg/main-banner-1.jpg';


export default function SessionsOverview() {
    return  (
        <>
        <div className='ps-main-banner'>
            <img src={MainBanner} alt="Main Banner" /> 
        </div>
        <ListOfSessions />
        </>  
    )
}
