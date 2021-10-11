import '../../assets/main.css';
import React from 'react';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import icon from '../../assets/img/svg/icon-down-long.svg';
import logo_delivery_turbo from '../../assets/img/svg/delivery-turbo.svg';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

// Plans
import ifood from '../../assets/img/svg/plans/ifood.svg';
import agendamento from '../../assets/img/svg/plans/agendamento.svg';
import cardapio from '../../assets/img/svg/plans/cardapio.svg';
import cupom_desconto from '../../assets/img/svg/plans/cupom_desconto.svg';
import gestor_pedidos from '../../assets/img/svg/plans/gestor_pedidos.svg';
import ilimitado from '../../assets/img/svg/plans/ilimitado.svg';
import novos_pedidos from '../../assets/img/svg/plans/novos_pedidos.svg';
import qr_code from '../../assets/img/svg/plans/qr_code.svg';
import raio_entrega from '../../assets/img/svg/plans/raio_entrega.svg';
import relatorio from '../../assets/img/svg/plans/relatorio.svg';
import sms_marketing from '../../assets/img/svg/plans/sms_marketing.svg';
import tempo_preparo from '../../assets/img/svg/plans/tempo_preparo.svg';
import venda_balcao from '../../assets/img/svg/plans/venda_balcao.svg';
import whatsapp from '../../assets/img/svg/plans/whatsapp.svg';

{/*
import visa from '../../assets/img/svg/payment/visa.svg';
import mastercard from '../../assets/img/svg/payment/mastercard.svg';
import elo from '../../assets/img/svg/payment/elo.svg';
import hipercard from '../../assets/img/svg/payment/hipercard.svg';
import boleto from '../../assets/img/svg/payment/boleto.svg';
import pix from '../../assets/img/svg/payment/pix.svg';
*/}

const plan_mount_style_mobile = {
    backgroundImage: 'url("https://i.imgur.com/D49xLSj.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'block',
    width: '100%',
    height: '500px',
    marginBottom: '50px'
};

const plan_mount_style_desktop = {
    backgroundImage: 'url("https://i.imgur.com/gDvCl4L.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'block',
    width: '100%',
    height: '970px',
};

