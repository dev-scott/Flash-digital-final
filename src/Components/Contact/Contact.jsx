import React from 'react'
import './Contact.scss'
import Banner_contact from '../../img/Banner_contact.png'
import User from '../../img/user.png'
import Email from '../../img/email.png'
import Write from '../../img/write.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { useState } from 'react'


const Contact = () => {



    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Scotty-dev-camer123', 'template_lqgen8f', form.current, 'qwnRMj_oCjIwNsUnD')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (


        <div className="Contain_contact" id='Contain_contact'>
            <div className="contain_left">

                <div className="left_img">

                    <span className='boule' ></span>
                    <img src={Banner_contact} alt="" />


                </div>

            </div>
            <div className="contain_right">

                <div className="left">

                    <div className="text_left">
                        <h1>hello@flash-digital.com</h1>
                        <p>keep in touch</p>
                    </div>

                    <form ref={form} onSubmit={sendEmail} action="">
                        <div className="contai_input">

                            <div className="input input1"><input type="text" name='user_name' placeholder='Votre nom' /> <img src={User} alt="" /></div>
                            <div className="input"><input type="text" name='user_email' placeholder='Votre email' /> <img src={Email} alt="" /> </div>

                        </div>
                        <div className="contain_btn">

                            <div className="input"> <input type="text" name='message' placeholder='Votre message' /> <img src={Write} alt="" /></div>
                            <button type='submit' value="send">SEND</button>
                            {/* <span> {done && "Merci de nous avoir contacter"} </span> */}

                        </div>
                    </form>


                </div>
            </div>


        </div>

    )
}

export default Contact