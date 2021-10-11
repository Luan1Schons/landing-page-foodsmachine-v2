import '../../assets/main.css';
import React from 'react';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import icon from '../../assets/img/svg/icon-down.svg';
import ifood_icon from '../../assets/img/svg/ifood.svg';

const see_all_desktop_style = {
    borderRadius: "15px",
    padding: "7px 40px"
};

export default props =>
    <>
        <section className="functionalities">

            <div className="container d-flex flex-wrap align-items-center justify-content-center">
                <MobileView>
                    <div className="see-all" >
                        <h1 className="font-fbk">VER TODAS AS <b className="font-tbf">FUNCIONALIDADES!</b></h1>
                    </div>
                    <div className="icon">
                        <img src={icon} alt="icon" />
                    </div>
                </MobileView>

                <BrowserView>
                    <div className="see-all" style={see_all_desktop_style}>
                        <h1 className="font-fbk mt-2" style={{fontSize: "1.5rem"}}>VER TODAS AS <b className="font-tbf">FUNCIONALIDADES!</b></h1>
                    </div>
                    <div className="icon">
                        <img src={icon} alt="icon" />
                    </div>
                </BrowserView>

                <div className="functionalities-list" style={{ marginTop: "120px" }}>

                    <BrowserView>
                        <div class="row">

                            <div className="col-4 p-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            MEU SITE DELIVERY
                                        </h1>

                                        <div className="resources">
                                            <ul className="">
                                                <li>TENHA SEU SITE DE DELIVERY PRÓPRIO </li>
                                                <li>INTEGRADO COM WHATSAPP</li>
                                                <li>CARDÁPIO DIGITAL FÁCIL E INTUITIVO P/ SEU CLIENTE</li>
                                                <li>ATENDIMENTO MAIS RÁPIDO PARA SEU CLIENTE</li>
                                                <li>CADASTRE CATEGORIAS <b>ILIMITADO</b></li>
                                                <li>CADASTRE ADICIONAIS <b>ILIMITADO</b></li>
                                                <li>CADASTRE ITENS <b>ILIMITADO</b></li>
                                                <li>CADASTRE FORMA DE PAGAMENTO</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            GESTOR DE PEDIDOS
                                        </h1>

                                        <div className="resources">
                                            <ul className="">
                                                <li>CENTRALIZE TODOS OS PEDIDOS EM UM SÓ LUGAR </li>
                                                <li>AUMENTE A PRODUTIVIDADE DA SUA EMPRESA</li>
                                                <li>VEJA STATUS DE CADA PEDIDO</li>
                                                <li>ATIVE NOTIFICAÇÕES P/QUANDO CHEGAR PEDIDOS</li>
                                                <li>ATIVE IMPRESSÃO AUTOMÁTICA P/ PEDIDOS ACEITOS</li>
                                                <li>EDITE PEDIDOS</li>
                                                <li>CANCELE PEDIDOS</li>
                                                <li>APARÊNCIA LIMPA & FÁCIL DE UTILIZAR</li>
                                                <li>CENTRALIZE PEDIDOS VINDO DO <b>WHATSAPP</b> E INTEGRAÇÕES COMO <b>IFOOD</b>, <b>DELIVERY MUCH</b>, <b>RAPPI</b> ETC... TUDO NA MESMA TELA!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4 h-100">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div class="text-center mb-2">
                                            <img src={ifood_icon} style={{ width: "120px" }} />
                                        </div>
                                        <div className="resources">
                                            <ul>
                                                <li>INTEGRE SUA CONTA IFOOD E CENTRALIZE SEUS PEDIDOS NO NOSSO GESTOR DE PEDIDOS DE UMA FORMA SIMPLES E FÁCIL</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">

                                        <h1 className="text-center font-tbf">
                                            AGENDAMENTO
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>RECEBA AGENDAMENTO ATÉ MESMO QUANTO ESTIVER FECHADO!</li>
                                                <li>RECEBA NOTIFICAÇÃO, PARA COMEÇAR A PRODUÇÃO DO ITEM AGENDADO</li>
                                                <li>RECEBA AGENDAMENTOS PARA HORAS CONFIGURADAS E ATÉ MESMO PARA OUTROS DIAS</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            VENDA BALCÃO
                                        </h1>

                                        <div className="resources">
                                            <ul className="">
                                                <li>FAÇA PEDIDOS RAPIDAMENTE </li>
                                                <li>ACESSO AO CARDÁPIO DIGITAL</li>
                                                <li>EDITAR PEDIDO</li>
                                                <li>CALCULO DE ENTREGA</li>
                                                <li>OPÇÃO ENTREGA GRATÍS</li>
                                                <li>PROCURAR CADASTRO DE CLIENTE</li>
                                                <li>OPÇÃO RETIRARADA NO LOCAL</li>
                                                <li>OPÇÃO DELIVERY (ENTREGA)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            CUPOM DE DESCONTO
                                        </h1>

                                        <div className="resources">
                                            <ul className="">
                                                <li>AUMENTE A RECOMPRA DE SEUS CLIENTES </li>
                                                <li>ENVIE CUPOM DE DESCONTO</li>
                                                <li>ENVIE CUPOM DE DESCONTO NO CUPOM NÃO FISCAL</li>
                                                <li>CUPOM COM DATA DE VALIDADE</li>
                                                <li>CUPOM EM FORMADO POPUP</li>
                                                <li>DESCONTO EM PORCENTAGEM</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf" style={{ color: "#E4E4E4" }}>
                                            SMS MARKETING
                                        </h1>

                                        <div className="resources">
                                            <ul className="">
                                                <li>AUMENTE DESEJO DE COMPRA DO SEUS CLIENTES ENVIANDO SMS MARKETING!</li>
                                                <li>ENVIE O LINK DO SEU CARDÁPIO</li>
                                                <li>ENVIE PROMOÇÕES</li>
                                                <li>ENVIE CUPOM DE DESCONTO</li>
                                                <li>MENSAGENS SMS POR 0,18 CENTAVOS O ENVIO</li>
                                                <li>CADASTRE CUPONS ILIMITADOS</li>
                                                <li>ATIVE E DESATIVE CUPONS</li>
                                                <li>RECARREGUE QUANDO QUISER</li>
                                            </ul>
                                            <h1 className="text-center font-tbf mt-2" style={{ color: "#E4E4E4" }}>
                                                EM BREVE
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            RELATÓRIO
                                        </h1>

                                        <div className="resources">
                                            <ul className="">
                                                <li>RELATÓRIO FATURAMENTO SEMANAL, MENSAL E ANUAL</li>
                                                <li>RANKING DO ITEM MAIS VENDIDO</li>
                                                <li>ACOMPANHAMENTO DE CADASTRO DE NOVOS CLIENTES</li>
                                                <li>VOLUME DE VENDAS POR DIA DE SEMANA</li>
                                                <li>VOLUME DE VENDAS POR HORAS</li>
                                                <li>GRÁFICOS PARA SABER QUEM É SEU CLIENTE</li>
                                                <li>TICKET MÉDIO DE COMPRAS DE SEUS CLIENTES</li>
                                                <li>AVISO DE ESTOQUE <b>(NECESSARIO TER MÓDULO GESTOR DE ESTOQUE ATIVO)</b></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4 h-100">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            SUPORTE PREMIUM
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>ATENDIMENTO EXPRESS VIA WHATSAPP</li>
                                                <li>ATENDIMENTO SEGUNDA A SÁBADO DAS 9:00 AS 21:00.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">

                                        <h1 className="text-center font-tbf">
                                            CONFIGURE A ENTREGA RAIO KM
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>CONFIGURE COMO QUER COBRAR ENTREGA DO SEU CLIENTE, USANDO NOSSO SISTEMA DE RAIO DE ENTREGA, QUE SOMARA AUTOMATICAMENTE O VALOR PARA SEU CLIENTE!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4 h-100">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            FECHA OU ABRA QUANDO QUISER
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>CASO PRECISE FICAR MAIS TEMPO ABERTO OU FECHAR ANTES , COM TOQUE DE UM BOTÃO PODE RESOLVER ISSO!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">

                                        <h1 className="text-center font-tbf">
                                            PAUSAR PRODUTOS
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>ACABOU ALGUM ITEM DO SEU CARDÁPIO, FIQUE TRANQUILO, COM NOSSO SISTEMA VOCÊ PODE ATIVAR E DESATIVAR SEUS ITENS E ADICIONAIS.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card">
                                    <div className="card-body">

                                        <h1 className="text-center font-tbf">
                                            IMPRESSÃO AUTOMÁTICA
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>CADA SEGUNDO É IMPORTANTE PARA SEU NEGÓCIO PENSANDO NISSO, PARA O SEU CONFORTO VOCÊ PODE HABILITAR IMPRESSÃO AUTOMATICA PARA PEDIDOS ACEITOS!ACABOU ALGUM ITEM DO SEU CARDÁPIO, FIQUE TRANQUILO, COM NOSSO SISTEMA VOCÊ PODE ATIVAR E DESATIVAR SEUS ITENS E ADICIONAIS.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card">
                                    <div className="card-body">

                                        <h1 className="text-center font-tbf">
                                            MEIO A MEIO OU VÁRIOS SABORES
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>QUER DAR A OPÇÃO DO SEU CLIENTE ESCOLHER MEIO A MEIO, OU MAIS DE 2 SABORES PARA UM ITEM? NA FOODS MACHINE ISSO É POSSIVEL.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card">
                                    <div className="card-body">

                                        <h1 className="text-center font-tbf">
                                            PIXEL FACEBOOK
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>UTILIZE O PIXEL DO FACEBOOK PARA OTIMIZAR AINDA MAIS SUA CAMPANHAS NO FACEBOOK</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4 p-4">
                                <div className="card">
                                    <div className="card-body">

                                        <h1 className="text-center font-tbf">
                                            HORÁRIO DE FUNCIONAMENTO
                                        </h1>
                                        <div className="resources">
                                            <ul>
                                                <li>DEFINA DIAS EM QUE SUA EMPRESA ESTA ABERTO HORARIOS DE ATENDIMENTO EM MAIS DE UM PERIODO.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </BrowserView>
                    <MobileView>
                        <Carousel showArrows={false} showStatus={false} showIndicators={false} centerMode={true} showThumbs={false}>

                            <div className="col-sm-12 col-lg-12 p-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h1 className="text-center font-tbf">
                                            GESTOR DE PEDIDOS
                                        </h1>

                                        <div className="resources">
                                            <ul className="">
                                                <li>CENTRALIZE TODOS OS PEDIDOS EM UM SÓ LUGAR </li>
                                                <li>AUMENTE A PRODUTIVIDADE DA SUA EMPRESA</li>
                                                <li>VEJA STATUS DE CADA PEDIDO</li>
                                                <li>ATIVE NOTIFICAÇÕES P/QUANDO CHEGAR PEDIDOS</li>
                                                <li>ATIVE IMPRESSÃO AUTOMÁTICA P/ PEDIDOS ACEITOS</li>
                                                <li>EDITE PEDIDOS</li>
                                                <li>CANCELE PEDIDOS</li>
                                                <li>APARÊNCIA LIMPA & FÁCIL DE UTILIZAR</li>
                                                <li>CENTRALIZE PEDIDOS VINDO DO <b>WHATSAPP</b> E INTEGRAÇÕES COMO <b>IFOOD</b>, <b>DELIVERY MUCH</b>, <b>RAPPI</b> ETC... TUDO NA MESMA TELA!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Carousel>
                    </MobileView>
                </div>
            </div>
        </section>
    </>