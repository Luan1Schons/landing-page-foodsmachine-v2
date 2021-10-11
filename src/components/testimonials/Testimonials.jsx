import '../../assets/main.css';
import React from 'react';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import instagram_1 from '../../assets/img/png/instagram-1.png';
import instagram_2 from '../../assets/img/png/instagram-2.png';
import instagram_3 from '../../assets/img/png/instagram-3.png';

export default props =>
    <>
        <section className="testimonials">

                <div className="col-md-12 col-sm-12">
                    <div className="description-testimonials text-center d-flex flex-wrap justify-content-center align-items-center">
                        <BrowserView>
                            <div className="alert-testimonials-desktop">
                                <p className="mt-3 title-alert font-tbf" style={{ color: "#000000" }}>O QUE NOSSOS CLIENTES FALAM</p>
                                <p className="font-fbk desc-alert">SOBRE A <span className="font-tbf" style={{ color: "red" }}>FOODS</span> <span className="font-tbf" style={{ color: "#0197A6" }}>MACHINE</span></p>
                            </div>
                        </BrowserView>
                        <MobileView>
                            <div className="alert-testimonials">
                                <p className="mt-3 title-alert font-tbf" style={{ color: "#000000" }}>O QUE NOSSOS CLIENTES FALAM</p>
                                <p className="font-fbk desc-alert">SOBRE A <span className="font-tbf" style={{ color: "red" }}>FOODS</span> <span className="font-tbf" style={{ color: "#0197A6" }}>MACHINE</span></p>
                            </div>
                        </MobileView>
                    </div>
                </div>
                <div className="instagram-testimonials mt-5">
                    <BrowserView>
                        <div class="d-flex justify-content-evenly">
                            <div className="col-12 d-flex justify-content-center">
                                <div class="p-3">
                                    <img src={instagram_1} />
                                </div>

                                <div class="p-3">
                                    <img src={instagram_2} />
                                </div>

                                <div class="p-3">
                                    <img src={instagram_3} />
                                </div>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div className="col-12 col-sm-12 d-flex justify-content-center mt-5 mb-3">
                            <img src={instagram_1} />
                        </div>

                        <div className="col-12 col-sm-12 d-flex justify-content-center mt-3 mb-3">
                            <img src={instagram_2} />
                        </div>

                        <div className="col-12 col-sm-12 d-flex justify-content-center mt-3 mb-3">
                            <img src={instagram_3} />
                        </div>
                    </MobileView>
                </div>


            <MobileView>
                <div className="display-cta">
                    <div className="p-3">
                        <button className="btn btn-gradient font-fbk">COMEÇE AGORA SEU TESTE DE 15 DIAS <b className="font-tbf">GRÁTIS</b></button>
                    </div>

                    <div className="d-flex justify-content-center align-items-center p-2">

                        <div className="col-3">
                            <div className="card">
                                <p className="text-center align-middle mt-2 font-tbf">ECONOMIA</p>
                            </div>
                        </div>
                        <div className="plus col d-flex justify-content-center align-items-center">
                            <p className="font-tbf" style={{ fontSize: "1.2rem" }}>+</p>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <p className="text-center align-middle mt-2 font-tbf">PRODUTIVIDADE</p>
                            </div>
                        </div>
                        <div className="plus col d-flex justify-content-center align-items-center">
                            <p className="font-tbf" style={{ fontSize: "1.2rem" }}>+</p>
                        </div>
                        <div className="col-3">
                            <div className="card">
                                <p className="text-center align-middle mt-2 font-tbf">ORGANIZAÇÃO</p>
                            </div>
                        </div>

                    </div>
                </div>
            </MobileView>
            <BrowserView>
                <div className="display-cta-desktop">
                    <div className="d-flex justify-content-center align-items-center p-2">

                        <div className="col-3 p-2">
                            <div className="card">
                                <p className="text-center align-middle mt-2 font-tbf"><span className="plus">+</span> ECONOMIA</p>
                            </div>
                        </div>

                        <div className="col-3 p-2">
                            <div className="card">
                                <p className="text-center align-middle mt-2 font-tbf"><span className="plus">+</span> PRODUTIVIDADE</p>
                            </div>
                        </div>

                        <div className="col-3 p-2">
                            <div className="card">
                                <p className="text-center align-middle mt-2 font-tbf"><span className="plus">+</span> ORGANIZAÇÃO</p>
                            </div>
                        </div>

                        <div className="col-3 p-2">
                            <div className="card card-green-cian">
                                <p className="text-center align-middle mt-2 font-tbf">+LUCRO</p>
                            </div>
                        </div>

                    </div>
                    <div className="p-3 d-flex justify-content-center">
                        <button className="btn btn-gradient font-fbk" style={{ width: "420px" }}>COMEÇE AGORA SEU TESTE DE 15 DIAS <b className="font-tbf">GRÁTIS</b></button>
                    </div>
                </div>
            </BrowserView>

            <MobileView>
                <div className="container displays-second mt-5">
                    <div className="row">
                        <div className="card col-3 col-sm-12">
                            <h1 className="text-cian-green d-flex justify-content-center align-items-cente font-tbf">=</h1>
                        </div>
                        <div className="card col-9 col-sm-12 d-flex justify-content-start align-items-start">
                            <div className="bg-green-cian d-flex justify-content-center align-items-center">
                                <h1 className="text-center font-tbf">+LUCRO</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </MobileView>
        </section>
    </>