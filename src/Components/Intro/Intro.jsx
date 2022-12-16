import React from 'react'
import Imag_home from '../../img/img_home.png'
import './Intro.scss'
import { motion } from "framer-motion"
import { Player } from '@lottiefiles/react-lottie-player';

const Intro = () => {

    const transition = { duration: 2, type: "spring" };

    return (

        <div className="contain_home" id="contain_home">

            <div className="h-left">

                <div className="h-name">

                    <span className='first_span'>RENDEZ VOS REVES</span>
                    <span className='second_span'>REALISABLES</span>
                    <Player src='https://assets7.lottiefiles.com/packages/lf20_g7ycvpvy.json' autoplay loop style={{width:'450px' , height:'600px'}} />

                </div>
                <div className="h-animation"></div>


            </div>
            <div className="h-right">

                <img src={Imag_home} alt="" />

            </div>


        </div>

    )
}

export default Intro