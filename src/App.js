import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/about";
import Role from "./Components/Role/role";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context'
import { useContext } from "react"
import Chat from "./Components/ChatBot/Chat";
import Modal from "./Components/Modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import Backdrop from "./Components/Backdrop/Backdrop";
import $ from 'jquery';

import { useState } from "react";
function App() {

  $(document).ready(function () {
    //Off Canvas Menu Slide
    // $(".menu-toggle").click(function () {
    //   $('nav').toggleClass('nav-hide')
    // });

    //Page Scroll To
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').animate({
        'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
        window.location.hash = target;
      });
    });
    // Extra Portfolio Gallery
    $(".show-more-btn").click(function () {
      $(".hidden-gallery").toggle("slow");
    });
  });




  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;




  const [showModal, setShowModal] = useState(false);

  const close = () => setShowModal(false);
  const open = () => setShowModal(true);

  return (
    <div className="App" style={{ background: darkMode ? 'black' : '' }} >
      <Navbar />
      <Intro />
      <About />
      <Role />
      <Service />
      <Contact />
      <Footer >


        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} class="subscribe" onClick={() => (showModal ? close() : open())}  >Abonner vous</motion.button>



      </Footer>
      <AnimatePresence

        initial={false}

        exitBeforeEnter={true}

        onExitComplete={() => null}>

        {showModal && <Modal modalOpen={showModal} handleClose={close} />}
      </AnimatePresence>
      <Chat />
      {/* <Modal /> */}


    </div>
  );
}

export default App;
