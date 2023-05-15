import './ChildrenList.css';
import MainBanner from '../../../assets/images/bannerimg/main-banner-1.jpg';
import ListOfChildren from '../listOfChildren/ListOfChildren';

export default function ChildrenList() {
    return  (
        <>
        <div className='kidskonnect-main-banner'>
            <img src={MainBanner} alt="Main Banner" /> 
        </div>
        <ListOfChildren />
        </>
    )
}