import React from 'react'
import './about.scss'
import About_image from '../../img/about_img.png'
import Experience from '../../img/experience_img.png'
import Projet from '../../img/projet_img.png'
import Service_client from '../../img/service_client_img.png'
import About_info from '../OtherComponents/Card_Inffo/About_info'
import { motion } from "framer-motion"
import { useState } from 'react';

// import useState from react;

const About = () => {

    const transition = { duration: 2, type: "spring" };
    // const [thescale, setthescale] = useState(false)



    return (
        <div className="contain_about" id="contain_about" >

            <div className="a_left">

                <div className="a_img">

                    <img src={About_image} alt="" />


                </div>

            </div>
            <div className="a_right">

                <div className="a_text">

                    <h1>A propos</h1>

                    <p>Plus qu’une entreprise de prestation de service , nous somme avant tout
                        un guide dans la realisation de vos projets informatique , notre objectif etant de combler vos besoin technologique afin que vous vous focalisiez sur votre metier en lui meme.  <span> Que vous soyez createur de start-up, novice dans l’entrepreunariat, freelance. Nos services sont un atout majeur pour l’essort de vos projets. </span>
                    </p>

                    <div className="other_information">



                        <About_info img={Experience} text='Experience' number='5 ANS +' />





                        <About_info img={Projet} text='Projets' number='700 +' />




                        <About_info img={Service_client} text='Service client' number='24/5' className="trousieme" />




                    </div>



                </div>

            </div>

        </div>
    )
}

export default About