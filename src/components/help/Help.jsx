import '../../assets/main.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
export default props =>
    <>
        <section className="help mt-5">
                <BrowserView>
                <div className="d-flex justify-content-center">
                <div className="col-4">
                    <div className="container">
                            <div className="card">
                                <div className="card-body text-white">
                                    <div className="bg-green-cian">

                                        <h3 className="font-tbf">
                                            FICOU COM ALGUMA DÚVIDA?
                                        </h3>

                                        <h4 className="font-fbk">DEIXE SEU WHATSAPP QUE ENTRAMOS EM CONTATO</h4>
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="nome">
                                            <Form.Label className="input-title font-fbk">NOME</Form.Label>
                                            <Form.Control type="email" placeholder="Seu nome" />
                                        </Form.Group>

                                        <Form.Group className="mb-1" controlId="whatsapp">
                                            <Form.Label className="input-title font-fbk">DIGITE SEU WHATSAPP</Form.Label>
                                            <Form.Control type="password" placeholder="(00) 00000000" />
                                        </Form.Group>
                                        <div className="d-flex justify-content-center mt-3">
                                            <Button variant="primary" className="w-50 font-tbf" type="submit">
                                                ENVIAR
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
                </BrowserView>
                <MobileView>
                <div className="col-12">
                    <div className="container">
                        <div className="col-md-12 col-sm-12 p-2">
                            <div className="card">
                                <div className="card-body text-white">
                                    <div className="bg-green-cian">

                                        <h3 className="font-tbf">
                                            FICOU COM ALGUMA DÚVIDA?
                                        </h3>

                                        <h4 className="font-fbk">DEIXE SEU WHATSAPP QUE ENTRAMOS EM CONTATO</h4>
                                    </div>
                                    <Form>
                                        <Form.Group className="mb-1" controlId="nome">
                                            <Form.Label className="input-title font-fbk">NOME</Form.Label>
                                            <Form.Control type="email" placeholder="Seu nome" />
                                        </Form.Group>

                                        <Form.Group className="mb-1" controlId="whatsapp">
                                            <Form.Label className="input-title font-fbk">DIGITE SEU WHATSAPP</Form.Label>
                                            <Form.Control type="password" placeholder="(00) 00000000" />
                                        </Form.Group>
                                        <div className="d-flex justify-content-center mt-3">
                                            <Button variant="primary" className="w-50 font-tbf" type="submit">
                                                ENVIAR
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </MobileView>
        </section>
    </>