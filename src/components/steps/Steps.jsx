import React from 'react';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import person1 from '../../assets/img/svg/person-1.svg';
import person2 from '../../assets/img/svg/person-2.svg';
import person3 from '../../assets/img/svg/person-3.svg';

export default props =>
    <>
        <div className="steps">
            <BrowserView>
                <div className="d-flex flex-wrap" style={{ padding: "0rem 7rem" }}>
                    <div className="col-4 p-5" style={{ marginTop: "100px" }}>
                        <div className="card m-2 no-shadow">
                            <div className="card-body">
                                <h1 className="text-start">1º</h1>
                                <div className="person">
                                    <img src={person1} alt="Pessoa 1" />
                                </div>
                                <div className="desc">
                                    <h3 className="font-tbf">
                                        MONTE SEU PLANO E FAÇA O SEU CADASTRO
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-5" style={{ marginTop: "100px" }}>
                        <div className="card m-2">
                            <div className="card-body">
                                <h1 className="text-start">2º</h1>
                                <div className="person">
                                    <img src={person2} alt="Pessoa 2" />
                                </div>
                                <div className="desc">
                                    <h3 className="font-tbf">
                                        CADASTRE O SEU CARDÁPIO
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 p-5" style="margin-top:" style={{ marginTop: "100px" }}>
                        <div className="card m-2 no-shadow">
                            <div className="card-body">
                                <h1 className="text-start">3º</h1>
                                <div className="person">
                                    <img src={person3} alt="Pessoa 3" />
                                </div>

                                <div className="desc">
                                    <h3 className="font-tbf" style={{ fontSize: "1.2rem" }}>
                                        PRONTINHO, JÁ PODE RECEBER SEUS PEDIDOS E USAR SEU SISTEMA FOOD MACHINES
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <Carousel showArrows={false} showStatus={false}>
                    <div className="col-sm-12" style={{ marginTop: "100px" }}>
                        <div className="card m-2">
                            <div className="card-body">
                                <h1 className="text-start">1º</h1>
                                <div className="person">
                                    <img src={person1} alt="Pessoa 1" />
                                </div>
                                <div className="desc">
                                    <h3 className="font-tbf">
                                        MONTE SEU PLANO E FAÇA O SEU CADASTRO
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12" style={{ marginTop: "100px" }}>
                        <div className="card m-2">
                            <div className="card-body">
                                <h1 className="text-start">2º</h1>
                                <div className="person">
                                    <img src={person2} alt="Pessoa 2" />
                                </div>
                                <div className="desc">
                                    <h3 className="font-tbf">
                                        CADASTRE O SEU CARDÁPIO
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12" style="margin-top:" style={{ marginTop: "100px" }}>
                        <div className="card m-2">
                            <div className="card-body">
                                <h1 className="text-start">3º</h1>
                                <div className="person">
                                    <img src={person3} alt="Pessoa 3" />
                                </div>

                                <div className="desc">
                                    <h3 className="font-tbf" style={{ fontSize: "1.2rem" }}>
                                        PRONTINHO, JÁ PODE RECEBER SEUS PEDIDOS E USAR SEU SISTEMA FOOD MACHINES
                                    </h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </Carousel>
            </MobileView>

            <div className="separator"></div>
        </div>
    </>