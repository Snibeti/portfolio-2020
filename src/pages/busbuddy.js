import React from 'react'
import ImgBanner from '../components/w-imgBanner'
import BusBuddy from '../img/busbuddy.png'
import PageWrapper from '../templates/pageWrapper'
import Fade from 'react-reveal/Fade';
import "../styles/global.css"

export default () => (

<PageWrapper>
    <ImgBanner
        imgSrc={BusBuddy}  
        imgAlt="Bus Buddy Banner" 
        text="Bus Buddy"
    />
    <p>Bus Buddy is an interactive mobile web-app designed for parents with elementary school level students to help battle against the long morning school commute. With this system, students will no longer have to wait at their bus stop, unaware of their bus’ arrival. </p>
    <p>We created a solution that uses an Internet of Things (IoT) approach to eliminate elementary school transportation uncertainties. We used Raspberry PI technology with GPS and RFID sensors which allows students to scan their school IDs as they board their bus, allowing their parents to see where their bus is at any given morning or afternoon via the Bus Buddy app. Bus Buddy also sends parents SMS notifications when students have safely hopped on the bus, and when their bus is running late, a notification is sent with the updated ETA. A live map view with the Bus’ location is also available on the Bus Buddy app. Bus Buddy offers that piece of mind that parents are looking for while also alleviating frustration for students.</p>
</PageWrapper>

)