import React from 'react'
import ImgBanner from '../components/w-imgBanner'
import PageWrapper from '../templates/pageWrapper'
import imgTwo from '../img/busbuddy-img2.png'
import eyCover from "../img/ey-cover.png"
import "../styles/global.css"

export default () => (

<PageWrapper>
    <ImgBanner
        imgSrc={eyCover}  
        imgAlt="EY Design &amp; Research Work" 
        text="Ernst &amp; Young Work"
    />
    <div className="w-text-img__wrapper">
        <div className="p-wrapper">
            <p><strong>Role: </strong>UX Researcher and Designer <br></br>
            <strong>Duration: </strong> 6 months <br></br>
            </p>
            <p>For six months I worked a hybrid position at Ernst &amp; Young’s design firm in Philadelphia. In the short time I spent there, I took part in conducting design activities and user experience research initiatives to help clients develop and test web based experiences. I was provided the unique experience of working a cross disciplinary role of both a researcher and designer, which gave an opportunity for me to gain a more multi-faceted skillset, as well as provide insights to the other teams. </p>
            <p>I worked with clients such as PNC, Fidelity, Nationwide, Herbalife, as well as EY to help design proprietary software.</p>
            <div className='w-section__head'>Research</div>
            <p></p>
            <p>My role as a researcher was primarily focused on working directly with a client and providing competitive analysis findings on industry specific applications. I learned key skills surrounding synthesizing user gathered data and interviews and applying them in a digestable format for the client, and allow those findings to propell the design decisions. Additionally, I conducted concept testing and usability testing in a formal setting, after organizing and executing a testing protocol.
            </p>
            <p>On a particular project, I was tasked with analyzing data from two seperate rounds of concept testing. I pulled out and discerned patterns in the data and feed this data back to my team in an interative fashion.</p>
            <div className='w-section__head'>Design</div>
            <p>Within the design role, I translated my research synchronously with re-designing or creating interfaces, centering on the results of the findings. I specifically had a major role in designing particular user flows in an EY proprietary software, <a href='https://storybook.ey-intuitive.com/#/'>Storybook.</a> The project had already been in development for a year, and required a redesign for particular elements of the interface. </p>
            <p>At the end of my co-op, I designed and gave a studio-wide speech about mitigating creative burnout. The purpose of the speech was to inspire action from other employees to try and critically think about work life balance, as well as taking on activities and projects independent from normal activities. The keynote can be found here: </p>
            <a href="https://www.dropbox.com/s/ntgac4ixf7ynqvu/ResistTheBurn-InspireSeries-20190906.key?dl=0">Discussion on Burnout (keynote)</a>
        </div>
    </div>
</PageWrapper>

)