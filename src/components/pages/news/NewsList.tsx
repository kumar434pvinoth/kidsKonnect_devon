import './NewsList.css';
import MainBanner from '../../../assets/images/bannerimg/main-banner-1.jpg';
import ListOfNews from '../listOfNews/ListOfNews';
import Navigation from '../../../components/pages/navigation/Navigation';
import HomeHeader from '../../../components/pages/homeHeader/HomeHeader';


export default function NewsList() {
    return  (
        <>
        <HomeHeader />
        <Navigation />
        <div className='kidskonnect-main-banner'>
            <img src={MainBanner} alt="Main Banner" /> 
        </div>
        <ListOfNews />
        </>
    )
}
