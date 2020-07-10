import React from 'react'
import ImgBanner from '../components/w-imgBanner'
import Upenn from "../img/upenn-cover.png"
import PageWrapper from '../templates/pageWrapper'
import imgTwo from '../img/busbuddy-img2.png'
import "../styles/global.css"

export default () => (

<PageWrapper>
    <ImgBanner
        imgSrc={Upenn}  
        imgAlt="UPENN Drupal Work" 
        text="UPENN Drupal Work"
    />
    <div className="w-text-img__wrapper">
        <div className="p-wrapper">
            <p><strong>Role: </strong>Frontend Development &amp; Design <br></br>
            <strong>Duration: </strong> 6 months <br></br>
            </p>
            <p>At the University of Pennsylvania, I worked with the Arts &amp; Sciences Senior Web Developer to work on updating and creating various Drupal 7 websites for different departments. Through this experience I learned core content management system development strategies and the development pipeline in a work environment.</p>
            <p>Each site took around 3-6 months to complete- start to finish. I was able to take of 5 separate projects, you can see their results at the following links:</p>
            <a target='_blank' href='https://korea.sas.upenn.edu/'>Korean Studies</a>
            <br></br>
            <a target='_blank' href="https://rees.sas.upenn.edu/">Russian and East European Studies</a>
            <br></br>
            <a target='_blank' href="https://philosophy.sas.upenn.edu/">Department of Philosophy</a>
        </div>
    </div>
</PageWrapper>

)