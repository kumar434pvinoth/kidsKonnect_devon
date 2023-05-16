// import React  from 'react';
import './SessionsOverview.css';
import ListOfSessions from '../listOfSessions/ListOfSessions';
import MainBanner from '../../../assets/images/bannerimg/main-banner-1.jpg';
import Navigation from '../../../components/pages/navigation/Navigation';
import HomeHeader from '../../../components/pages/homeHeader/HomeHeader';


export default function SessionsOverview() {
    return  (
        <>
        <HomeHeader />
        <Navigation />
        <div className='ps-main-banner'>
            <img src={MainBanner} alt="Main Banner" /> 
        </div>
        <ListOfSessions />
        </>  
    )
}
