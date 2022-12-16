import React from 'react'
import './role.scss'
import Ide from '../../img/Ide.png'
import Ide2 from '../../img/ide2.png'
import Ide3 from '../../img/ide3.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrow } from '@fortawesome/free-brands-svg-icons';
import Arrow_left from '../../img/arrow_left.png'


const Role = () => {
    return (
        <div className="contain_role" id="contain_role">

            <div className="role_header">
                <div className="blob"></div>
                <div className="blob1"></div>

                <span>Notre role</span>
                <h1>Nous vous assistons jusqu’à la <br /> maintenance du produit</h1>
            </div>
            <div className="role_body">


                <div className="contain_card">

                    <div className="card">

                        <div className="heder_card">
                            <img src={Ide} alt="" />
                        </div>

                        <div className="body_card">

                            <h1>
                                L’idee du projet
                            </h1>
                            <p>

                                Nous vous aidons lors de la recherche d’un projet
                            </p>

                        </div>




                        <div className="footer_card">

                            <h1> <span> Explore page </span>  <img src={Arrow_left} alt="" /> </h1>


                        </div>


                    </div>
                    <div className="card">

                        <div className="heder_card">
                            <img src={Ide2} alt="" />
                        </div>

                        <div className="body_card">

                            <h1>
                                Creation du projet

                            </h1>
                            <p>
                                Nous mettons notre savoir à la réalisation du projet

                            </p>

                        </div>




                        <div className="footer_card">

                            <h1> <span> Explore page </span>  <img src={Arrow_left} alt="" /> </h1>


                        </div>


                    </div>
                    <div className="card">

                        <div className="heder_card">
                            <img src={Ide3} alt="" />
                        </div>

                        <div className="body_card">

                            <h1>

                                Maintenance du projet
                            </h1>
                            <p>
                                Nous vous aidons à  la maintenace de votre projet
                            </p>

                        </div>


                        <div className="footer_card">

                            <h1> <span> Explore page </span>  <img src={Arrow_left} alt="" /> </h1>


                        </div>

                    </div>


                </div>


            </div>


        </div>
    )
}

export default Role