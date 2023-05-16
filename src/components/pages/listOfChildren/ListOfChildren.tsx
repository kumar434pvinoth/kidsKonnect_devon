import React, {useState, useEffect, }  from 'react';
import './ListOfChildren.css';
import Axios from 'axios';
import ProgressBar from '../../ui/ProgressBar';
import { IKidsKonnectChildren, } from '../../../globals/types';

export default function ListOfChildren() {
  
  const [kidsKonnectChildren, setKidsKonnectChildren] = useState([]);
  const [progressBar, setProgressBar] = useState(false);

  const getChildrenUrl = 'http://localhost:3001/children/';

  useEffect(() => {
    Axios.get(getChildrenUrl).then((res) => {
      setKidsKonnectChildren(res.data);

    }).catch((err) => console.log(err));    
  }, []);

    return  (
        <>

            {progressBar && <ProgressBar message={'Loading...'}/> }
            <div className="listofChildren-wrapper-recomentation">
                <div className='listofChildren-header'>
                        <h6>List Of Childrens</h6>
                </div>
                <div className='listofChildren-content'>
                  {kidsKonnectChildren.map((item: IKidsKonnectChildren, index) => {
                    return <div key={item.id} className='listofChildren-card'>
                    <div className='listofChildren-card-lft'>
                      <img src={item.avatar} />
                    </div>
                    <div className='listofChildren-card-rgt'>
                      <div className='listofChildren-card-prdname'>
                         <div><b>Name:</b> {item.name}</div>
                      </div>
                    </div>
                  </div>
                  })}
                </div>
            </div>
            
        </>
    )
}
