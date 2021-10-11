import '../../assets/main.css';
import React from 'react';

import smartphones_mobile from '../../assets/img/png/smartphone.jpg';
import smartphones_desktop from '../../assets/img/png/smartphone-desktop.png';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default props =>
    <>
        <section className="menu-apresentation text-center">
                <BrowserView>
                    <img src={smartphones_desktop} alt="Smartphones" style={{"width": "60%"}} />

                    <div className="d-flex justify-content-center">
                        <div className="btn btn-primary mt-3 font-fbk">DEMONSTRAÇÃO <b className="font-tbf">CARDÁPIO DIGITAL</b></div>
                    </div>

                    <div className="desc" style={{marginTop: "160px"}}>
                        <h3 className="font-fbk" style={{fontSize: "3rem"}}>PRECISA APENAS DE UM <b className="font-tbf">CARDÁPIO DIGITAL</b></h3>
                        <h2 className="font-tbf" style={{fontSize: "3rem"}}><span className="font-fbk" style={{fontSize: "3rem"}}>OU </span> <b style={{fontSize: "4rem"}}>UM SISTEMA COMPLETO</b></h2>
                        <span className="font-fbk" style={{fontSize: "2.5rem"}}>ESTA NO LUGAR <b className="font-tbf">CERTO</b></span>
                    </div>

                </BrowserView>
                <MobileView>
                    <img src={smartphones_mobile} alt="Smartphones" />
                    <div className="desc">
                        <h3 className="font-fbk">PRECISA APENAS DE UM <b className="font-tbf">CARDÁPIO DIGITAL</b></h3>
                        <h2 className="font-tbf"><span className="font-fbk">OU </span> <b>UM SISTEMA COMPLETO</b></h2>
                        <span className="font-fbk">ESTA NO LUGAR <b className="font-tbf">CERTO</b></span>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="btn btn-primary mt-3 font-fbk">DEMONSTRAÇÃO <b className="font-tbf">CARDÁPIO DIGITAL</b></div>
                    </div>
                </MobileView>

        </section>
    </>