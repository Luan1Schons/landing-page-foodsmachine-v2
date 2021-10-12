import '../../assets/main.css';
import React from 'react';

import logo from '../../assets/img/svg/logo-white.svg';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const label_style = {
    padding: "0px 20px",
    borderRadius: "15px"
}

export default props =>
    <>

        <MobileView>
            <nav className="navbar navbar-expand-lg navbar-dark bg-cian p-3">
                <div className="menu">
                    <div className="item">
                        <label className="font-fbk">3 DIAS 20:58:20</label>
                    </div>
                    <div className="item">
                        <p className="font-fbk"><b className="font-tbf">15 DIAS</b> DE TESTE GRÁTIS + <b>15%OFF</b> POR 3 MESES</p>
                    </div>

                    <div className="nav-button d-flex justify-content-center">
                        <button type="button" className="btn btn-primary font-tbf">COMEÇE AGORA SEU TESTE DE 15 DIAS GRÁTIS</button>
                    </div>
                </div>
            </nav>
        </MobileView>
        <BrowserView>
            <nav className="navbar-dark bg-cian">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-3 p-2">
                        <img src={logo} style={{ width: "220px" }} />
                    </div>
                    <div className="item col-3">
                        <div className="d-flex flex-nowrap align-items-start">
                            <h3 className="text-white text-nowrap font-tbf" style={{ fontSize: "1rem" }}>15 DIAS <span className="font-fbk">DE TESTE GRÁTIS +</span> 15%OFF <span className="font-tbf">POR 3 MESES</span></h3>
                        </div>
                        <button className="btn btn-gradient font-fbk">
                            <b className="font-tbf">AGORA</b> SEU TESTE DE 15 DIAS GRÁTIS
                        </button>
                    </div>

                    <div className="item col-3">
                        <div className="item d-flex justify-content-start p-2">
                            <label style={label_style}><h3 style={{ fontSize: "1.2rem" }} className="font-tbf mt-2">3 DIAS 20:58:20</h3></label>
                        </div>
                    </div>

                    <div className="item col-3">
                        <div className="d-flex justify-content-end pe-4">
                            <button className="btn btn-white">ENTRAR</button>
                        </div>
                    </div>
                </div>
            </nav>
        </BrowserView>
    </>

