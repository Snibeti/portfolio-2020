import React from "react"
import { Link } from "gatsby"
import '../styles/global.css'

const ListLink = props => (
    <li className="second-nav__item">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

export default () => ( 
  
<div className="second-nav__wrapper">
  <ul className="second-nav">
        <ListLink to="/">work</ListLink>
        <li>|</li>
        <ListLink to="/about/">about</ListLink>
  </ul>
</div>

)