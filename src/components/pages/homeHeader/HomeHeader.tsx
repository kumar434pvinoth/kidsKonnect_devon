import React, { useState, useEffect,  } from 'react';
import './HomeHeader.css';
import babyCareLogo from '../../../assets/images/babycarelogo.png';


export default function HomeHeader() {
    return  (
        <>
            <div className="homehd-wrapper">
                <div className="pg-container">
                       <div className="kk-header">
                       <nav className="navbar navbar-expand-lg stroke px-0">
                        <a className="navbar-brand" href="/">
                          <label>kids</label> <span className="sublog">Konnect</span>
                        </a>
                        <img src={babyCareLogo} className="babycarelogo"  />
                      </nav>
                       </div>
                </div>
            </div>
        </>
    )
}
