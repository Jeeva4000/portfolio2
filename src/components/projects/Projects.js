import React from 'react'
import './projects.css'
import IMG1 from '../../assests/scrape (2).png'
import IMG2 from '../../assests/Screenshot (41).png'
import IMG3 from '../../assests/appnotes.png'
import IMG4 from '../../assests/Screenshot (40).png'
// import IMG5 from '../../assests/task.png'
// import IMG6 from '../../assests/chatgpt.png'


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>

      <div className='container projects__container'>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Web Scrapping</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/webscrapperbackend' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/webscrappingfrontends' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://harmonious-belekoy-bf8e3a.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Item Catalog</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/capstonefrontend' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/capstonebackend1' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://capstonefrontend.vercel.app' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG3} alt='' />
          </div>
          <h3>Interview Notes</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/interview' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/interview-notes-server' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://interview-ashy.vercel.app' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Notes App</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/notefe' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/notesr' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://notefe.vercel.app' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG4} alt='' />
          </div>
          <h3>Car Rental</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/carrental-client' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/carrent-server' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://resilient-sunburst-6a6ad5.netlify.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>Task Management</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Chatgpt</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
        {/* <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Flight Booking</h3>
          <div className='projects__item-cta'>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Projects