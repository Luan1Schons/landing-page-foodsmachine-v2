import '../../assets/main.css';
import React from 'react';

import notebook_mobile from '../../assets/img/png/notebook.png'; 
import notebook_desktop from '../../assets/img/png/notebook-desktop_new.png'; 
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default props =>
    <>
        <section className="notebook">
            <BrowserView>
                <div className="d-flex align-items-center">
                <img src={notebook_desktop} alt="notebook-art" className="col-6" style={{width: "46%"}}/>
                    <div className="desc col-6">
                        <p className="font-fbk" style={{fontSize: "2.2rem"}}><b className="font-tbf">IMAGINE AGORA</b>, transformar uma operação complexa do seu dia a dia em algo simples e produtivo. Com o sistema Foods Machine, Você pode ter a gestão completa do seu negócio, te ajudando a diminuir custos desnecessários e automatizando processos que antes teria que ser feito manualmente, e quer saber o melhor? terá um sistema robusto e poderoso com visual fácil e intuitivo para que toda sua equipe apreendera facilmente como usar!</p>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <img src={notebook_mobile} alt="notebook-art"/>
                <div className="desc">
                    <p className="font-fbk"><b className="font-tbf">IMAGINE AGORA</b>, transformar uma operação complexa do seu dia a dia em algo simples e produtivo. Com o sistema Foods Machine, Você pode ter a gestão completa do seu negócio, te ajudando a diminuir custos desnecessários e automatizando processos que antes teria que ser feito manualmente, e quer saber o melhor? terá um sistema robusto e poderoso com visual fácil e intuitivo para que toda sua equipe apreendera facilmente como usar!</p>
                </div>
             </MobileView>
        </section>
    </>