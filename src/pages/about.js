import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Typewriter from 'typewriter-effect';
import "../styles/global.css"
import SecondNav from "../components/second-nav";


const styles = {

  Typewriter__wrapper: {

      display: 'inline-block'

  }
 

}

export default () => (



  <Layout>
      <Header />

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

    <h2 className="page-subhead">about</h2>
    <SecondNav />
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </Layout>
)