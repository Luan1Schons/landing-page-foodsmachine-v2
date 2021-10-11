import '../../assets/main.css';

import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Quest from './Quest';

import icon from '../../assets/img/svg/icon-down.svg';



export default props =>
    <>
        <section className="faq mt-2 mb-2">
            <BrowserView>
                <div className="container" style={{ marginTop: "250px" }}>
                    <h3 className="text-center font-fbk" style={{ fontSize: "3rem" }}>PRINCIPAIS <span className="font-tbf">PERGUNTAS</span></h3>
                    <div className="d-flex justify-content-center">
                        <div className="col-8">
                            <Quest />
                        </div>
                    </div>
                </div>
            </BrowserView>

            <MobileView>
                <div className="container">
                    <h3 className="text-center font-fbk">PRINCIPAIS <span className="font-tbf">PERGUNTAS</span></h3>
                    <Quest />
                </div>
            </MobileView>
        </section>
    </>