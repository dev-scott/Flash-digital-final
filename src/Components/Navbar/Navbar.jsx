import React from 'react'
import Logo from '../../img/Logo.png'
import LogoFin from '../../img/LogoFin.png'
import './Navbar.css'
import Toggle from '../OtherComponents/Toggle/Toggle'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Navbar = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;


    return (

        <div className="n-wrapper">


            <div className="n-left">

                <div className="n-name">  <img src={LogoFin} alt="" /> <h1>Flash-<span>digital</span></h1></div>
                <Toggle />
            </div>
            <div className="n-right">

                <div className="n-list">

                    <ul style={{ listStyleType: 'none', color: darkMode ? 'white' : '' }} >

                        <li> <a href="#contain_home"> Maison </a> </li>
                        <li> <a href="#contain_about"> A propos</a> </li>
                        <li> <a href="#contain_role"> Role </a> </li>
                        <li> <a href="#contain_service"> Service </a></li>
                        <li> <a href="#Contain_contact">  Contact </a></li>


                    </ul>


                </div>

                <button className='button n-button' >
                    Connexion
                </button>



            </div>



        </div>

    )
}

export default Navbar