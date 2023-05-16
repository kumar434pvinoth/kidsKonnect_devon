import React, {useState, useEffect, }  from 'react';
import './ListOfSessions.css';
import Axios from 'axios';
import ProgressBar from '../../ui/ProgressBar';
import SortSelectBox from '../../ui/SortSelectBox';      
import Button from '@mui/material/Button';
import EmptyList from '../../../assets/images/empty-list.jpeg';
import BabyPic from '../../../assets/images/babypic.jpeg';
import { IKidsKonnectData, } from '../../../globals/types';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function ListOfSessions() {

  const [kidsKonnectData, setKidsKonnectData] = useState([]);
  const [kidsKonnectSessionsDate] = useState(['2023-05-31','2023-06-02','2023-06-03']);
  const [kidsKonnectDataGroup] = useState(['Group 1','Group 2','Group 3','Group 4','Group 5','Group 6', 'Group 7' ]);
  const [kidsKonnectGroupeFilter, setKidsKonnectGroupeFilter] = useState([]);
  const [kidsKonnectGroupeTwo, setKidsKonnectGroupeTwo] = useState(false);
  const [progressBar, setProgressBar] = useState(false);
  const [defaultSessionDate, setDefaultSessionDate] = useState('2023-06-02');
  const [currentSessionDate, setCurrentSessionDate] = useState(defaultSessionDate);

  const getSessionsUrl = 'http://localhost:3001/sessions/';        
  const getSessionListOnlyJune = 'http://localhost:3001/sessions?day=2023-06-02';        


      // filtering sessions under Date  // 
  const handleChangeSessionsDate = (getPrevOrNext) => {
    setKidsKonnectGroupeTwo(true);
    let conditionBtn = getPrevOrNext.target.id;
    let currentDateIndexValue = kidsKonnectSessionsDate.indexOf(currentSessionDate);


    if(conditionBtn === 'prev') {
      setProgressBar(true);
      let filteredSessionsDate = kidsKonnectSessionsDate[currentDateIndexValue-1];
      // alert(filteredSessionsDate);
      setCurrentSessionDate(filteredSessionsDate);
      Axios.get(getSessionsUrl).then((res) => {
          let filteredDateList = res.data.filter((item: any , index) => {
            return item.day === filteredSessionsDate;
          });
          setKidsKonnectGroupeFilter(filteredDateList);
          setTimeout(() => {
            setProgressBar(false)
          }, 500)
       
      }).catch((err) => console.log(err));   

    } else {
          setProgressBar(true);
          let filteredSessionsDate = kidsKonnectSessionsDate[currentDateIndexValue+1];
          setCurrentSessionDate(filteredSessionsDate);
          setDefaultSessionDate(filteredSessionsDate)
          Axios.get(getSessionsUrl).then((res) => {
              let filteredDateList = res.data.filter((item: any , index) => {
                return item.day === filteredSessionsDate;
              });
              setKidsKonnectGroupeFilter(filteredDateList);
              setTimeout(() => {
                setProgressBar(false)
              }, 500)
          
          }).catch((err) => console.log(err));   
    }
  }


  // filtering sessions under goups // 
  const handleChangeGroupeCallBack = (getGroupeName) => {
        setProgressBar(true);
        Axios.get(getSessionsUrl).then((res) => {
          setKidsKonnectData(res.data);
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
        }).catch((err) => {
          setProgressBar(false);
          console.log(err);
        });  
    }

  // Action for presence status  // 
  const handlePresenceStatus = (item) => {
    setProgressBar(true);
    let presenseStatus = item.presence === 'unknown' &&  'present' || item.presence === 'present' && 'picked up' ||  item.presence === 'picked up' && 'unknown';
    setProgressBar(true);
    let payLoad = {
        id: item.id,
        day: item.day,
        start_time: item.start_time,
        end_time:item.end_time,
        product_name:item.product_name,
        child_id: item.child_id,
        group: item.group,
        presence: presenseStatus
    };
    Axios.put(`${getSessionsUrl}${item.id}`, payLoad).then((res) => {
      setKidsKonnectGroupeFilter(res.data);
      setProgressBar(false);
    }).catch((err) => {
      setProgressBar(false);
      console.log(err);
    });    
  }
  useEffect(() => {
    Axios.get(getSessionListOnlyJune).then((res) => {
      setKidsKonnectData(res.data);

     let kidsSessionGrpList: string[] = [];
     res.data.filter((item, index) => {
        return kidsSessionGrpList.push(item.group.name);
      });  

      setProgressBar(false);
    }).catch((err) => {
      console.log(err);
    });      
  }, [kidsKonnectData]);
    return  (
        <>
            {progressBar && <ProgressBar message={'Loading Groups....'} /> }
            <div className="listofsession-wrapper-recomentation">
                <div className='listofsession-header'>
                        <h6>List Of Sessions</h6>
                        <div className="filterSessionByGrp">
                            <button className='btn btn-style' id="prev" onClick={handleChangeSessionsDate} > <KeyboardArrowLeftIcon /> Previos </button>
                            {currentSessionDate}
                            <button className='btn btn-style' id="next" onClick={handleChangeSessionsDate}>Next <KeyboardArrowRightIcon /></button>
                            &nbsp;&nbsp;&nbsp; <SortSelectBox 
                            setProgressBar={setProgressBar} 
                            handleChangeGroupeCallBack={handleChangeGroupeCallBack} 
                            groupList={kidsKonnectDataGroup}
                            />
                        </div>
                </div>
                <div className='listofsession-content'>
                {kidsKonnectGroupeTwo ? kidsKonnectGroupeFilter.length > 0 ? kidsKonnectGroupeFilter.map((item: IKidsKonnectData, index) => {
                  return (
                    <div key={item.id} className='listofsession-card'>
                      <div className='listofsession-card-lft'>
                        <img src={BabyPic} />
                      </div>
                      <div className='listofsession-card-rgt'>
                        <div className='listofsession-card-prdname'>
                          <div><b>Product Name:</b> {item.product_name}</div>
                          <div className='presence-status'>
                          <b>Status</b>  <Button onClick={() => handlePresenceStatus(item)}> {item.presence}</Button>
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
                            <h2> Data Not Found!</h2>
                           </div>  :  kidsKonnectData.map((item: any, index) => {
                    return <div key={item.id} className='listofsession-card'>
                    <div className='listofsession-card-lft'>
                      <img src={BabyPic} />
                    </div>
                    <div className='listofsession-card-rgt'>
                      <div className='listofsession-card-prdname'>
                         <div><b>Product Name:</b> {item.product_name}</div>
                         <div className='presence-status'>
                         <b>Status</b>  <Button  onClick={() => handlePresenceStatus(item)}> {item.presence}</Button>
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
