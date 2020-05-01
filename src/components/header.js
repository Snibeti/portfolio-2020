import React from "react"
import { Link } from "gatsby"
import '../utils/fontawesome'
import '../styles/global.css'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faInstagram, faArtstation } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const styles = {

  Typewriter__wrapper: {

      display: 'inline-block'

  }
 

}

export default () => (
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>sarah bray</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <li><a className='social-icon' target="_blank" href="https://www.linkedin.com/in/sarah-bray-0b910b11b/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        <li><a target="_blank" href="#"><FontAwesomeIcon icon={faGithubAlt}/></a></li>
        <li><a target="_blank" href="#"><FontAwesomeIcon icon={faInstagram}/></a></li> 
        <li><a href="#" ><FontAwesomeIcon icon={faArtstation}/></a></li>
      </ul>

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
    </header>
)