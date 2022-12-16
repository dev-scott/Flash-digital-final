import React, { useState } from 'react'
import './Footer.scss'
import Footer_logo from '../../img/Footer_logo.png'
import Facebook from '../../img/Facebook.png'
import Linkding from '../../img/linkding.png'
import Snap from '../../img/snapchat.png'
import Twitter from '../../img/twitter.png'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import Blog from '../../img/Blog.png'
import Linkss from '../../img/link.png'
import Twitt from '../../img/twitt.png'
import { motion } from "framer-motion"
import Modal from "../Modal/Modal"
const Footer = ({ children }) => {


    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    return (
        <div class="contain_footer" id="contain_footer">

            <footer>

                <div class="footer_header">

                    <h1><img src={Blog} alt="" /><span>Block</span></h1>

                    <div class="info">

                        <div class="plus_info">
                            <li>
                                <span><img src={Linkss} alt="" /></span>
                                <h1>Linkedin</h1>
                            </li>
                            <li>
                                <span><img src={Twitt} alt="" /></span>
                                <h1>Twitter</h1>
                            </li>
                        </div>


                    </div>

                </div>
                <div class="footer_body">

                    <div class="block_page">

                        <h1>Block page</h1>
                        <ul>
                            <li>Facebook</li>
                            <li>Youtube</li>
                            <li>Intagram</li>
                        </ul>


                    </div>
                    <div class="shop_page">

                        <h1>Nos information</h1>
                        <ul>
                            <li>Flashdigitalteams@gmail.com</li>
                            <li>(+237) 612344345</li>
                            <li>(+237) 620175030</li>
                        </ul>

                    </div>
                    <div class="template">
                        <h1>Adresse</h1>
                        <ul>
                            <li>Douala , cameroun</li>
                            <li>Pas de structure pour le momenent</li>
                            <li>Flas-digital.org</li>

                        </ul>


                    </div>
                    <div class="subscribe">

                        <h1>Souscriver a notre Newsletter</h1>
                        <p>Souscriver a notre Newsletter pour recevoir  <br /> les dernier mise a jour</p>

                        <div class="input_subscribe">

                            <input type="text" class="subscribe" placeholder="S'abonner" /
                            >
                            {children}


                        </div>
                    </div>


                </div>

                <div class="footer_footer">

                    <p class="para1">© Copyright 2022, Fait par Flash-digital</p>
                    <p class="para2">Avec flash digital , vivez votre reves .</p>




                </div>


            </footer>




        </div>
    )
}

export default Footer