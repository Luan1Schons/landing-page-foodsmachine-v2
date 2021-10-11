import '../../assets/main.css';
import React from 'react';

import logo from '../../assets/img/svg/logo.svg'; 
import youtube from '../../assets/img/svg/youtube.svg'; 
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
export default props =>
    <>
        <section className="apresentation">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <BrowserView>
                <div className="youtube-video">
                    <img src={youtube} alt="logo" style={{width: '60%'}} />
                </div>
            </BrowserView>
            <MobileView>
                <div className="youtube-video">
                    <img src={youtube} alt="logo"/>
                </div>
            </MobileView>
        </section>
    </>