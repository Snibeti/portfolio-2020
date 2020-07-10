import React from 'react'
import ImgBanner from '../components/w-imgBanner'
import Wordpress from "../img/wordpress_proto.png"
import PageWrapper from '../templates/pageWrapper'
import imgTwo from '../img/busbuddy-img2.png'
import "../styles/global.css"

export default () => (

<PageWrapper>
    <ImgBanner
        imgSrc={Wordpress}  
        imgAlt="Custom Wordpress Theme" 
        text="Custom Wordpress Theme"
    />
    <div className="w-text-img__wrapper">
        <div className="p-wrapper">
            <p><strong>Role: </strong>Design &amp; Development <br></br>
            <strong>Duration: </strong> 3 months <br></br>
            </p>
            <p>Over a short 10 week period, I learned how to make custom Wordpress themes using PHP, SQL and the custom fields plugin. This introductory course </p>
            <iframe width="950" height="415" src="https://www.youtube.com/embed/twGCsnHDmMM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</PageWrapper>

)