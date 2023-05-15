import './NewsList.css';
import MainBanner from '../../../assets/images/bannerimg/main-banner-1.jpg';
import ListOfNews from '../listOfNews/ListOfNews';

export default function NewsList() {
    return  (
        <>
        <div className='kidskonnect-main-banner'>
            <img src={MainBanner} alt="Main Banner" /> 
        </div>
        <ListOfNews />
        </>
    )
}
