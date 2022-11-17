import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <div>
      <section id='sevices'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
        </ul>
        </article>
          {/* end of ui/ux */}
          <article className='service'>
        <div className="service__head">
          <h3>WebDevelopment</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
        </ul>
        </article>
          {/* end webdevelopment */}
          <article className='service'>
        <div className="service__head">
          <h3>Content Creation</h3>
        </div>

        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem,ipsum dolor sit amet container elit</p>
          </li>
        </ul>
        </article>
          {/* end of content creation*/}
      </div>

      </section>
    </div>
  )
}

export default services
