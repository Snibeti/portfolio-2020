import React from 'react'
import ImgBanner from '../components/w-imgBanner'
import kkDesign from "../img/kk-design.png"
import PageWrapper from '../templates/pageWrapper'
import imgOne from '../img/kk-img1.png'
import imgTwo from '../img/kk-img2.png'
import imgThree from '../img/kk-img3.png'
import "../styles/global.css"

export default () => (

<PageWrapper>
    <ImgBanner
        imgSrc={kkDesign}  
        imgAlt="kk Design System" 
        text="kk Design System"
    />
    <div className="w-text-img__wrapper">
        <div className="p-wrapper">
            <p><strong>Role: </strong>UX/UI Design and Development<br></br>
            <strong>Duration: </strong> 3 months <br></br>
            </p>
            <a target='_blank' href="https://techno-kk.netlify.app/">Fashion Line Boutique</a>
            <br></br>
            <a target='_blank' href="https://kk-slider.netlify.app/">Musician Music Site</a>
            <br></br>
            <a target='_blank' href="https://techno-kk.netlify.app/">Festival Promotion Page</a>
            <br></br>
            <a target='_blank' href="https://zeroheight.com/3fef58f64">Full Documentation</a>
            <p></p>
            <p>kk design system is driven by modern artistic style values, by creating digital experiences that are image driven and utilize heavy intentional whitespace and large bold text. Components consist of thin line accents and boxy containers and components, drawing aesthetic parallels to editorial magazine design. </p>
            <p>The goal was simple- create a fully functional design system that could be applied across three independent websites. The process of designing, creating, documenting and packaging design system components was up to  our discretion. </p>
            <p>My partner and I decided to take on a more unique workstyle, by both taking on the role of designer and developer by spontaneously designing and collaborating together. We wanted our workflow to be truly agile, and so we utilized tools like Invision's Freehand, and Figma- and later developing components in Storybook. </p>
            <div className="w-img__wrapper">
                <img src={imgOne}></img>
            </div>
            <div className="w-section__head">Purpose</div>
            <p>In order to design for a larger system, we first decided that there should be a generalized purpose for the system. Current popular design systems- Material, Carbon, or Ant- all have a way in which they define their goals and proper ways of using their system. 
            </p>
            <p><i>Material’s design principles are centered around innovative design and science, with intentionally graphic visuals emulating print based design. Conversely, Ant’s design takes more of a natural approach, taking softer lines and geometry found in natural environments and applies that to the language of the system. </i></p>
            <p>o reach a unified design language, we first started by documenting design patterns we have experienced or utilized in the order of a list, collaborating on connections that can be found within these patterns, as well as links that we found interesting or exciting in the context of a system. </p>
            <div className="w-img__wrapper">
                <img src={imgTwo}></img>
            </div>
            <div className="w-section__head">Designing for Three Applications</div>
            <p>We purposely prototyped using only grey boxes, reusing similar boxes and shapes to denote the general kind of components needed for the site. After designing for all three, we audited the three sites to find similar design patterns, and created a master list of components we would need for all of the sites.</p>
            <div className="w-section__head">Designing &amp; Building Components</div>
            <p>In a series of'hot potato' sessions, we took on the challenge of designing the master list of components in Figma. The combination of live collaborating on Figma and command and conquering, we were able to hash out enough details for each component to start building. </p>
            <iframe width="950" height="415" src="https://www.youtube.com/embed/DJWxOtfP8N0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p>For the general structure of the project we decided on using Storybook for our isolated environment to build out our designs and generalized structure of the project. This was a bit of a learning curve for us- Storybook is a very robust system, but it was the first time we used the tool so we only really scratched the surface of the overall potential we could have taken advantage of. Once the core components were created, tested, and working in this isolated system, Woo tackled the job of setting up and publishing an NPM package. </p>
            <p>Due to the highly collaborative dynamic the two of us had, as well as our approach of holistically designing and accounting for all components in the three sites, we set ourselves up for success when moving into creating high fidelity designs. From multiple prior discussions we had identified and defined the overall language and structure of the sites, but ultimately decided that designing the websites as high fidelity assets would be the most beneficial to the asynchronous nature of our remote workflow. </p>
            <div className="w-img__wrapper">
                <img src={imgThree}></img>
            </div>
            <p>We set out to create a design system that could encompass the designs of three entirely separate websites, and we accomplished all three through using a spontaneous, highly collaborative approach. This process has taught us the importance of relaxing when designing, and using it as an opportunity to communicate ideas visually rather than creating a perfect product. We both learned so much about collaborating remotely, and we gained invaluable technical knowledge surrounding publishing, implementing, and documenting a full fledged design system.</p>
            <a target='_blank' href="https://kk.zeroheight.com/styleguide/s/34761/p/40a9c0-getting-started">Full Documentation</a>
        </div>
    </div>
</PageWrapper>

)