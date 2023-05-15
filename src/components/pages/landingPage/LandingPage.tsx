import React  from 'react';
import '../../../LandingPageStyles.css';
import Header from '../header/Header';
import { Link, } from 'react-router-dom';

export default function LandingPage() {
    return  (
        <>
           <Header />
            <section className="w3l-main-slider" id="home">
              <div className="companies20-content">
                <div className="owl-one owl-carousel owl-theme">
                  <div className="item">
                    <li>
                      <div className="slider-info banner-view bg bg2">
                        <div className="banner-info">
                          <div className="container">
                            <div className="banner-info-bg">
                              <h5>We are here to care </h5>
                              <p> Caring is an essential ascept of human nature that allows us to show empathy and compassion for children.   </p>
                              <Link to="sessions" ><a className="btn btn-style btn-white mt-sm-5 mt-4 mr-2" > Sessions Overview
                              </a></Link>
                            </div>

                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}
