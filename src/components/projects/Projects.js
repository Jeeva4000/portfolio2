import React from 'react'
import './projects.css'
import IMG1 from '../../assests/scrape (2).png'
import IMG2 from '../../assests/Screenshot (41).png'
import IMG3 from '../../assests/appnotes.png'
import IMG4 from '../../assests/Screenshot (40).png'
import IMG5 from '../../assests/Screenshot (52).png'
import IMG6 from '../../assests/Screenshot (53).png'


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
          <h5>
            Web Scraping project that involves both frontend and backend components.
            The frontend provides a user interface, while the backend handles the scraping logic.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
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
          <h5>
            The Item Catalog project is a web application designed for managing and cataloging items. Users can interact with the application to view, add, update, and delete items within the catalog.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
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
          <h5>
            The Interview Notes project is a web application designed to assist users in organizing and managing notes related to job interviews. It provides a platform for users to keep track of interview details, questions, and other relevant information.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
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
          <h5>
            The Notes App is a web application designed to help users create, manage, and organize their notes. It provides a digital platform for users to jot down thoughts, ideas, to-do lists, or any other information they want to remember.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/notefe' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/notesr' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://notefe.vercel.app' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG5} alt='' />
          </div>
          <h3>Data Management App</h3>
          <h5>
            The Data Management CRUD App is a web application designed to provide users with the ability to manage data efficiently. It allows users to create new records, view existing data, update records, and delete entries from a dataset.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/crudclient' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/crud-serverr' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://crudclient.vercel.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='projects__item'>
          <div className='projects__item-image'>
            <img src={IMG6} alt='' />
          </div>
          <h3>Book Store</h3>
          <h5>
            The Book Store CRUD App is a web application designed for managing a collection of books. It provides users with the ability to perform essential operations such as adding new books, viewing existing books, updating book details, and removing books from the collection.
          </h5>

          <h4 className='projects__item-h4'>

            ⋄ React
            ⋄ MongoDB
            ⋄ Express
            ⋄ nodejs

          </h4>
          <div className='projects__item-cta'>
            <a href='https://github.com/Jeeva4000/storeclient' className='btn' target='_blank' rel="noreferrer">Frontend</a>
            <a href='https://github.com/Jeeva4000/storesr' className='btn' target='_blank' rel="noreferrer">Backend</a>
            <a href='https://storeclient-git-master-jeeva4000.vercel.app/' className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
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