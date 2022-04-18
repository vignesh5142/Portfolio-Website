import React from 'react';
import "./Contact.css";
import contactimg from "./img/about-9.jpg"
function Contact() {
  return (
    <div className='Contact component__space' id='CONTACT'>
        <div className='row'>
            <div className='col__2'>
                <div className='contact__box'>
                    <h1 className='hire__text'>HIRE ME</h1>
                    <p className='hire__text white'>I am available for freelance work.connect with me via phone :</p>
                    <p className='hire__text white'><strong>9207975142</strong> or email <strong>vigneshm5142@gmail.com</strong></p>
                    <input type="text" className='contact name' placeholder='your name '/>
                    <input type="text" className='contact email' placeholder='your email '/>
                    <input type="text" className='contact subject' placeholder='write a subject'/>
                    <textarea name='message' id='message' placeholder=' write your message'></textarea>
                    <button className='btn contact pointer' type='submit'>SUBMIT</button>
                </div>
            </div>
            <div className='col__2'>
                <img src={contactimg} alt='' className='contact__img'>

                </img>
            </div>
        </div>
     </div>
  )
}

export default Contact;