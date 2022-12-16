import React from 'react'
import './Service.scss'
import Service1 from '../../img/service1.png'
import Service2 from '../../img/service2.png'
import Service3 from '../../img/service3.png'
import Service4 from '../../img/service4.png'
import I1 from '../../img/i1.png'
import I2 from '../../img/i2.png'
import I3 from '../../img/i3.png'
import I4 from '../../img/i4.png'

const Service = () => {
    return (

        <div className="contain_service" id="contain_service">

            <div className="header_service">

                <h1>

                    Nous offrons des services dans plusieurs dommaine
                    Application mobile
                </h1>

                <p>
                    Nous avons pour but d’aider toute personne des

                </p>




            </div>

            <div className="body_service">
                <div className="contain_card">

                    <div className="card">

                        <div className="item">

                            <div className="image image1">
                                {/* <img src={Service1} alt="" /> */}
                                <img src={I1} alt="" className='i_float' />
                            </div>
                            <h1>
                                Application mobile
                            </h1>

                            <p>
                                Nous vous aidons a concevoir
                                l’application mobile qui cadre le mieux a vos besoins et qui couvre toutes vos attentes
                            </p>

                            <button>

                                Learn more


                            </button>


                        </div>


                    </div>
                    <div className="card">

                        <div className="item">

                            <div className="image image2">
                                {/* <img src={Service2} alt="" ></img> */}
                                <img src={I2} alt="" className='i_float' />


                            </div>
                            <h1>
                                Application mobile
                            </h1>

                            <p>
                                Nous vous aidons a concevoir
                                l’application mobile qui cadre le mieux a vos besoins et qui couvre toutes vos attentes
                            </p>

                            <button>

                                Learn more


                            </button>


                        </div>


                    </div>
                    <div className="card">

                        <div className="item">

                            <div className="image image3">
                                {/* <img src={Service3} alt="" /> */}
                                <img src={I3} alt="" className='i_float' />


                            </div>
                            <h1>
                                Application mobile
                            </h1>

                            <p>
                                Nous vous aidons a concevoir
                                l’application mobile qui cadre le mieux a vos besoins et qui couvre toutes vos attentes
                            </p>

                            <button>

                                Learn more


                            </button>


                        </div>


                    </div>
                    <div className="card">

                        <div className="item">

                            <div className="image image4">
                                {/* <img src={Service4} alt="" /> */}
                                <img src={I4} alt="" className='i_float' />


                            </div>
                            <h1>
                                Application mobile
                            </h1>

                            <p>
                                Nous vous aidons a concevoir
                                l’application mobile qui cadre le mieux a vos besoins et qui couvre toutes vos attentes
                            </p>

                            <button>

                                Learn more


                            </button>


                        </div>


                    </div>



                </div>




            </div>



        </div>

    )
}

export default Service