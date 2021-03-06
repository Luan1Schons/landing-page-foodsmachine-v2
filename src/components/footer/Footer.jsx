import '../../assets/main.css';

import logo_white from '../../assets/img/svg/logo-white.svg';


import icon_fb from '../../assets/img/svg/icon-fb.svg';
import icon_insta from '../../assets/img/svg/icon-insta.svg';
import icon_you from '../../assets/img/svg/icon-you.svg';

export default props =>
    <>
        <section className="footer">
            <footer className="mt-5">
                <div className="container">

                    <div className="content">
                        <div className="row">
                            <div className="col-6">
                                <img src={logo_white} style={{ width: "220px" }} />
                            </div>

                            <div className="col-6">
                                <div className="d-flex justify-content-center">
                                    <div className="p-2">
                                        <img src={icon_fb} />
                                    </div>
                                    <div className="p-2">
                                        <img src={icon_insta} />
                                    </div>
                                    <div className="p-2">
                                        <img src={icon_you} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 mt-3">
                        <p style={{color: "#fff"}}>© 2021 Todos os direitos reservados a Foods Machine.</p>
                    </div>

                </div>
            </footer>
        </section>
    </>