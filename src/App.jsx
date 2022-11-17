import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Services from './components/services/services'
import Portpolio from './components/portfolio/portfolio'
import Contact from     './components/contact/contact'
import Footer from './components/footer/footer'
import Testimonial from './components/testimonials/testimonial'


const App = () => {
  return (
    <div>
     <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portpolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     </>
    </div>
  )
}

export default App
