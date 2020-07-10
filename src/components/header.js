import React from "react"
import { Link } from "gatsby"
import '../utils/fontawesome'
import '../styles/global.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

export default () => (
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>sarah bray</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <li><a className='social-icon' target="_blank" href="https://www.linkedin.com/in/sarah-bray-0b910b11b/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
        <li><a target="_blank" href="https://github.com/Snibeti"><FontAwesomeIcon icon={faGithubAlt}/></a></li>
        <li><a target="_blank" href="#"><FontAwesomeIcon icon={faInstagram}/></a></li> 
        <li><a href="#" ><FontAwesomeIcon icon={faFileAlt}/></a></li>
      </ul>

    </header>
)