import React, { Component } from 'react';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import heart from '../../assets/img/svg/heart.svg';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default class Perfect extends Component {
    componentDidMount() {
        const requestOptions = {
            method: 'POST'
        };
        fetch('https://admin.foodsmachine.com.br/api/get-token?secret=026f84b172d629ad5ebf92bc34a6a9fb', requestOptions)
            .then(response => response.json())
            .then(data => {
                const requestOptionsPerfect = {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + data.data.access_token
                    },
                };
                fetch('https://admin.foodsmachine.com.br/api/perfeito-para', requestOptionsPerfect)
                    .then(response => response.json())
                    .then(data => this.setState({ dataPerfect: data.data }));
            });
    }

    state = {
        token: null,
        dataPerfect: null
    }

    render() {

        if (this.state.dataPerfect !== null) {
            var listItems = this.state.dataPerfect.map(key => <div className="items d-flex justify-content-center align-items-center align-middle mt-3 font-fbk" key={key.id}><img src={key.icone} alt={key.nome} className="me-2" /> <h3>{key.nome}</h3></div>);
        } else {
            console.log('Nenhuma Data');
        }

        return (
            <div>
                <section className="perfect" style={{marginTop: "200px"}}>
                    <h1 className="text-center font-tbf"><img src={heart} className="me-2" alt="heart" />PERFEITO PARA</h1>
                    <BrowserView>
                        <div className="d-flex justify-content-center">
                            <div className="col-4">
                                <div className="card">
                                    <div className="perfect-items">
                                        <Carousel showArrows={false} showStatus={false} showIndicators={false} centerMode={true} showThumbs={false}>
                                            {listItems}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div className="d-flex justify-content-center">
                            <div className="card">

                                <div className="perfect-items">
                                    <Carousel showArrows={false} showStatus={false} showIndicators={false} centerMode={true} showThumbs={false}>
                                        {listItems}
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </MobileView>
                </section>
            </div>
        )
    }
}