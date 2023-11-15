import React from 'react';
import './about.css';
import ME from '../../assests/j1.jpg';
import { FaAward } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { LiaCertificateSolid } from 'react-icons/lia';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Me' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <VscProject className='about__icon' />
              <h5>Projects</h5>
              <small>4 Projects</small>
            </article>
            <article className='about__card'>
              <LiaCertificateSolid className='about__icon' />
              <h5>Certificate</h5>
              <small>Mern-Developer</small>
            </article>
          </div>

          <p>
            As a fresher with experience in both front-end and back-end
            development, committed to delivering high-quality, impactful
            solutions while continuously learning and adapting to new
            technologies.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
