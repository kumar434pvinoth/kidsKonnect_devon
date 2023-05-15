import React, {useState, useEffect, }  from 'react';
import './ListOfSessions.css';
import Axios from 'axios';
import ProgressBar from '../../ui/ProgressBar';
import SortSelectBox from '../../ui/SortSelectBox';      
import Button from '@mui/material/Button';
import EmptyList from '../../../assets/images/empty-list.jpeg';
import BabyPic from '../../../assets/images/babypic.jpeg';
import { IKidsKonnectData, } from '../../../globals/types';


export default function ListOfSessions() {

  const [kidsKonnectData, setKidsKonnectData] = useState([]);
  const [kidsKonnectDataGroup, setKidsKonnectDataGroup] = useState([]);
  const [kidsKonnectGroupeFilter, setKidsKonnectGroupeFilter] = useState([]);
  const [kidsKonnectGroupeTwo, setKidsKonnectGroupeTwo] = useState(false);
  const [progressBar, setProgressBar] = useState(false);



  const getSessionUrl = 'http://localhost:3001/sessions/';

  const handleChangeGroupeCallBack = (getGroupeName) => {
    setProgressBar(true);
    if(getGroupeName !== 'none') {
      setKidsKonnectGroupeTwo(true);
      let filteredGroupe = kidsKonnectData.filter((item: any , index) => {
        return item.group.name === getGroupeName;
      });
      setKidsKonnectGroupeFilter(filteredGroupe);
      setTimeout(() => {
        setProgressBar(false)
      }, 500)
    } else if(getGroupeName === 'none') {
        setKidsKonnectGroupeTwo(false);
        setKidsKonnectData(kidsKonnectData);
        setTimeout(() => {
          setProgressBar(false)
        }, 500)
      }
    } 

  useEffect(() => {
    Axios.get(getSessionUrl).then((res) => {
      setKidsKonnectData(res.data);
      const kidsGroupList = ['grp -1', 'grp -2 '];
      // res.data.filter((item, index) => {
      //   kidsGroupList.push(item.group.name);
      // });
      // setKidsKonnectDataGroup(kidsGroupList);
      // setKidsKonnectGroupeFilter(kidsGroupList);
      console.log(kidsKonnectDataGroup);

    }).catch((err) => console.log(err));    
  }, []);
    return  (
        <>
            {progressBar && <ProgressBar message={'Loading Groups....'} /> }
            <div className="listofsession-wrapper-recomentation">
                <div className='listofsession-header'>
                        <h6>List Of Sessions</h6>
                        <div className="filterSessionByGrp">
                            <SortSelectBox setProgressBar={setProgressBar} handleChangeGroupeCallBack={handleChangeGroupeCallBack} groupeList={kidsKonnectDataGroup}/>
                        </div>
                </div>
                <div className='listofsession-content'>
                {kidsKonnectGroupeTwo ? kidsKonnectGroupeFilter.length > 0 ? kidsKonnectGroupeFilter.map((item: IKidsKonnectData, index) => {
                  return (
                    <div key={item.id} className='listofsession-card'>
                      <div className='listofsession-card-lft'>
                        <img src={BabyPic} />``
                      </div>
                      <div className='listofsession-card-rgt'>
                        <div className='listofsession-card-prdname'>
                          <div><b>Product Name:</b> {item.product_name}</div>
                          <div className='presence-status'>
                          <b>Status</b>  <Button> presence</Button>
                          </div>
                        </div>
                        <div className='listofsession-card-date'>
                          <div><b>Date:</b> {item.day}</div>
                          <div><b>Time Duration:</b> {item.start_time} - {item.end_time}</div>
                          <div><b>Group:</b> {item.group.name}</div>
                        </div> 
                      </div>
                    </div>
                     )}) : <div className='dataNotExist'>
                            <img src={EmptyList} />
                            <h2> There is no List of Data!</h2>
                           </div>  :  kidsKonnectData.map((item: any, index) => {
                    return <div key={item.id} className='listofsession-card'>
                    <div className='listofsession-card-lft'>
                      <img src={BabyPic} />``
                    </div>
                    <div className='listofsession-card-rgt'>
                      <div className='listofsession-card-prdname'>
                         <div><b>Product Name:</b> {item.product_name}</div>
                         <div className='presence-status'>
                         <b>Status</b>  <Button> presence</Button>
                         </div>
                      </div>
                      <div className='listofsession-card-date'>
                        <div><b>Date:</b> {item.day}</div>
                        <div><b>Time Duration:</b> {item.start_time} - {item.end_time}</div>
                        <div><b>Group:</b> {item.group.name}</div>
                      </div> 
                    </div>
                  </div>
                })}
                </div>
            </div>
        </>
    )
}
