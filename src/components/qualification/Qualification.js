import React from 'react';
import './qualification.css';
import { LiaSchoolSolid} from "react-icons/lia"
import {IoSchoolSharp} from "react-icons/io5"
import {LiaCertificateSolid} from "react-icons/lia"

const Qualification = () => {
  return (
    <section id='qualification'>
      <h5>My Qualification</h5>
      <h2>Qualification</h2>
     
      <div className='qualification__content'>

        <article className='qualification__item'>
        <LiaSchoolSolid className='qualification__details-icon'/>

          <div>
            <h3>SSC</h3>
            <p>S.V.HR.SEC.School,Kaniyur</p>
            <p>Graduated: May 2016</p>
          </div>

        </article>

        <article className='qualification__item'>
        <IoSchoolSharp className='qualification__details-icon'/>

          <div>
            <h3>DIPLOMA</h3>
            <p>NPT College,Pollachi </p>
            <p>Completed: September 2019</p>
          </div>

        </article>

        <article className='qualification__item'>
        <LiaCertificateSolid className='qualification__details-icon'/>

          <div>
            <h3>MERN-Fresher</h3>
            <p> 
              GUVI Geek Networks, <br />
              IITM Research Park</p>
            <p>2023-Present</p>
          </div>

        </article>



        </div>
      
    </section>
  );
}

export default Qualification;
