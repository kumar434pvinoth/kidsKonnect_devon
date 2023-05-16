import './ChildrenList.css';
import MainBanner from '../../../assets/images/bannerimg/main-banner-1.jpg';
import ListOfChildren from '../listOfChildren/ListOfChildren';
import Navigation from '../../../components/pages/navigation/Navigation';
import HomeHeader from '../../../components/pages/homeHeader/HomeHeader';


export default function ChildrenList() {
    return  (
        <>
        <HomeHeader />
        <Navigation />
        <div className='kidskonnect-main-banner'>
            <img src={MainBanner} alt="Main Banner" /> 
        </div>
        <ListOfChildren />
        </>
    )
}