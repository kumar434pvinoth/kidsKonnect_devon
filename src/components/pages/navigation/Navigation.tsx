import React  from 'react';
import './Navigation.css';
import { Link, } from 'react-router-dom';

export default function Navigation() {
    return  (
        <>
           <div className='meganav'>
                <div className='pg-container'>
                    <nav  className="mega-nav">
                        <ul>
                            <li><Link to="sessions">Sessions</Link> </li>
                            <li><Link to="children">children</Link> </li>
                            <li><Link to="news">News</Link> </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
