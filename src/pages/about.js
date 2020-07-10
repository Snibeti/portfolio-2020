import React from "react"
import PageWrapper from "../templates/pageWrapper"
import Typewriter from 'typewriter-effect';
import "../styles/global.css"
import SecondNav from "../components/second-nav";


const styles = {

  Typewriter__wrapper: {

      display: 'inline-block'

  }
 

}

export default () => (


<PageWrapper>
    <div className= 'about-header__wrapper'>
    <div className='about-header__text ux'>UX</div>
    <div className='about-header__text'>
          <Typewriter 
            styles= {styles.Typewriter__wrapper}
            options={{
                strings: ['Designer', 'Developer', 'Researcher'],
                autoStart: true,
                loop:true,
                deleteSpeed: 30
            }}
            onInit={(typewriter) => {
            typewriter.typeString('')
            .pauseFor(1000)
            .start();
            }}
          />
    </div>
    </div>

    {/* <h2 className="page-subhead">about me, sarah.</h2> */}
    <SecondNav />
    <div className="about__wrapper">
    <div className="about-text">
    <p>
      Nice to meet you, I'm Sarah- a UX designer/developer passionate about all facets of the user experience centered philosophy. When designing new experiences, I value the user centered approach by synthesizing user research and accessibility standards to influence what I design and build.
      My experience ranges from freelance website development to holistic UX application redesigns and project management.
    </p>
    <p>
      In my free time I enjoy painting, reading (mainly nonfiction), hiking, and constantly exploring new hobbies. 
    </p>
    <p><strong>books I'm currently reading:</strong><br></br>
    <a target='_blank' href="https://shop.smashingmagazine.com/products/design-systems-by-alla-kholmatova">Design Systems, by Alla Kholmatova</a> 
    <br></br>
    <a target='_blank' href="https://shop.smashingmagazine.com/products/design-systems-by-alla-kholmatova">Blindness, by José Saramago</a> </p>
    <br></br>
    <a href="mailto:sabray1121@gmail.com">sabray1121@gmail.com</a>
    </div>
    </div>
  </PageWrapper>
)