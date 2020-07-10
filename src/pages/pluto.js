import React from 'react'
import ImgBanner from '../components/w-imgBanner'
import Pluto from "../img/pluto.png"
import PageWrapper from '../templates/pageWrapper'
import plutoPpl from '../img/pluto-ppl.png'
import plutoDot from '../img/home-move.gif'
import plutoStyle from '../img/design-snib.png'
import "../styles/global.css"

export default () => (

<PageWrapper>
    <ImgBanner
        imgSrc={Pluto}  
        imgAlt="Bus Buddy Banner" 
        text="pluto"
    />
    <div className="w-text-img__wrapper">
        <div className="p-wrapper">
            <p><strong>Role: </strong> Project Manager<br></br>
            <strong>Duration: </strong> 9 months <br></br>
            <strong>Purpose: </strong> Senior Capstone Project <br></br>
            </p>
            <a target='_blank' href='https://apps.apple.com/us/app/pluto/id1495230120'>Download for iPhone</a>
            <br></br>
            <a target='_blank' href='https://play.google.com/store/apps/details?id=io.plutosocial.pluto'>Download for Android</a>
            <p></p>
            <a href="https://docs.google.com/document/d/1FLc9lDHmq7sOUEPdollHrr3JpjvWQ7aUE3oUjmeG7N0/edit?usp=sharing">Full Case Study</a>
            <p></p>
            <p>My role on this project was to lead and maintain project scope, as well as manage team deliverables, tasks, and determine methodologies used to propel research, design, and development. Additionally, I played a major part in preliminary research, and designing UI components and interfaces centered around our research findings.</p>
            <iframe width="950" height="415" src="https://www.youtube.com/embed/5m26YME8cT8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="w-section__head">Summary</div>
            <p>Pluto redefines social media by putting an emphasis on meaningful relationships. It’s an app for close friends only, with extra layers of privacy that other social media platforms lack. Nobody can find your profile unless you send them an invite, and your posts are only shown to the people you choose. The same goes for viewing posts. Say you want to separate the happenings of your family members and your college friends- Pluto allows you to organize your connections into multiple feeds.  </p>
            <div className="w-img__wrapper">
                <img src={plutoPpl}></img>
            </div>
            <div className="w-section__head">Defining the Problem</div>
                <p>When forming a team, a sentiment shared among all members was that people do not feel as though modern social media networks value their privacy. Current leading social media platforms are all about sharing everything with everyone- therefore, our goal is to create an app that is fundamentally focused on creating a private sharing space.</p>
                <div className="w-feature__text">How can we foster meaningful connections in an online space?</div>
                <p>The first three months would be dedicated to better defining a need, and seeing how a new social media application could help with the following: foster and maintain meaningful connection, and maintain a sense of privacy when using the network.</p>
            <div className="w-section__head">Research</div>
                <p>We followed a data driven approach based on various collections of user centered feedback and individualized research. We had a claim, and we needed to back it with comparative research and data surrounding how user’s feel when using social media.</p>
                <p>The first phase in research consisted of independent research- following processes such as comparative analysis, gathering research on pre-existing studies, and conducting various inquiry interviews and surveys to get a better grasp on the user perspective.</p>
                <p>Our target market is for all genders 16-80, who live in English-speaking countries, and like to easily share personal content to those that are close to them. For this research, however, we’ll be targeting potential users aged 18-25 on the presumption that young users are crucial to a platform’s success.<br></br><br></br>For a complete breakdown of the research conducted, the full case study can be found here: <a href="https://docs.google.com/document/d/1FLc9lDHmq7sOUEPdollHrr3JpjvWQ7aUE3oUjmeG7N0/edit?usp=sharing">Full Case Study</a></p>
            <div className="w-section__head">Our Solution</div>
                <p>Through our research, we found that the main obstacle getting in the way of meaningful interactions was a lack of privacy on current popular social media platforms. Our solution was to make privacy the foundation of our app’s design, rather than make it an option in the settings like most other social media.</p>
            <div className="w-img__wrapper">
                <img src={plutoDot}></img>
            </div>
            <div className="w-section__head">Visualizing Connections</div>
                <p>One of our first challenges was designing a home screen that allowed the user to easily organize and view their connections. We decided to use ‘groups’ as a way to filter content. Here are some of the various iterations we went through before landing on our home screen:</p>
                <p>Groups are a core aspect of Pluto. However, it’s not like a group chat where all members see the same group- it’s more like a filtering system that allows you to organize your connections. Each group is essentially it’s own feed, so for example, you can separate your friend connections from your family connections, allowing you to feel completely private when interacting with each one. Navigating through groups is super simple- all you have to do is swipe left or right on the home screen.​</p>
                <div className="w-img__wrapper">
                    <img src={plutoStyle}></img>
                </div>
                <p>Designing for Pluto was a highly iterative process, factoring in things such as color theory and associative psychology when developing the brand.</p>

                <p>When dealing with a social media interface, it’s important to try and maintain a clean, blank slate- instead of trying to create a kind of perception with
                     the interface, allow for the user driven content to speak for itself. </p>

                <p>Our design incorporates all these ideas into one, by creating an interface that is both stylish and interplanetary as well as a blank slate to best feature user’s content.</p>
                <a target='_blank' href="http://www.sabraydesign.com/design-system/pluto_system.pdf">Design Guide</a>
            </div>
    </div>
</PageWrapper>

)