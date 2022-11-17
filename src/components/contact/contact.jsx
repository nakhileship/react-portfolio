import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lc26uc8', 'template_r040xcb', form.current, 'OMiq6spwNRo4m3MA4')

    e.target.reset()
    
  };
  return (
    <div>
      <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
          <RiMessengerLine className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nakhileship@gmail.com</h5>
            <a href="https://m.me/nakhilrsh.nakhilrsh/" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Nakhilesh</h5>
            <a href="https://www.facebook.com/messenger/ " target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp </h4>
            <h5>9072830791</h5>
            <a href="https://api.whatsapp.com/send?phone+919072830791" target="_blank">Send a message</a>
          </article>
        </div>
        {/* end of conact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="messaege"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      </section>
    </div>
  )
}

export default Contact