export default props =>
    <>
        <section className="mount">

            <div className="text-center">
                <img src={icon} alt="Icon Down" />
            </div>

            <div className="card">
                <div className="card-body">
                    <h2 className="text-center font-fbk">ASSINE AGORA,</h2>
                    <h1 className="text-center font-tbf">E TURBINE O SEU DELIVERY!</h1>

                    <MobileView>
                        <div className="plan-blue" style={plan_mount_style_mobile}>

                            <div className="logo-delivery-turbo text-center">
                                <img src={logo_delivery_turbo} alt="Delivery Turbo" />
                            </div>

                            <div className="white-label text-center">
                                <p>MÓDULOS MAIS ASSINADO</p>
                            </div>

                            <div className="plan-included-mobile text-center">
                                <ul className="font-fbk">
                                    <li><img src={ifood} alt="Ifood" className="me-2" /> INTEGRAÇÃO IFOOD</li>
                                    <li><img src={cardapio} alt="Ifood" className="me-2" />  CARDÁPIO DIGITAL</li>
                                    <li><img src={ilimitado} alt="Ifood" className="me-2" />PEDIDOS ILIMITADOS</li>
                                    <li><img src={gestor_pedidos} alt="Ifood" className="me-2" />GESTOR PEDIDOS</li>
                                    <li><img src={venda_balcao} alt="Ifood" className="me-2" />VENDAS BALCÃO (PDV)</li>
                                    <li><img src={relatorio} alt="Ifood" className="me-2" /> RELATÓRIO</li>
                                    <li><img src={whatsapp} alt="Ifood" className="me-2" />INTEGRAÇAO WHATSAPP</li>
                                    <li><img src={sms_marketing} alt="Ifood" className="me-2" />SMS MARKETING</li>
                                    <li><img src={novos_pedidos} alt="Ifood" className="me-2" />NOTIFICAÇÃO NOVOS PEDIDOS</li>
                                    <li><img src={raio_entrega} alt="Ifood" className="me-2" />CONFIGURAÇÃO RAIO DE ENTREGA</li>
                                    <li><img src={tempo_preparo} alt="Ifood" className="me-2" />TEMPO DE PREPARO</li>
                                    <li><img src={qr_code} alt="Ifood" className="me-2" />QR CODE ENDEREÇO DO CLIENTE</li>
                                    <li><img src={raio_entrega} alt="Ifood" className="me-2" />CONFIGURAÇÃO RAIO DE ENTREGA</li>
                                    <li><img src={cupom_desconto} alt="Ifood" className="me-2" />CUPOM DESCONTO</li>
                                    <li><img src={agendamento} alt="Ifood" className="me-2" />AGENDAMENTOS</li>
                                </ul>
                                <MobileView>
                                    <div className="button-plan">
                                        <button className="btn btn-red font-fbk">R$64,65 <span className="font-tbf">MÊS</span></button>
                                    </div>
                                </MobileView>
                            </div>
                        </div>
                    </MobileView>

                    <BrowserView>
                        <div className="plan-blue" style={plan_mount_style_desktop}>

                            <div className="logo-delivery-turbo-desktop text-center">
                                <img src={logo_delivery_turbo} alt="Delivery Turbo" style={{ width: "190px" }} />
                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="white-label-desktop text-center">
                                    <p className="mt-3">MÓDULOS MAIS ASSINADO</p>
                                </div>
                            </div>

                            <div className="plan-included-desktop text-center">
                                <ul className="font-fbk">
                                    <li><img src={ifood} alt="Ifood" className="font-tbf me-2" /> INTEGRAÇÃO IFOOD</li>
                                    <li><img src={cardapio} alt="Ifood" className="me-2" />  CARDÁPIO DIGITAL</li>
                                    <li><img src={ilimitado} alt="Ifood" className="me-2" />PEDIDOS ILIMITADOS</li>
                                    <li><img src={gestor_pedidos} alt="Ifood" className="me-2" />GESTOR PEDIDOS</li>
                                    <li><img src={venda_balcao} alt="Ifood" className="me-2" />VENDAS BALCÃO (PDV)</li>
                                    <li><img src={relatorio} alt="Ifood" className="me-2" /> RELATÓRIO</li>
                                    <li><img src={whatsapp} alt="Ifood" className="me-2" />INTEGRAÇAO WHATSAPP</li>
                                    <li><img src={sms_marketing} alt="Ifood" className="me-2" />SMS MARKETING</li>
                                    <li><img src={novos_pedidos} alt="Ifood" className="me-2" />NOTIFICAÇÃO NOVOS PEDIDOS</li>
                                    <li><img src={raio_entrega} alt="Ifood" className="me-2" />CONFIGURAÇÃO RAIO DE ENTREGA</li>
                                    <li><img src={tempo_preparo} alt="Ifood" className="me-2" />TEMPO DE PREPARO</li>
                                    <li><img src={qr_code} alt="Ifood" className="me-2" />QR CODE ENDEREÇO DO CLIENTE</li>
                                    <li><img src={raio_entrega} alt="Ifood" className="me-2" />CONFIGURAÇÃO RAIO DE ENTREGA</li>
                                    <li><img src={cupom_desconto} alt="Ifood" className="me-2" />CUPOM DESCONTO</li>
                                    <li><img src={agendamento} alt="Ifood" className="me-2" />AGENDAMENTOS</li>
                                </ul>
                                <div className="button-plan" style={{ marginTop: "80px" }}>
                                    <button className="btn btn-red-desktop font-fbk">R$64,65 <span className="font-tbf">MÊS</span></button>
                                </div>
                            </div>
                        </div>
                    </BrowserView>



                    <BrowserView>
                        <div className="d-flex justify-content-center flex-wrap">
                            <div className="col-5 text-center">
                                <button className="btn btn-white-desktop text-center w-100 p-3 mt-2 font-tbf">COMEÇAR TESTE DE 15 DIAS</button>
                            </div>
                            <div className="col-12 mt-4">
                                <p className="font-bfk text-center desc-btn" style={{ fontSize: "1rem" }}><b>FIQUE TRANQUILO</b> PERÍODO DE TESTE NÃO PRECISA <span style={{ color: "#22B9C2" }}>ADICIONAR CARTÃO</span> OU <span style={{ color: "#22B9C2" }}>PAGAR BOLETO</span></p>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <button className="btn btn-white text-center w-100 p-3 mt-2 font-tbf">COMEÇAR TESTE DE 15 DIAS</button>
                    </MobileView>

                    <div className="d-flex flex-wrap justify-content-center">
                        {/*
                        <img src={visa} alt="visa"/>
                        <img src={mastercard} alt="mastercard"/>
                        <img src={elo} alt="elo"/>
                        <img src={hipercard} alt="hipercard"/>
                        <img src={boleto} alt="boleto"/>
                        <img src={pix} alt="pix"/>
                        */}
                    </div>
                </div>
            </div>

        </section>
    </>