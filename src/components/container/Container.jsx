import '../../assets/main.css';
import React from 'react';

import Apresentation from '../../components/apresentation/Apresentation';
import Steps from '../../components/steps/Steps';
import Perfect from '../../components/perfect-slider/PerfectSlider';
import Menu from '../../components/menu-apresentation/Menu';
import Notebook from '../../components/notebook/Notebook';
import Functionalities from '../../components/functionalities/Functionalities';
import Mount from '../../components/mount-plan/Mount';
import Testimonials from '../../components/testimonials/Testimonials';
import Faq from '../../components/faq/Faq';
import Help from '../help/Help';
import Footer from '../footer/Footer';

export default props =>
    <>
        <div className="content" id="container">
            <Apresentation></Apresentation>
            <Steps></Steps>
            <Perfect></Perfect>
            <Menu></Menu>
            <Notebook></Notebook>
            <Functionalities></Functionalities>
            <Mount></Mount>
            <Testimonials></Testimonials>
            <Faq></Faq>
            <Help></Help>
            <Footer></Footer>
        </div>
    </>