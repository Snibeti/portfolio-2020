import React from 'react'
import ImgBanner from '../components/w-imgBanner'
import BusBuddy from '../img/busbuddy.png'
import PageWrapper from '../templates/pageWrapper'
import imgOne from '../img/busbuddy-img2.png'
import imgTwo from '../img/busbuddy-img1.jpg'
import imgThree from '../img/image3.png'
import "../styles/global.css"

export default () => (

<PageWrapper>
    <ImgBanner
        imgSrc={BusBuddy}  
        imgAlt="Bus Buddy Banner" 
        text="Bus Buddy"
    />
    <div className="w-text-img__wrapper">
        <div className="p-wrapper">
            <p><strong>Role: </strong>UX/UI Research and Design <br></br>
            <strong>Duration: </strong> 6 months <br></br>
            </p>
            <p>Bus Buddy is an interactive mobile web-app designed for parents with elementary school level students to help battle against the long morning school commute. With this system, students will no longer have to wait at their bus stop, unaware of their bus’ arrival. </p>
            <p>My main objective throughout this project was to research the process of school bus drivers and parent’s everyday scheduling and safety struggles by surveying, interviewing, and observing real world scenarios. Through this research, I created a task flow for the application, which later translated into low-high fidelity interactive prototypes.</p>
            <div className="w-img__wrapper">
                <img src={imgOne}></img>
            </div>
            <p>We created a solution that uses an Internet of Things (IoT) approach to eliminate elementary school transportation uncertainties. We used Raspberry PI technology with GPS and RFID sensors which allows students to scan their school IDs as they board their bus, allowing their parents to see where their bus is at any given morning or afternoon via 
               the Bus Buddy app. Bus Buddy also sends parents SMS notifications when students have safely hopped on the bus, and when their bus is running late, a notification is sent with the updated ETA. A live map view with the Bus’ location is also available on the Bus Buddy app. Bus Buddy offers that piece of mind that parents are looking for while also alleviating frustration for students.
            </p>
            <div className="w-img__wrapper">
                <img src={imgTwo}></img>
            </div>
            <p>When it came to designing the style guide, we wanted to make sure to evoke a simple, youthful, and educational kind of feeling and aesthetic. We tested a variety of different color schemes and design elements with users, eventually ending up with a simple look. Rounded corners and bright vibrant colors remind the user of an elementary school setting. This is the kind of style that can be closely associated with schools, to create an idea that this application is both very simple and intuitive to use.</p>
            <p>We pulled various design principles from Material Design, and transformed them into more playful and stylized components, to create harmony between the uniqueness of the idea by making the look have its own unique feel.</p>
            <div className="w-img__wrapper">
                <img src={imgThree}></img>
            </div>
            <a target='_blank' href="#">Full Case Study</a>
        </div>
    </div>
</PageWrapper>

)